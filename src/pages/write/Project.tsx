import { Tapbar } from '@/components/write-profile';
import { Company } from '@/components/write-profile/route/Company';
import { useProfile, useProfileUpdate } from '@/hooks/useProfile';
import { EditProfileWrapper } from '@/layouts/Wrapper/EditProfile';
import { useEffect } from 'react';

const project = 'project';

export const ProjectPage = () => {
  const { projectUpdate } = useProfileUpdate();
  useEffect(() => {
    return () => projectUpdate.mutate();
  }, []);
  return (
    <>
      <Company
        title="프로젝트"
        name={project}
        role="프로젝트 이름"
        placeholder="프로젝트의 "
      />
      <Tapbar />
    </>
  );
};
