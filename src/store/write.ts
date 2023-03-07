import { atom } from 'recoil';
import { ProfileType } from '@/apis/profile/type';

export const atomProfile = atom<ProfileType>({
  key: 'profile',
  default: {
    basic: {
      role: '',
    },
    introduce: { simple: '', complex: '' },
    project: [
      {
        name: '',
        introduce: '',
        period: { start: '', end: '' },
        url: '',
        skills: ['af'],
        img: [],
        works: [],
      },
    ],
    experience: [
      {
        name: '',
        period: { start: '', end: '' },
        role: '',
        works: [],
      },
    ],
    technology: { main: [], sub: [] },
    activity: [{ name: '', content: '', period: { start: '', end: '' } }],
    education: [{ name: '', period: { start: '', end: '' } }],
  },
});
