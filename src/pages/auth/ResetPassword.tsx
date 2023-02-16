import { Input } from '@/components/common/input';
import { AuthWrapper } from '@/layouts/Wrapper/Auth';

export const ResetPasswordPage = () => {
  return (
    <AuthWrapper>
      <Input placeholder="" label="현재 비밀번호" />
      <Input placeholder="" label="변경시킬 비밀번호" />
      <Input placeholder="" label="변경시킬 비밀번호 재확인 " />
    </AuthWrapper>
  );
};
