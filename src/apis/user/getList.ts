import { instance } from '@/apis';

export const getDeveloperList = async () => {
  const { data } = await instance.get('/profile');
  return data;
};
