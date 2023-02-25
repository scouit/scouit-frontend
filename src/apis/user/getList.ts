import { GetUserProfileListResponseType } from '@scouit/api-types';
import { instance } from '@/apis';

export const getDeveloperList = async () => {
  const { data } = await instance.get<GetUserProfileListResponseType[]>(
    '/profile',
  );
  return data;
};
