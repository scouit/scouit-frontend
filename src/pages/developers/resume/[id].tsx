import styled from 'styled-components';
import { media } from '@scouit/design-system';
import { ColumnContent, Columns } from '@/layouts/Columns';
import { Header } from '@/components/header';
import { Text } from '@/components/common/text';
import { ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { Profile, ProfileDetail } from '@/assets';
import { ContentCard, _ExplainText, TagList } from './ContentCard';
import { profileDetailDummy } from '@/_dummy/profile';

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
  const {
    writer,
    introduce,
    experience,
    projects,
    skills,
    activity,
    education,
  } = profileDetailDummy;
  return (
    <>
      <_Background src={ProfileDetail} />
      <Header />
      <Columns padding="100px 1rem 50px">
        <_Content direction="row" gap="1.5rem">
          <_ProfileCard>
            <_ProfileImg src={Profile} />
            <ColumnGap gap="10px">
              <Text size="title1">{writer.name}</Text>
              <Text size="title3">{writer.content}</Text>
            </ColumnGap>
            <Text size="title3" color="gray700">
              {writer.role}
            </Text>
          </_ProfileCard>
          <ColumnGap gap="32px">
            <ContentCard title="Introduce" items={[]}>
              <_ContentBox>
                <_ExplainText>간단소개</_ExplainText>
                <Text>{introduce.simple}</Text>
                <_ExplainText>자기소개</_ExplainText>
                <Text>{introduce.complex}</Text>
                {/* <_ContentTitleBox>
                  <Text>기모띠</Text>
                  <Text>Date</Text>
                </_ContentTitleBox> */}
              </_ContentBox>
            </ContentCard>
            <ContentCard title="Experience" items={[]}>
              {experience.map(({ name, date, role, works }) => (
                <_ContentBox>
                  <_ContentTitleBox>
                    <Text>{name}</Text>
                    <Text>{date}</Text>
                  </_ContentTitleBox>
                  <_ExplainText>참여 분야</_ExplainText>
                  <Text>{role}</Text>
                  <_ExplainText>맡은 역할</_ExplainText>
                  {works.map((work) => (
                    <Text>{work}</Text>
                  ))}
                </_ContentBox>
              ))}
            </ContentCard>

            <ContentCard title="Projects" items={[]}>
              {projects.map(
                ({ name, date, works, content, skills, imgs, url }) => (
                  <_ContentBox>
                    <_ContentTitleBox>
                      <Text size="title2">{name}</Text>
                      <Text size="title3">{date}</Text>
                    </_ContentTitleBox>

                    <Text size="title3">{content}</Text>
                    <_ExplainText>맡은 직무</_ExplainText>
                    {works.map((work) => (
                      <Text>{work}</Text>
                    ))}
                    <TagList tags={skills} />

                    <RowGap gap="10px" wrap>
                      {imgs.map((img) => (
                        <_Img src={img} />
                      ))}
                    </RowGap>

                    <Text size="title3" as="a">
                      {url}
                    </Text>
                  </_ContentBox>
                ),
              )}
            </ContentCard>
            <ContentCard title="Skills" items={[]}>
              <_ContentBox>
                <_ExplainText>자주 사용하는 기술</_ExplainText>
                <TagList tags={skills.main} />
                <_ExplainText>그 외 기술</_ExplainText>
                <TagList tags={skills.sub} />
              </_ContentBox>
            </ContentCard>
            <ContentCard title="Activity" items={[]}>
              {activity.map(({ name, date, content }) => (
                <_ContentBox>
                  <_ContentTitleBox>
                    <Text size="title2">{name}</Text>
                    <Text size="title3">{date}</Text>
                  </_ContentTitleBox>
                  <Text size="title3">{content}</Text>
                </_ContentBox>
              ))}
            </ContentCard>
            <ContentCard title="Education" items={[]}>
              {education.map(({ name, date }) => (
                <_ContentBox>
                  <_ContentTitleBox>
                    <Text size="title2">{name}</Text>
                    <Text size="title3">{date}</Text>
                  </_ContentTitleBox>
                </_ContentBox>
              ))}
            </ContentCard>
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
  height: fit-content;
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

const _ContentBox = styled.div`
  background-color: ${({ theme }) => theme.color.primary50};
  padding: 16px 20px;
  border-radius: ${({ theme }) => theme.borderRadius._12};
  box-shadow: ${({ theme }) => theme.shadow.md};
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const _ContentTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const _Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export default ResumeDetailPage;
