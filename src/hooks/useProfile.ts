import {
  ContentType,
  getUserProfile,
  IntroType,
} from '@/apis/profile/getProfile';
import { patchUserProfile } from '@/apis/profile/PostProfile';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useForm } from './useForm';

export interface ProfileType {
  project: ContentType[];
  workExperience: ContentType[];
}

export type ArrayEditType = 'project' | 'workExperience';

export const useProfile = () => {
  const [profile, setProfile] = useState<ProfileType>({
    project: [{ name: '', content: '' }],
    workExperience: [{ name: '', content: '' }],
  });
  useQuery(['getProject'], () => getUserProfile<ContentType[]>('project'), {
    onSuccess: (data) => {
      data.length && setProfile({ ...profile, project: data });
    },
  });
  useQuery(['getWork'], () => getUserProfile<ContentType[]>('workExperience'), {
    onSuccess: (data) => {
      data.length && setProfile({ ...profile, workExperience: data });
    },
  });

  const mutate = (type: ArrayEditType) =>
    useMutation(() => patchUserProfile<ContentType[]>(type, profile[type]));

  const projectUpdate = mutate('project');
  const workUpdate = mutate('workExperience');

  const arrayChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: ArrayEditType,
    index: number
  ) => {
    const { name, value } = e.target;
    const temp = profile[type].map((e, idx) =>
      index === idx ? { ...e, [name]: value } : e
    );
    setProfile({ ...profile, [type]: temp });
  };

  const addContent = (type: ArrayEditType) =>
    setProfile({
      ...profile,
      [type]: [...profile[type], { name: '', content: '' }],
    });

  return {
    profile,
    projectUpdate,
    workUpdate,
    arrayChange,
    addContent,
  };
};

export const useBasic = () => {
  const { text, setText, handleOnChange } = useForm<IntroType>({
    aboutMe: '',
    oneLineIntroduction: '',
  });
  useQuery(['getbasic'], () => getUserProfile<IntroType>('basic'), {
    onSuccess: (data) => setText(data),
    onError: (error) => {
      console.log(error);
    },
  });
  const basicUpdate = useMutation(() =>
    patchUserProfile<IntroType>('basic', text)
  );
  return { text, handleOnChange, basicUpdate };
};
