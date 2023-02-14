import { Button } from '@/components/common/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Tapbar } from '@/components/write-profile';
import { TextArea } from '@/components/textarea';
import { EditProfileWrapper } from '@/layouts/EditProfileWrapper';
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
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Tapbar />
    </EditProfileWrapper>
  );
};
