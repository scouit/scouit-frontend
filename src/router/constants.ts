// 파일경로랑 === path
// export default
export const PAGE_LIST = [
  '',
  'club',
  'side-project',
  'myPage',
  'makesPeople',
  'frequentlyAskedQuestions',
  'profile/write/active',
  'profile/write/technology',
  'profile/write/basic',
  'profile/write/education',
  'profile/write/project',
  'profile/write/introduce',
  'profile/write/experience',
  'lounge',
  'lounge/detail',
  'lounge/recruitment',
  'developers/resume/detail',
  'company/job-posting',
  'company/job-posting/detail',
  'auth/sign-in',
  'auth/sign-up',
  'auth/resetPassword',
  'admin/club',
  'admin',
] as const;

export type PageListType = (typeof PAGE_LIST)[number];
