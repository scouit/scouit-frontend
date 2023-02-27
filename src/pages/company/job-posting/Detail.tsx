import { useParams } from 'react-router-dom';
import { Text } from '@/components/common/text';
import { DetailCompany } from '@/components/detailCompany';
import { useGetCompanyByIdList } from '@/hooks/Query';
import { _Columns, _ColumnContent } from '@/layouts/Columns';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const JobPostingDetailPage = () => {
  const { id } = useParams();
  const { data } = useGetCompanyByIdList(id);
  return (
    <>
      <Header />
      <_Columns>
        <_ColumnContent justify="space-between">
          {data && (
            <div>
              <Text size="heading1">FrontEnd Developer</Text>
              <div>{data.career}</div>
            </div>
          )}
          <DetailCompany />
        </_ColumnContent>
      </_Columns>
      <Footer />
    </>
  );
};
