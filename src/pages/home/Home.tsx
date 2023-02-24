import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { dummy, ProfileCard } from '@/components/card/Profile';
import { SimplyModal } from '@/components/modal/SimplyProfile';
import { Columns } from '@/layouts/Columns';
import { useState } from 'react';
import { useDeveloper } from '@/hooks/useDeveloper';
import { Profile } from '@/assets';
import styled from 'styled-components';
import { ProfileLayout } from '@/layouts/ProfileLayout';
import { ColumnCenterGap, RowGap } from '@/layouts/DirectionGap';
import { ProfileData } from '@/components/card/ProfileData';
import { Tag } from '@/components/card/Tag';

export const homeLinkList = [
  { title: '홈', url: '/' },
  { title: '연합 동아리', url: '/club' },
  { title: '사이드 프로젝트', url: '/side-project' },
];

export const HomePage = () => {
  const { useGetDeveloperList } = useDeveloper();
  const { data } = useGetDeveloperList();
  return (
    <>
      <Header textList={homeLinkList} currentPage="홈" gap="78px" />
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
