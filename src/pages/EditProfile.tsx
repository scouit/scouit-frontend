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
import { Project } from '@/components/write-profile/route/Project';

export const EditProfilePage = () => {
  return (
    <EditProfileWrapper>
      <Routes>
        <Route path="/basic" element={<Introduce />} />
        <Route
          path="/experience"
          element={
            <Experience name="회사 이름" placeholder="회사에서 활동한 " />
          }
        />
        <Route
          path="/project"
          element={
            <Experience name="프로젝트 이름" placeholder="프로젝트의 " />
          }
        />
      </Routes>
      <Tapbar />
    </EditProfileWrapper>
  );
};
