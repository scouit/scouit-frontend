import { GetUserProfileListResponseType } from '@scouit/api-types';
import { instance } from '@/apis';
import { EditType } from './type';

const isWork = 'experience';
const workUrl = 'work-experience';

export const url = (type: EditType) => (type === isWork ? workUrl : type);

export const getUserProfile = async <T>() => {
  const { data } = await typeAxios<T>();
  return data;
};

const typeAxios = async <T>() => instance.get<T>('/profile/write', {
  headers: {
    authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});
