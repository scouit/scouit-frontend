import { Back } from '@/assets';
import { ContentCard } from '@/components/card/detail/Content';
import { DetailContent } from '@/layouts/Detail/Content';
import { DetailLayout } from '@/layouts/Detail/DetailLayout';

const toss = {
  title: 'Toss',
  date: '2022.05 ~ 재직 중',
  role: 'FrontEnd 챕터 당담',
  works: [
    '사내 보안서비스를 당담했습니다.',
    '회사 어드민 계정의 UI 뷰를 스토리북으로 짜는 역할을 당담했습니다.',
    '회사 어드민 계정의 UI 뷰를 스토리북으로 짜는 역할을 당담했습니다. ',
    '    회사 어드민 계정의 UI 뷰를 스토리북으로 짜는 역할을 당담했습니다. ',
    '회사 어드민 계정의 UI 뷰를 스토리북으로 짜는 역할을 당담했습니다.',
    '회사 어드민 계정의 UI 뷰를 스토리북으로 짜는 역할을 당담했습니다. ',
    '    회사 어드민 계정의 UI 뷰를 스토리북으로 짜는 역할을 당담했습니다. ',
  ],
  content:
    '어? 영감이다! 여기저기 흩어져있는 넘치는 영감. 세상의 모든 것은 영감이 될 수 있고, 영감탱에서 기억할 수 있어요. 글, 이미지(사진, 스크린샷), 웹링크를 첨부하여 나의 통통튀는 영감을 빠르게 태그, 메모와 함께 차곡차곡 아카이빙해봐요.',
  image: Back,
  skills: ['', '', '', '', '', '', '', '', '', '', ''],
  url: ['https://velog.io/@lokijoji2', 'https://github.com/akoxx'],
};

export const ResumeDetailPage = () => (
  <DetailLayout>
    <DetailContent title="업무 경험">
      <ContentCard
        title={toss.title}
        role={toss.role}
        date={toss.date}
        works={toss.works}
      />
    </DetailContent>
    <DetailContent title="프로젝트">
      <ContentCard
        title={toss.title}
        direction="column"
        date={toss.date}
        works={toss.works}
        image={toss.image}
        url={toss.url}
        content={toss.content}
        skills={toss.skills}
      />
      <ContentCard
        title={toss.title}
        direction="column"
        date={toss.date}
        works={toss.works}
        image={toss.image}
        url={toss.url}
        content={toss.content}
        skills={toss.skills}
      />
    </DetailContent>
  </DetailLayout>
);
