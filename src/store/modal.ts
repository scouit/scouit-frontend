import { atom } from 'recoil';

export const profileSelectBox = atom<boolean>({
  key: 'profileSelectBox',
  default: false,
});
