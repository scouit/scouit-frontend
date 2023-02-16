import {
  ContentType,
  EditType,
  getUserProfile,
  IntroType,
  ProfileType,
} from '@/apis/profile/getProfile';
import { patchUserProfile } from '@/apis/profile/PostProfile';
import { atomProfile } from '@/store/write';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { RecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { useForm } from './useForm';

export type ArrayEditType = 'project' | 'workExperience';

export const useProfile = (type: ArrayEditType) => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);

  const arrayChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const temp = profile[type].map((e, idx) =>
      index === idx ? { ...e, [name]: value } : e
    );
    setProfile({ ...profile, [type]: temp });
  };

  const addContent = () => {
    setProfile(() => ({
      ...profile,
      [type]: [...profile[type], { name: '', content: '' }],
    }));
  };

  return {
    profile,
    setProfile,
    arrayChange,
    addContent,
  };
};

export const useProfileUpdate = () => {
  const profile = useRecoilValue<ProfileType>(atomProfile);
  const mutate = (type: EditType) =>
    useMutation(() =>
      patchUserProfile<ContentType[] | IntroType>(type, profile[type])
    );

  const projectUpdate = mutate('project');
  const workUpdate = mutate('workExperience');
  const basicUpdate = mutate('basic');
  return { projectUpdate, workUpdate, basicUpdate };
};

export const useBasic = () => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);
  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setProfile({
      ...profile,
      basic: { ...profile.basic, [name]: value },
    });
  };

  return { profile, handleOnChange };
};
