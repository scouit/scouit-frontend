import { ProfileHeader } from './Profile';

const nonMemberNavList = [
  {
    name: '개발자 탐색',
    link: '/developers',
  },
  {
    name: '채용공고',
    link: '/company/job-posting',
  },
  {
    name: '로그인/회원가입',
    link: '/login',
  },
];

const memberNavList = [
  {
    name: '개발자 탐색',
    link: '/developers',
  },
  {
    name: '채용공고',
    link: '/company/job-posting',
  },
  {
    name: <ProfileHeader />,
    link: '',
  },
];

export const NavListIsLogin = (isLogin: boolean) =>
  isLogin ? memberNavList : nonMemberNavList;
