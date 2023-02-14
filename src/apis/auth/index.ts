import {
  PostSignInReqeustType,
  PostSignInResponseType,
  PostSignUpReqeustType,
  PostSignUpResponseType,
} from '@scouit/api-types';
import { instance } from '..';

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
