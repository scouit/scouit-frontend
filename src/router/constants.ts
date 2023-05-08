// 파일경로랑 === path
// export default
export const PAGE_LIST = [
  '/',
  '/club',
  '/side-project',
  '/myPage',
  '/makesPeople',
  '/frequentlyAskedQuestions',
  '/profile/write/activity',
  '/profile/write/technology',
  '/profile/write/basic',
  '/profile/write/education',
  '/profile/write/project',
  '/profile/write/introduce',
  '/profile/write/experience',
  '/lounge',
  '/lounge/[:id]',
  '/lounge/recruitment',
  '/developers/resume/[:id]',
  '/company/job-posting',
  '/company/job-posting/[:id]',
  '/auth/sign-in',
  '/auth/sign-up',
  '/auth/resetPassword',
  '/admin/club',
  '/admin',
] as const;

export type PageListType = (typeof PAGE_LIST)[number];
