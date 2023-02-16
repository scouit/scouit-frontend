import { Text } from '@/components/common/text';
import { DetailCompany } from '@/components/detailCompany';
import { useCompany } from '@/hooks/useCompany';
import { JobPostingWrapper } from '@/layouts/Wrapper/JobPosting';
import { useParams } from 'react-router-dom';

export const JobPostingDetailPage = () => {
  const { id } = useParams();
  const { useGetCompanyByIdList } = useCompany();
  const { data } = useGetCompanyByIdList(id);
  return (
    <JobPostingWrapper>
      {data && (
        <div>
          <Text size="heading1">FrontEnd Developer</Text>
          <div>{data.career}</div>
          <div></div>
        </div>
      )}
      <DetailCompany />
    </JobPostingWrapper>
  );
};
