import { Github, Instargram, Velog } from '@/assets';

export const navList = [
  { name: '만든사람들', link: '/makes-people' },
  { name: '개인정보처리방침', link: '/developers' },
  { name: '자주 묻는 질문', link: '/frequently-asked-questions' },
];

export const SocialList = [
  { name: <Github hover="gray8" />, link: 'https://github.com/KOVELO2005' },
  {
    name: <Instargram />,
    link: '',
  },
  { name: <Velog />, link: 'https://velog.io/@lokijoji2' },
];
