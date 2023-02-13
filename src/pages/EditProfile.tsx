import { Button } from '@/components/common/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { WriteProfile } from '@/components/write-profile';
import { TextArea } from '@/components/textarea';
import { EditProfileWrapper } from '@/layouts/EditProfileWrapper';
import { ProfileWriteForm } from '@/components/profileWriteForm';
import { Input } from '@/components/common/input';

export const EditProfilePage = () => {
  return (
    <>
      <Header />
      <EditProfileWrapper>
        <ProfileWriteForm title="업무 경험">
          <Input
            margin="32px 0 52px 0"
            placeholder="회사이름을 입력해주세요"
            label="회사 이름"
          />
          <TextArea label="자기소개" placeholder="자기소개를 입력해주세요" />
          <TextArea label="한 줄 소개" placeholder="한 줄소개를 입력해주세요" />
        </ProfileWriteForm>
        <WriteProfile />
      </EditProfileWrapper>
      <div>
        <Button kind="round">프로필 저장</Button>
      </div>
    </>
  );
};
