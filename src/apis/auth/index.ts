import {
  PostSignInReqeustType,
  PostSignInResponseType,
  PostSignUpReqeustType,
  PostSignUpResponseType,
} from '@scouit/api-types';
import { instance } from '..';

export const postSignIn = (req: PostSignInReqeustType) => instance.post<PostSignInResponseType>('auth/sign-in', req);

export const postSignUp = ({
  name,
  email,
  password,
}: PostSignUpReqeustType) => instance.post<PostSignUpResponseType>('/auth/sign-up', {
  name,
  email,
  password,
});
