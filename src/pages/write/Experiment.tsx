import { Tapbar } from '@/components/write-profile';
import { Company } from '@/components/write-profile/route/Company';
import { useProfile, useProfileUpdate } from '@/hooks/useProfile';
import { EditProfileWrapper } from '@/layouts/Wrapper/EditProfile';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

const work = 'workExperience';

export const ExperiencePage = () => {
  const { workUpdate } = useProfileUpdate();
  useEffect(() => {
    return () => workUpdate.mutate();
  }, []);
  return (
    <>
      <Company
        title="업무 경험"
        name={work}
        role="회사 이름"
        placeholder="회사에서 활동한 "
      />
      <Tapbar />
    </>
  );
};
