import { ProfileHeader } from './Profile';

const nonMemberNavList = [
  {
    name: '채용공고',
    link: '/company/job-posting',
  },
  {
    name: '로그인/회원가입',
    link: '/sign-in',
  },
];

const memberNavList = [
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
