import styled from 'styled-components';
import { ContentCard } from '@/components/card/detail/Content';
import { ColumnContent, Columns } from '@/layouts/Columns';
import { DetailContent } from '@/layouts/detail/Content';
import { developersDummy } from '@/_dummy/developers';
import { media } from '@/styles/media';
import { Header } from '@/components/header';
import { detailDummy } from '@/_dummy/profile';
import { Text } from '@/components/common/text';
import { ColumnStartGap } from '@/layouts/DirectionGap';

const ResumeDetailPage = () => {
  const { title, role, date, works, image, url, content, skills } =
    developersDummy;
  return (
    <>
      <Header />
      <Columns padding="200px 1rem 50px">
        <_Content direction="row" gap="1.5rem">
          <_ProfileWrapper>
            <_ImgWrapper>
              <_Img src={detailDummy.image} />
              <Text size="title1" color="gray900">
                {detailDummy.name}
              </Text>
            </_ImgWrapper>
            <Text size="body4" color="gray900" lineHeight="160%">
              {detailDummy.intro}
            </Text>
            <ColumnStartGap gap="12px" margin="17px 0 0">
              {detailDummy.url.map((e) => (
                <Text as="li" size="body4">
                  {e}
                </Text>
              ))}
            </ColumnStartGap>
          </_ProfileWrapper>
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

const _Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export default ResumeDetailPage;
