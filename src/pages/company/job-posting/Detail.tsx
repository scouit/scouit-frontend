import { useParams } from 'react-router-dom';
import { Text } from '@/components/common/text';
import { DetailCompany } from '@/components/detailCompany';
import { useGetCompanyByIdList } from '@/hooks/Query';
import { JobPostingWrapper } from '@/layouts/wrapper/JobPosting';

export const JobPostingDetailPage = () => {
  const { id } = useParams();
  const { data } = useGetCompanyByIdList(id);
  return (
    <JobPostingWrapper>
      {data && (
        <div>
          <Text size="heading1">FrontEnd Developer</Text>
          <div>{data.career}</div>
          <div />
        </div>
      )}
      <DetailCompany />
    </JobPostingWrapper>
  );
};
