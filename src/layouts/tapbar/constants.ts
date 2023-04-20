import { ProfileType } from '../../apis/profile/type';

const writeUrl = '/profile/write/';

export const URI = [
  `${writeUrl}basic`,
  `${writeUrl}experience`,
  `${writeUrl}project`,
  `${writeUrl}technology`,
  `${writeUrl}activity`,
  `${writeUrl}education`,
];

export const lio = [
  { title: '기본 정보', url: URI[0] },
  { title: '업무 경험', url: URI[1] },
  { title: '프로젝트', url: URI[2] },
  { title: '기술스택', url: URI[3] },
  { title: '활동', url: URI[4] },
  { title: '학력', url: URI[5] },
  // '학력',
  // '수상 및 활동',
  // '수료 및 자격증',
  // '외국어',
  // 'URL',
];

export const profileInit: ProfileType = {
  basic: { role: '', name: '', image: '' },
  project: [
    {
      name: '',
      introduce: '',
      startDate: undefined,
      endDate: undefined,
      url: [],
      works: [],
      skills: [],
      images: [],
    },
  ],
  experience: [
    { name: '', startDate: undefined, endDate: undefined, role: '', works: [] },
  ],
  technology: { main: [], sub: [] },
  activity: [
    { name: '', content: '', startDate: undefined, endDate: undefined },
  ],
  education: [{ name: '', startDate: undefined, endDate: undefined }],
};
