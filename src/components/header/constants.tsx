import { Profile } from '@/assets/imgs';

export const staticMember = [
  {
    name: '채용공고',
    link: '/company/job-posting',
  },
  {
    name: '연합동아리',
    link: '/club',
  },
  {
    name: '라운지',
    link: '/lounge',
  },
];

export const writeProfileLink = {
  name: '이력서 작성',
  link: '/profile/write/basic',
};


export const NavListIsLogin = (isLogin: boolean) => {
  return <div></div>;
};
