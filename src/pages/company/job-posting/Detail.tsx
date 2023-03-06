import { useParams } from 'react-router-dom';
import { Text } from '@/components/common/text';
import { DetailCompany } from '@/components/detailCompany';
import { useGetCompanyByIdList } from '@/hooks/Query';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const JobPostingDetailPage = () => {
  const { id } = useParams();
  const { data } = useGetCompanyByIdList(id);
  return (
    <>
      <Header />
      <Columns>
        <ColumnContent justify="space-between">
          {data && (
            <div>
              <Text size="heading1">FrontEnd Developer</Text>
              <div>{data.career}</div>
            </div>
          )}
          <DetailCompany />
        </ColumnContent>
      </Columns>
      <Footer />
    </>
  );
};

export default JobPostingDetailPage;
