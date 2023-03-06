// 파일경로랑 === path
// export default
export const PAGE_LIST = [
  'Home',
  'Club',
  'MakesPeople',
  'write/Active',
] as const;

export type PageListType = (typeof PAGE_LIST)[number];
