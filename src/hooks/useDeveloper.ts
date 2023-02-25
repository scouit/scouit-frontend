import { useQuery } from 'react-query';
import { getDeveloperList } from '@/apis/user/getList';

export const useDeveloper = () => {
  const useGetDeveloperList = () => useQuery(['developer'], () => getDeveloperList());

  return {
    useGetDeveloperList,
  };
};
