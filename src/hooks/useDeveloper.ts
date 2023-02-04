import { getDeveloperList } from '@/apis/user/getList';
import { useQuery } from 'react-query';

export const useDeveloper = () => {
  const useGetDeveloperList = () =>
    useQuery(['developer'], () => getDeveloperList());

  return {
    useGetDeveloperList,
  };
};
