import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { AuthWrapper } from '@/layouts/Auth';
import { useSignUp } from '@/hooks/useAuth';
import { useForm } from '@/hooks/useForm';
import { Text } from '@/components/common/text';
import { Link } from 'react-router-dom';

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
      <Text size="heading1">Sign up</Text>
      <Input
        value={text.name}
        margin="30px 0 20px 0"
        name="name"
        label="이름"
        placeholder="이름을 입력해주세요."
      />
      <Input
        value={text.email}
        margin="15px 0 20px 0"
        name="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
      />
      <Input
        value={text.password}
        margin="15px 0 20px 0"
        name="password"
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
      />
      <Input
        value={text.passwordCheck}
        margin="15px 0 30px 0"
        name="passwordCheck"
        type="password"
        label="비밀번호 확인"
        placeholder="비밀번호를 한 번 더 입력해주세요."
      />
      <Button>회원가입</Button>
      <Text margin="20px 0 0 0" align="center" size="body1">
        <Link to="/signin">로그인</Link> |
        <Link to="/reset-password"> 비밀번호 찾기</Link>
      </Text>
    </AuthWrapper>
  );
};
