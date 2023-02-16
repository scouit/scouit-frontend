import { Error401, Error403, Error404 } from '@/assets';

export const routePath = {
  home: '/',
  signin: '/sign-in',
  signup: '/sign-up',
  resetPassword: '/reset-password',
  makesPeople: '/makes-people',
  frequentlyAskedQuestions: '/frequently-asked-questions',
  developers: {
    index: '/developers',
    resume: {
      index: 'resume',
      dynamic: ':id',
    },
  },
  company: {
    index: '/company',
    jobPosting: {
      index: 'job-posting',
      dynamic: ':id',
    },
  },
  profile: {
    write: {
      index: 'write/*',
      basic: 'basic',
      work: 'work-experience',
      project: 'project',
    },
    index: '/profile',
  },
  myPage: '/my-page',
  notFound: '/*',
  unAuth: '/401',
  forbid: '/403',
} as const;

export const ErrorState = {
  unfind404: {
    name: 'Not Found',
    content: `Sorry, you are not authorized\n to access this page.`,
    image: Error404,
    number: 404,
  },
  unAuth401: {
    name: 'Unauthorized',
    content: '이 페이지에 대한 접근권한이 존재하지 않습니다.',
    image: Error401,
    number: 401,
  },
  forbid403: {
    name: 'Forbidden',
    content: '이런, 페이지를 찾을 수 없습니다.',
    image: Error403,
    number: 403,
  },
} as const;
