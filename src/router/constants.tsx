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
    edit: 'edit',
    index: '/profile',
  },
  myPage: '/my-page',
  notFound: '/*',
} as const;
