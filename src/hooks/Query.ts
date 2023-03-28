import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  PostSignUpReqeustType,
  PostSignInReqeustType,
} from '@scouit/api-types';
import { postSignUp, postSignIn } from '@/apis/auth';
import { customToast } from '@/utils/toast';
import { localStorgeSetItem } from '@/utils/storge';
import { getCompanyGetById, getCompanyList } from '@/apis/company';
import { getDeveloperList } from '@/apis/user/getList';

export const useSignUpQuery = (req: PostSignUpReqeustType) => {
  const navigate = useNavigate();
  return useMutation(() => postSignUp(req), {
    onSuccess: () => {
      navigate('/sign-in');
      customToast('성공적으로 회원가입하였습니다.', 'success');
    },
    onError: () => {
      customToast('회원가입에 실패했습니다.', 'error');
    },
  });
};

export const useSignInQuery = (req: PostSignInReqeustType) => {
  const navigate = useNavigate();
  return useMutation(() => postSignIn(req), {
    onSuccess: (res) => {
      const { access_token, refresh_token } = res.data;
      localStorgeSetItem('access_token', access_token);
      localStorgeSetItem('refresh_token', refresh_token);
      navigate('/');
      customToast('성공적으로 로그인하였습니다.', 'success');
    },
    onError: () => {
      customToast('로그인에 실패했습니다.', 'error');
    },
  });
};

export const useGetCompanyList = () =>
  useQuery(['developer'], () => getCompanyList());

export const useGetCompanyByIdList = (id: string) =>
  useQuery(['developer'], () => getCompanyGetById(id));

export const useGetDeveloperList = () =>
  useQuery(['developer'], () => getDeveloperList());
