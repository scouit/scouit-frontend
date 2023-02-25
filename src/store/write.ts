import { atom } from 'recoil';
import { ProfileType } from '@/apis/profile/type';

export const atomProfile = atom<ProfileType>({
  key: 'profile',
  default: {
    basic: {
      role: '',
    },
    intro: { aboutMe: '', oneLineIntroduction: '' },
    project: [
      {
        name: '',
        intro: '',
        time: { start: '', end: '' },
        url: '',
        skill: ['af'],
        img: [],
        works: [],
      },
    ],
    experience: [{
      name: '', time: { start: '', end: '' }, role: '', works: [],
    }],
    skill: { mainSkill: [], subSkill: [] },
    active: [{ name: '', content: '', time: { start: '', end: '' } }],
    educate: [{ name: '', time: { start: '', end: '' } }],
  },
});
