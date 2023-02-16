import { JobPostingCard } from '@/components/card/JobPosting';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Text } from '@/components/common/text';
import { Columns } from '@/layouts/Columns';
import styled from 'styled-components';
import { useCompany } from '@/hooks/useCompany';

export const JobPostingPage = () => {
  const { useGetCompanyList } = useCompany();
  const { data } = useGetCompanyList();
  return (
    <div>
      <Header />
      <_Columns>
        <Text size="title1">채용 공고</Text>
        <_JobPostingWrapper>
          {data && data.map((data) => <JobPostingCard data={data} />)}
        </_JobPostingWrapper>
      </_Columns>
      <Footer />
    </div>
  );
};

const _Columns = styled(Columns)`
  padding: 0 94px;
`;

const _JobPostingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
