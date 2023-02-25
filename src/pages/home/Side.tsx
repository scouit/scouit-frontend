import { Header } from '@/components/header';
import { dummy, ProfileCard } from '@/components/card/Profile';
import { ProfileLayout } from '@/layouts/ProfileLayout';
import { homeLinkList } from './Home';
import { ColumnCenterGap, RowGap } from '@/layouts/DirectionGap';
import { ProfileData } from '@/components/card/ProfileData';
import { Tag } from '@/components/card/Tag';

export const SideProjectPage = () => (
  <>
    <Header textList={homeLinkList} currentPage="사이드 프로젝트" gap="78px" />
    <ProfileLayout>
      {Array(10)
        .fill(0)
        .map(() => (
          <ProfileCard isProfile>
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
