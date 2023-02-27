import { ChangeEvent } from 'react';
import { useMutation } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  ActiveType,
  BasicType,
  EducateType,
  ExpType,
  IntroType,
  ProfileType,
  ProjectType,
  SkillType,
} from '@/apis/profile/type';
import { patchUserProfile } from '@/apis/profile/PostProfile';
import { atomProfile } from '@/store/write';

export type ArrayEditType = 'project' | 'experience' | 'active' | 'educate';
export type ArrayProfileType = ProjectType | ExpType | ActiveType | EducateType;
export type ContentEditType = 'basic' | 'intro' | 'skill';
export type ContentProfileType = BasicType | IntroType | SkillType;

const arryaAddState = {
  project: {
    name: '',
    intro: '',
    time: { start: '', end: '' },
    url: '',
    skill: ['af'],
    img: [''],
    works: [''],
  },
  experience: {
    name: '',
    time: { start: '', end: '' },
    role: '',
    works: [''],
  },
  active: { name: '', content: '', time: { start: '', end: '' } },
  educate: { name: '', time: { start: '', end: '' } },
};

const addValidation = (data: ArrayProfileType, ...arg: string[]) =>
  arg.every((e) => data[e].length || data[e].start || data[e].end);

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
    addValidation(profile[type][profile[type].length - 1], 'name', 'time') &&
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
    (index: number) => (name: string, value: string | File) => {
      if (!value) return;
      const temp = profile[type].map((e, idx) =>
        index === idx ? { ...e, [name]: e[name].concat(value) } : e,
      );
      setProfile({ ...profile, [type]: temp });
    };

  const removeArrayList =
    (index: number) => (name: string, listIndex: number) => {
      const temp = profile[type].map((e, idx) =>
        index === idx
          ? {
              ...e,
              [name]: e[name].filter(
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
    setProfile({
      ...profile,
      [type]: { ...profile[type], [name]: value },
    });
  };
  return {
    profile,
    handleOnChange,
  };
};

export const useProfileUpdate = () => {
  const profile = useRecoilValue<ProfileType>(atomProfile);

  const projectUpdate = useMutation(() =>
    patchUserProfile<ProjectType[]>('project', profile.project),
  );
  const workUpdate = useMutation(() =>
    patchUserProfile<ExpType[]>('experience', profile.experience),
  );
  const basicUpdate = useMutation(() =>
    patchUserProfile<BasicType>('basic', profile.basic),
  );
  return { projectUpdate, workUpdate, basicUpdate };
};
