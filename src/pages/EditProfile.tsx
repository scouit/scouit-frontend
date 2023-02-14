import { Button } from '@/components/common/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Tapbar } from '@/components/write-profile';
import { TextArea } from '@/components/textarea';
import { EditProfileWrapper } from '@/layouts/Wrapper/EditProfile';
import { ProfileWriteForm } from '@/components/profileWriteForm';
import { Input } from '@/components/common/input';
import { ColumnGap } from '@/layouts/DirectionGap';
import { Routes, Route } from 'react-router-dom';
import { Introduce } from '@/components/write-profile/route/Introduce';
import { Experience } from '@/components/write-profile/route/Experience';
import { ChangeEvent, useState } from 'react';
import { useForm } from '@/hooks/useForm';
import { getUserProfile, ProfileType } from '@/apis/profile/getProfile';
import { useQuery } from 'react-query';
import { useBasic, useProfile } from '@/hooks/useProfile';

const work = 'workExperience';
const project = 'project';

export const EditProfilePage = () => {
  const { profile, projectUpdate, workUpdate, arrayChange, addContent } =
    useProfile();
  const { text, handleOnChange, basicUpdate } = useBasic();

  return (
    <EditProfileWrapper>
      <Routes>
        <Route
          path="/basic"
          element={
            <Introduce
              text={text}
              handleOnChange={handleOnChange}
              basicUpdate={() => basicUpdate.mutate()}
            />
          }
        />
        <Route
          path="/experience"
          element={
            <Experience
              name={work}
              role="회사 이름"
              placeholder="회사에서 활동한 "
              profile={profile[work]}
              addContent={addContent}
              arrayChange={arrayChange}
              projectUpdate={() => projectUpdate}
            />
          }
        />
        <Route
          path="/project"
          element={
            <Experience
              name={project}
              role="프로젝트 이름"
              placeholder="프로젝트의 "
              profile={profile[project]}
              addContent={addContent}
              arrayChange={arrayChange}
              workUpdate={() => workUpdate}
            />
          }
        />
      </Routes>
      <Tapbar />
    </EditProfileWrapper>
  );
};
