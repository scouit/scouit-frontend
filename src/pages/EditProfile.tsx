import { Button } from '@/components/common/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { WriteProfile } from '@/components/navigation/write-profile';
import { Columns } from '@/layouts/Columns';
import styled from 'styled-components';

export const EditProfilePage = () => {
  return (
    <>
      <Header />
      <div>
        <Columns>
          <div>qwd</div>
          <WriteProfile />
        </Columns>
      </div>
      <div>
        <Button kind="round">프로필 저장</Button>
      </div>
    </>
  );
};
