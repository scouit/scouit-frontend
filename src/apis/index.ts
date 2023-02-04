import { PostSignInReqeustType } from '@scouit/api-types';
import axios, { AxiosInstance } from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 2000,
});

type MethodType = 'put' | 'post' | 'delete' | 'patch' | 'get';

export const DefaultUri = (defaultUri: string) => {
  return <BodyType>(method: MethodType, uri: string) => {
    return instance[method]<BodyType>(defaultUri + uri);
  };
};
