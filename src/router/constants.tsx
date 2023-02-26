import { Error401, Error403, Error404 } from '@/assets';

export const routePath = {
  home: {
    index: '/',
    club: 'club',
    side: 'side-project',
  },
  admin: {
    index: '/admin',
    club: '/admin/club',
  },
  lounge: {
    index: '/lounge',
    write: '/lounge/recruitment',
    detail: 'lounge/:id',
  },
  signin: '/sign-in',
  signup: '/sign-up',
  resetPassword: '/reset-password',
  makesPeople: '/makes-people',
  frequentlyAskedQuestions: '/frequently-asked-questions',
  developers: {
    index: '/developers',
    resume: {
      index: 'resume/*',
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
      intro: 'introduce',
      work: 'work-experience',
      project: 'project',
      tech: 'technology',
      active: 'activity',
      educate: 'education',
    },
    index: '/profile',
  },
  myPage: '/my-page',
  notFound: '/*',
  forbid: '/403',
} as const;

export const ErrorState = {
  unfind404: {
    name: 'Not Found',
    content: '이런, 페이지를 찾을 수 없습니다.',
    image: Error404,
    number: 404,
  },
  unAuth401: {
    name: 'Unauthorized',
    content: '이 페이지에 대한 접근권한이 존재하지 않습니다.',
    image: Error401,
    number: 401,
  },
  forbidden: {
    name: 'Forbidden',
    content: '이 페이지에 대한 접근권한이 존재하지 않습니다.',
    image: Error403,
    number: 403,
  },
} as const;
