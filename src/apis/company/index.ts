import { instance } from '@/apis';

export interface CompanyType {
  _id: string;
  jobGroup: string;
  belong: string;
  typeOfEmployment: string;
  salary: string;
  workingPosition: string;
  career: string;
  applicationDeadline: string;
  content: string;
}

export const getCompanyList = async () => {
  const { data } = await instance.get<CompanyType[]>('/company');
  return data;
};

export const getCompanyGetById = async (id: string) => {
  const { data } = await instance.get<CompanyType>(`/company/${id}`);
  return data;
};
