import styled from 'styled-components';
import { media } from '@scouit/design-system/dist/styles/media/index';
import { ColumnContent, Columns } from '@/layouts/Columns';
import { developersDummy } from '@/_dummy/developers';
import { Header } from '@/components/header';
import { detailDummy } from '@/_dummy/profile';
import { Text } from '@/components/common/text';
import { ColumnGap, ColumnStartGap } from '@/layouts/DirectionGap';
import { Tag } from '@/components/common/tag';
import { React } from '@/assets';

interface DetailContentType {
  title: string;
  children: React.ReactNode;
}

const DetailContent = ({ title, children }: DetailContentType) => (
  <_ContentWrapper>
    <Text size="heading1" color="gray900">
      {title}
    </Text>
    <_ChildrenContent>{children}</_ChildrenContent>
  </_ContentWrapper>
);

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

const isColumn = (direction: 'column' | 'row') => direction === 'column';

export const ContentCard = ({
  title,
  direction = 'row',
  role,
  image,
  date,
  url = [],
  content,
  works = [],
  skills = [],
}: ContentCardType) => (
  <_ContentCardWrapper direction={direction}>
    <_ContentCardInner gap={isColumn(direction) ? '28px' : '0'}>
      <_Img src={image} />
      <_TitleWrapper direction={direction} gap="0.5rem">
        <Text size="title1" color="gray900">
          {title}
        </Text>
        <Text
          size={isColumn(direction) ? 'title1' : 'body2'}
          color={isColumn(direction) ? 'gray500' : 'gray900'}
        >
          {date}
        </Text>
        <Text size="body1" color="gray900">
          {role}
        </Text>
      </_TitleWrapper>
    </_ContentCardInner>
    <ColumnGap gap={isColumn(direction) ? '28px' : '0'}>
      <ColumnGap gap="12px">
        {url.map((e) => (
          <Text as="li" size="body4">
            {e}
          </Text>
        ))}
      </ColumnGap>
      <Text size="body1" color="gray900">
        {content}
      </Text>
      <_SkillWrapper>
        {skills.map(() => (
          <Tag color="gray900">
            <React />
            <Text color="gray100">React</Text>
          </Tag>
        ))}
      </_SkillWrapper>
      <ColumnGap gap="12px">
        {works.map((e) => (
          <Text as="li" size="body1">
            {e}
          </Text>
        ))}
      </ColumnGap>
    </ColumnGap>
  </_ContentCardWrapper>
);

interface ProfileCardType {
  image: string;
  name: string;
  intro: string;
  url: string[];
}

const ProfileCard = ({ image, name, intro, url }: ProfileCardType) => {
  return (
    <_ProfileWrapper>
      <_ImgWrapper>
        <_ProfileImg src={image} />
        <Text size="title1" color="gray900">
          {name}
        </Text>
      </_ImgWrapper>
      <Text size="body4" color="gray900" lineHeight="160%">
        {intro}
      </Text>
      <ColumnStartGap gap="12px" margin="17px 0 0">
        {url.map((e) => (
          <Text as="li" size="body4">
            {e}
          </Text>
        ))}
      </ColumnStartGap>
    </_ProfileWrapper>
  );
};

const ResumeDetailPage = () => {
  const { title, role, date, works, image, url, content, skills } =
    developersDummy;
  return (
    <>
      <Header />
      <Columns padding="200px 1rem 50px">
        <_Content direction="row" gap="1.5rem">
          <ProfileCard
            name={detailDummy.name}
            url={detailDummy.url}
            image={detailDummy.image}
            intro={detailDummy.intro}
          />
          <_ContentInner>
            <DetailContent title="업무 경험">
              <ContentCard
                title={title}
                role={role}
                date={date}
                works={works}
              />
            </DetailContent>
            <DetailContent title="프로젝트">
              <ContentCard
                title={title}
                direction="column"
                date={date}
                works={works}
                image={image}
                url={url}
                content={content}
                skills={skills}
              />
              <ContentCard
                title={title}
                direction="column"
                date={date}
                works={works}
                image={image}
                url={url}
                content={content}
                skills={skills}
              />
            </DetailContent>
          </_ContentInner>
        </_Content>
      </Columns>
    </>
  );
};

const _Content = styled(ColumnContent)`
  ${media._1024('flex-direction: column')}
`;

const _ContentInner = styled.div`
  max-width: 643px;
  ${media._1024('max-width: 100%')}
`;

const _ProfileWrapper = styled.div`
  width: 366px;
  height: fit-content;
  padding: 55px 15px;
  position: sticky;
  top: 100px;
  ${media._1024('width: auto;position:static')};
`;

const _ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 29px;
`;

const _ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const _ContentWrapper = styled.div`
  padding: 71px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 71px;
  border-top: 3px solid ${({ theme }) => theme.color.gray400};
`;

const _ChildrenContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 122px;
  padding: 37px 0;
`;

const _ContentCardWrapper = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 28px;
  padding-left: 40px;
  ${media._1024('padding: 0;flex-direction: column')}
`;

const _ContentCardInner = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;

const _Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const _TitleWrapper = styled.div<{ direction: 'row' | 'column'; gap?: string }>`
  width: ${({ direction }) => (isColumn(direction) ? 'auto' : '134px')};
  display: flex;
  align-items: start;
  flex-direction: ${({ direction }) =>
    isColumn(direction) ? 'row' : 'column'};
  gap: ${({ gap }) => gap};
  ${({ direction }) => !isColumn(direction) && media._1024('gap: 20px;')}
`;

const _SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  gap: 7px;
`;

export default ResumeDetailPage;
