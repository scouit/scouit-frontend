import { Button } from '@/components/common/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { WriteProfile } from '@/components/navigation/write-profile';
import { Columns12 } from '@/layouts/columns/12';
import styled from 'styled-components';

export const EditProfilePage = () => {
  return (
    <>
      <Header />
      <div>
        <Columns12>
          <div>qwd</div>
          <WriteProfile />
        </Columns12>
      </div>
      <div>
        <Button kind="round">프로필 저장</Button>
      </div>
    </>
  );
};
