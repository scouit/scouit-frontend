import styled from 'styled-components';
import { media } from '@scouit/design-system';
import { ColumnContent, Columns } from '@/layouts/Columns';
import { developersDummy } from '@/_dummy/developers';
import { Header } from '@/components/header';
import { Text } from '@/components/common/text';
import { ColumnGap } from '@/layouts/DirectionGap';
import { Profile, ProfileDetail } from '@/assets';
import { ContentCard } from './ContentCard';

interface ContentCardType {
  title: string;
  direction?: 'row' | 'column';
  role?: string;
  image?: string;
  date?: string;
  url?: string[];
  content?: string;
  works?: string[];
  skills?: string[];
}

const ResumeDetailPage = () => {
  const { title, role, date, works, image, url, content, skills } =
    developersDummy;
  return (
    <>
      <_Background src={ProfileDetail} />
      <Header />
      <Columns padding="100px 1rem 50px">
        <_Content direction="row" gap="1.5rem">
          <_ProfileCard>
            <_ProfileImg src={Profile} />
            <ColumnGap gap="10px">
              <Text size="title1">김태완</Text>
              <Text size="title3">
                저는 대전에서 태어나 대전에서 취업하지 못하는 개발자
                김태완입니다.
              </Text>
            </ColumnGap>
            <Text size="title3" color="gray700">
              frontend
            </Text>
          </_ProfileCard>
          <ColumnGap gap="32px">
            <ContentCard />
          </ColumnGap>
        </_Content>
      </Columns>
    </>
  );
};

const _Content = styled(ColumnContent)`
  ${media._1024('flex-direction: column')}
`;

const _ProfileCard = styled.div`
  width: 260px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.gray0};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

const _ProfileImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

const _Background = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
`;

export default ResumeDetailPage;
