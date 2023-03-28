import { ChangeEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  ActiveType,
  BasicType,
  EditType,
  EducateType,
  ExpType,
  IntroType,
  ProfileType,
  ProjectType,
  SkillType,
} from '@/apis/profile/type';
import { patchUserProfile } from '@/apis/profile/PostProfile';
import { atomProfile } from '@/store/write';

export type ArrayEditType = 'project' | 'experience' | 'activity' | 'education';
export type ArrayProfileType = ProjectType | ExpType | ActiveType | EducateType;
export type ContentEditType = 'basic' | 'introduce' | 'technology';
export type ContentProfileType = BasicType | IntroType | SkillType;

const arryaAddState = {
  project: {
    name: '',
    introduce: '',
    period: { start: '', end: '' },
    url: '',
    skills: ['af'],
    img: [''],
    works: [''],
  },
  experience: {
    name: '',
    period: { start: '', end: '' },
    role: '',
    works: [''],
  },
  activity: { name: '', content: '', period: { start: '', end: '' } },
  education: { name: '', period: { start: '', end: '' } },
};

const addValidation = (data: ArrayProfileType, ...arg: ('name' | 'period')[]) =>
  arg.every((e) => {
    if (e === 'name') return data[e].length;
    if (e === 'period') return data[e].start || data[e].end;
    return false;
  });

export const useProfileArray = (type: ArrayEditType) => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);

  const listChange =
    (index: number) =>
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = event.target;
      const temp = profile[type].map((e: ArrayProfileType, idx) =>
        index === idx ? { ...e, [name]: value } : e,
      );
      setProfile({ ...profile, [type]: temp });
    };

  const addContent = () =>
    addValidation(profile[type][profile[type].length - 1], 'name', 'period') &&
    setProfile(() => ({
      ...profile,
      [type]: [...profile[type], arryaAddState[type]],
    }));
  return {
    profile,
    setProfile,
    listChange,
    addContent,
  };
};

export const useProfileList = (type: ArrayEditType) => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);
  const addListArray =
    (index: number) =>
    (name: 'works' | 'img' | 'skills', value: string | File) => {
      if (!value) return;
      const temp = profile[type].map((e, idx) =>
        index === idx
          ? {
              ...e,
              [name]: (e as ProjectType)[name].concat(value as string),
            }
          : e,
      );
      setProfile({ ...profile, [type]: temp });
    };

  const removeArrayList =
    (index: number) =>
    (name: 'works' | 'skills' | 'img', listIndex: number) => {
      const temp = profile[type].map((e, idx) =>
        index === idx
          ? {
              ...e,
              [name]: (e as ProjectType)[name].filter(
                (_, clickedIdx) => listIndex !== clickedIdx,
              ),
            }
          : e,
      );
      setProfile({ ...profile, [type]: temp });
    };
  return { addListArray, removeArrayList };
};

export const useProfileContent = (type: ContentEditType) => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);
  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setProfile((prev) => ({
      ...prev,
      [type]: { ...prev[type], [name]: value },
    }));
  };
  return {
    profile,
    handleOnChange,
  };
};

export const useProfileUpdate = (type: EditType) => {
  const profile = useRecoilValue<ProfileType>(atomProfile);

  const profileUpdate = useMutation(() =>
    patchUserProfile<ProfileType[EditType]>(type, profile[type]),
  ).mutate;

  return profileUpdate;
};
