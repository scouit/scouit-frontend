import { instance } from '@/apis';
import { GetUserProfileListResponseType } from '@scouit/api-types';

export type ProfileType = BasicType & ProjectType & ExpType;

export interface BasicType {
  basic: IntroType;
}

export interface ProjectType {
  project: ContentType[];
}

export interface ExpType {
  workExperience: ContentType[];
}

export type IntroType = {
  aboutMe: string;
  oneLineIntroduction: string;
};

export type ContentType = {
  content: string;
  name: string;
};

export type EditType = 'basic' | 'project' | 'workExperience';

const isWork = 'workExperience';
const workUrl = 'work-experience';

export const url = (type: EditType) => (type === isWork ? workUrl : type);

export const getUserProfile = async <T>(type: EditType) => {
  const { data } = await typeAxios<T>(type);
  return data;
};

const typeAxios = async <T>(type: EditType) =>
  await instance.get<T>('/profile/write?type=' + url(type), {
    headers: {
      authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
