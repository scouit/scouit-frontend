import styled from 'styled-components';
import { JobPostingCard } from '@/components/card/JobPosting';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Text } from '@/components/common/text';
import { useGetCompanyList } from '@/hooks/Query';
import { _Columns, _ColumnContent } from '@/layouts/Columns';

export const JobPostingPage = () => {
  const { data } = useGetCompanyList();
  return (
    <div>
      <Header />
      <_Columns padding="0 94px">
        <Text size="title1">채용 공고</Text>
        <_ColumnContent direction="row" justify="space-between" wrap>
          {data &&
            data.map((componyData) => <JobPostingCard data={componyData} />)}
        </_ColumnContent>
      </_Columns>
      <Footer />
    </div>
  );
};