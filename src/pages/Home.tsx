import { ProfileCard } from '@/components/card/Profile';
import { ColumnCenterGap, ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { ProfileData } from '@/components/card/ProfileData';
import { Tag } from '@/components/card/Tag';
import { HeaderWrapper } from '@/layouts/wrapper/Header';
import { dummy } from '@/_dummy/Profile';
import { _CardColums } from '@/layouts/Columns';
import styled from 'styled-components';

export const HomePage = () => (
  <HeaderWrapper currentPage="홈">
    <_CardColums>
      {dummy.map(({ profile, name, role, description, tag }) => (
        <ProfileCard isProfile>
          <ColumnCenterGap gap="2.25rem" padding="0 1.5rem">
            <ProfileData
              url={profile}
              name={name}
              role={role}
              descript={description}
            />
            <RowGap gap="0.5rem">
              {tag.map((content) => (
                <Tag padding="0.5625rem 1.125rem">{content}</Tag>
              ))}
            </RowGap>
          </ColumnCenterGap>
        </ProfileCard>
      ))}
    </_CardColums>
  </HeaderWrapper>
);
