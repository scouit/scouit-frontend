import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { AuthWrapper } from '@/layouts/Auth';
import { useSignUp } from '@/hooks/useAuth';
import { useForm } from '@/hooks/useForm';

/** 프로필, 이메일 인증 추가 요망 */
export const SignUpPage = () => {
  const { text, handleOnChange } = useForm({
    name: '조상현',
    email: 'lokijoji2@gmail.com',
    password: 'iggso821',
    passwordCheck: 'iggso821',
  });

  const signUpMutate = useSignUp(text);

  return (
    <AuthWrapper onSubmit={() => signUpMutate.mutate()}>
      <Input
        value={text.name}
        name="name"
        label="이름"
        placeholder="이름을 입력해주세요."
      />
      <Input
        value={text.email}
        name="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
      />
      <Input
        value={text.password}
        name="password"
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
      />
      <Input
        value={text.passwordCheck}
        name="passwordCheck"
        type="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 한 번 더 입력해주세요."
      />
      <Button>회원가입</Button>
    </AuthWrapper>
  );
};
