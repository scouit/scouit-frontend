import { atom } from 'recoil';
import { ProfileType } from '@/apis/profile/type';

export const atomProfile = atom<ProfileType>({
  key: 'profile',
  default: null,
});
