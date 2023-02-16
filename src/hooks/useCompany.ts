import { getCompanyGetById, getCompanyList } from '@/apis/company';
import { useQuery } from 'react-query';

export const useCompany = () => {
  const useGetCompanyList = () =>
    useQuery(['developer'], () => getCompanyList());

  const useGetCompanyByIdList = (id: string) =>
    useQuery(['developer'], () => getCompanyGetById(id));

  return {
    useGetCompanyList,
    useGetCompanyByIdList,
  };
};
