import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Text } from '@/components/common/text';
import { useGetCompanyList } from '@/hooks/Query';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { Back, JobBack } from '@/assets';
import { PageTitle } from '@/components/PageTitle';
import { Selector } from '@/components/common/selector';
import { ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { companyListDummy } from '@/_dummy/company';

const JobPostingPage = () => {
  const { data } = useGetCompanyList();
  return (
    <>
      <Header />
      <ColumnGap gap="40px">
        <PageTitle src={JobBack} title="채용 공고" isWhite />
        <Columns padding="0 94px">
          <_SelectWrapper>
            <Selector
              value="전체"
              list={['전체', '마케팅', '개발', '영업', '운영']}
              onClick={() => {}}
            />
          </_SelectWrapper>
          <_ListWrapper
            width="1196px"
            direction="row"
            justify="center"
            gap="20px"
            wrap
          >
            {data &&
              data.map(({ _id }) => (
                <Link to={`/company/job-posting/${_id}`}>
                  <_ItemWrapper />
                </Link>
              ))}
            {companyListDummy.map(
              ({ name, url, logo, date, job, content, condition }) => (
                <Link to="iasgagasg">
                  <_ItemWrapper>
                    <_Img src={url} />
                    <ColumnGap gap="10px" padding="10px 30px">
                      <RowGap gap="15px">
                        <_Logo src={logo} />
                        <div>
                          <Text size="title2">{name}</Text>
                          <Text size="body4">{date}</Text>
                        </div>
                      </RowGap>
                      <_ItemContent size="body4">
                        <ColumnGap gap="10px">
                          <div>{job}</div>
                          <div>{content}</div>
                        </ColumnGap>
                      </_ItemContent>
                      <Text size="body4">{condition}</Text>
                    </ColumnGap>
                  </_ItemWrapper>
                </Link>
              ),
            )}
          </_ListWrapper>
        </Columns>
        <Footer />
      </ColumnGap>
    </>
  );
};

const _ListWrapper = styled(ColumnContent)`
  &:nth-child(2n-1) {
    padding: 0 40px;
    background-color: red;
  }
`;

const _ItemWrapper = styled.article`
  width: 284px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;

const _Img = styled.img`
  height: 100px;
  width: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

const _Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
`;

const _ItemContent = styled(Text)``;

const _SelectWrapper = styled(ColumnContent)`
  margin-bottom: 30px;
`;

export default JobPostingPage;
