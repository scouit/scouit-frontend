import { atom } from 'recoil';
import { ProfileType } from '@/apis/profile/type';
import { profileInit } from '@/layouts/tapbar/constants';

export const atomProfile = atom<ProfileType>({
  key: 'profile',
  default: profileInit,
});
