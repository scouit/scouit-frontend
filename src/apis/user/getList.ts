import { instance } from '@/apis';
import { GetUserProfileListResponseType } from '@scouit/api-types';

export const getDeveloperList = async () => {
  const { data } = await instance.get<GetUserProfileListResponseType[]>(
    '/user/profile/list'
  );
  return data;
};
