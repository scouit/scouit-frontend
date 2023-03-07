import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Text } from '@/components/common/text';
import { useGetCompanyList } from '@/hooks/Query';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { Company } from '@/assets';

const JobPostingPage = () => {
  const { data } = useGetCompanyList();
  return (
    <>
      <Header />
      <Columns padding="0 94px">
        <Text size="title1">채용 공고</Text>
        <ColumnContent direction="row" justify="space-between" wrap>
          {data &&
            data.map(({ workingPosition, _id }) => (
              <Link to={`/company/job-posting/${_id}`}>
                <_JobWrapper>
                  <img src={Company} alt="채용공고 이미지" />
                  <Text size="title1">{workingPosition}</Text>
                  <Text size="body1" color="gray500">
                    비바리퍼블리카 (토스)
                  </Text>
                  <Text size="body1" color="gray500">
                    상시채용
                  </Text>
                </_JobWrapper>
              </Link>
            ))}
        </ColumnContent>
      </Columns>
      <Footer />
    </>
  );
};

const _JobWrapper = styled.article`
  width: 452px;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.color.gray400};
`;

export default JobPostingPage;
