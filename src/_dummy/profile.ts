import { Back, MainProfile, Profile, ProfileSide } from '@/assets';

export const cardDummy = [
  {
    name: '조경현',
    url: MainProfile,
    role: 'UI/UX 엔지니어',
    description:
      '항상 더 좋은 프로덕트에 대해 고민하고결정해요. 단순한 의사결정이아닌 여러 답을 도출하고 그 중에 가장 올바른 결정을 합니다.',
  },
  {
    name: '케미스',
    url: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    role: '백엔드 개발자',
    description:
      '저는 여행 떠나는 것을 좋아합니다. 여러 장소를 둘러보며 다른 사람들의 생각을 듣고 싶습니다.',
  },
  {
    name: 'blitz',
    url: 'https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    role: '게임 개발자',
    description:
      'Hallo, ich bin Blitz und lebe in Deutschland. Ich bin gerne zu Hause',
    tag: ['사이드 프로젝트 모집 중', '커피챗 가능'],
  },
  {
    name: '스미스',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    role: 'iOS 개발자',
    description:
      '안녕하세요 더 나은 서비스를 제공하기 위해 노력하고 있는 스미스입니다.',
    tag: ['사이드 프로젝트 모집 중', '커피챗 가능'],
  },
  {
    name: 'Ashley',
    url: 'https://plus.unsplash.com/premium_photo-1673698463059-c022fb3a32ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUVDJTlEJUJDJUVCJUIzJUI4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    role: '하드웨어 엔지니어',
    description:
      '하루하루 즐기며 살아갑니다. 코딩을 취미로 공부하며 생활합니다.',
    tag: ['사이드 프로젝트 모집 중', '커피챗 가능'],
  },
  {
    name: '김기명',
    url: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFidG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    role: '빅데이터 엔지니어',
    description:
      '안녕하세요 현재 00대학교에 재학중인 김기명입니다. 만족할 때까지 도전하는 성격을 갖고 있습니다.',
    tag: ['사이드 프로젝트 모집 중', '커피챗 가능'],
  },
  {
    name: 'Elon Musk',
    url: 'https://i.namu.wiki/i/upRVKX9BzVTLN-MU0iVm4Mz2zdx5Cb7_T5y5axpKPnZnO7RfBaWKjGMnRIxvzCzyjMNXPo2CjJK9WKtLcv0AtL-zeBUHx2V2iksmX9CfI0J45pV5b0ElHITxA45c7lOHYSDlfoMgi2svd3j_QnfZ5g.webp',
    role: 'CEO',
    description:
      '저는 세상을 변화시키거나 미래에 영향을 미치거나 사람들이 주목할만한 놀라운 신기술에 관심이 있습니다. 그리고 사람들은 "와, 어떻게 그런 일이 일어났지? 어떻게 그게 가능합니까?"라고 말하는 것입니다.',
    tag: ['사이드 프로젝트 모집 중', '커피챗 가능'],
  },
];

export const profileDetailDummy = {
  writer: {
    name: '김태완',
    content:
      '저는 대전에서 태어나 대전에서 취업하지 못하는 개발자 김태완입니다.',
    role: 'fronend',
  },
  introduce: {
    simple: 'simple',
    complex: 'complex',
  },
  experience: [
    {
      name: 'scout',
      date: '2022 ~ 2023',
      role: 'role',
      works: ['works', 'bitch'],
    },
  ],
  projects: [
    {
      name: 'name',
      date: '2023 ~ 2323',
      works: ['works', 'ia'],
      content: 'asfasf',
      imgs: [Back],
      skills: ['skills'],
      url: 'url',
    },
  ],
  skills: {
    main: ['main'],
    sub: ['suvb'],
  },
  activity: [
    {
      name: 'name',
      date: '2023 ~ 23232',
      content: '2131',
    },
  ],
  education: [{ name: 'name', date: '2023 ~ 23232' }],
};
