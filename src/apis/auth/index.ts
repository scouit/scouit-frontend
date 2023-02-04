import {
  PostSignInReqeustType,
  PostSignInResponseType,
  PostSignUpReqeustType,
  PostSignUpResponseType,
} from '@scouit/api-types';
import { DefaultUri, instance } from '..';

const AuthUri = DefaultUri('/auth');

instance({
  url: '',
  method: 'po',
  baseURL: '/auth',
});

export const postLogout = () => {
  return AuthUri<PostSignInReqeustType>('post', '/logout');
};

export const postSignIn = (req: PostSignInReqeustType) => {
  return instance.post<PostSignInResponseType>('auth/sign-in', req);
};

export const postSignUp = ({
  name,
  email,
  password,
}: PostSignUpReqeustType) => {
  return instance.post<PostSignUpResponseType>('/auth/sign-up', {
    name,
    email,
    password,
  });
};
