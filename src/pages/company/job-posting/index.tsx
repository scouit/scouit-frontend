import { JobPostingCard } from '@/components/card/JobPosting';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Text } from '@/components/text';
import { Columns12 } from '@/layouts/columns/12';
import styled from 'styled-components';

export const JobPostingPage = () => {
  return (
    <div>
      <Header />
      <_Columns12>
        <Text size="title1">채용 공고</Text>
        <_JobPostingWrapper>
          <JobPostingCard />
          <JobPostingCard />
          <JobPostingCard />
        </_JobPostingWrapper>
      </_Columns12>
      <Footer />
    </div>
  );
};

const _Columns12 = styled(Columns12)`
  padding: 0 94px;
`;

const _JobPostingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
