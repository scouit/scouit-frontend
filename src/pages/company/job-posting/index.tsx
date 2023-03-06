import { JobPostingCard } from '@/components/card/JobPosting';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Text } from '@/components/common/text';
import { useGetCompanyList } from '@/hooks/Query';
import { Columns, ColumnContent } from '@/layouts/Columns';

const JobPostingPage = () => {
  const { data } = useGetCompanyList();
  return (
    <>
      <Header />
      <Columns padding="0 94px">
        <Text size="title1">채용 공고</Text>
        <ColumnContent direction="row" justify="space-between" wrap>
          {data &&
            data.map((componyData) => <JobPostingCard data={componyData} />)}
        </ColumnContent>
      </Columns>
      <Footer />
    </>
  );
};

export default JobPostingPage;
