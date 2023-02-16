import { instance } from '@/apis';
import { GetUserProfileListResponseType } from '@scouit/api-types';

export const getDeveloperList = async () => {
  const { data } = await instance.get<GetUserProfileListResponseType[]>(
    '/profile'
  );
  return data;
};
