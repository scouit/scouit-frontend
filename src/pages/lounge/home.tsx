import { Profile } from '@/assets';
import { LoungeData } from '@/components/card/LoungeData';
import { dummy, ProfileCard } from '@/components/card/Profile';
import { ProfileData } from '@/components/card/ProfileData';
import { Tag } from '@/components/card/Tag';
import { Header } from '@/components/header';
import { useDeveloper } from '@/hooks/useDeveloper';
import { ColumnCenterGap, RowGap } from '@/layouts/DirectionGap';
import { ProfileLayout } from '@/layouts/ProfileLayout';

export const adminLinkList = [
  { title: '홈', url: '/admin' },
  { title: '연합 동아리', url: '/admin/club' },
];

const card = {
  title: '헤더를 장식하는 새로운 스터디',
  content:
    '당신이 프로그래밍을 배울 때 가장 먼저 배웠던 자료구조는 무엇이었나?높은 확률로 아마도 배열일 것이다. 그렇다면 배열은 왜 배움에 있어서 가장 우선시 되는 자료구조일까',
  peoples: '프론트 엔드 2명을 모집합니다',
  kinda: '',
};

export const LoungeHomePage = () => {
  const { useGetDeveloperList } = useDeveloper();
  const { data } = useGetDeveloperList();
  return (
    <>
      <Header textList={adminLinkList} currentPage="홈" gap="78px" />
      <ProfileLayout>
        {Array(10)
          .fill(0)
          .map((cardData, idx) => (
            <ProfileCard key={idx} name="name" isProfile={false}>
              <LoungeData
                title={card.title}
                content={card.content}
                peoples={card.peoples}
                kinda={card.kinda}
              />
            </ProfileCard>
          ))}
      </ProfileLayout>
    </>
  );
};
