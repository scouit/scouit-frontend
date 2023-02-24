import { Profile } from '@/assets';
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

export const AdminHomePage = () => {
  const { useGetDeveloperList } = useDeveloper();
  const { data } = useGetDeveloperList();
  return (
    <>
      <Header textList={adminLinkList} currentPage="홈" gap="78px" />
      <ProfileLayout>
        {Array(10)
          .fill(0)
          .map((cardData, idx) => (
            <ProfileCard key={idx} name={'name'} url={Profile} isProfile={true}>
              <ColumnCenterGap gap="2.25rem" padding="0 1.5rem">
                <ProfileData
                  url={dummy.profile}
                  name={dummy.name}
                  role={dummy.role}
                  descript={dummy.descript}
                />
                <RowGap gap="0.5rem">
                  {dummy.tag.map((content) => (
                    <Tag padding="0.5625rem 1.125rem">{content}</Tag>
                  ))}
                </RowGap>
              </ColumnCenterGap>
            </ProfileCard>
          ))}
      </ProfileLayout>
    </>
  );
};
