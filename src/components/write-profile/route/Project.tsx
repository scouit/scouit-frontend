import { ProfileWriteForm } from '@/components/profileWriteForm';
import { TextArea } from '@/components/textarea';
import { ColumnGap } from '@/layouts/DirectionGap';

export const Project = () => {
  return (
    <ProfileWriteForm title="업무 경험">
      <ColumnGap gap="20px" margin="47px 0 0">
        <TextArea label="자기소개" placeholder="자기소개를 입력해주세요" />
        <TextArea label="한 줄 소개" placeholder="한 줄소개를 입력해주세요" />
      </ColumnGap>
    </ProfileWriteForm>
  );
};
