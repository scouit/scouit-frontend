import { ProfileType } from '@/apis/profile/getProfile';
import { atom } from 'recoil';

export const atomProfile = atom<ProfileType>({
  key: 'profile',
  default: {
    basic: {
      aboutMe: '',
      oneLineIntroduction: '',
    },
    project: [{ name: '', content: '' }],
    workExperience: [{ name: '', content: '' }],
  },
});
