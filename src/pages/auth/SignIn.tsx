import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Text } from '@/components/common/text';
import { AuthWrapper } from '@/layouts/AuthWrapper';
import { useSignIn } from '@/hooks/useAuth';
import { useForm } from '@/hooks/useForm';
import { Link } from 'react-router-dom';
import { UnderLineLink } from '@/components/Link';

export const SignInPage = () => {
  const { text, handleOnChange } = useForm({
    email: '',
    password: '',
  });

  const signInMutate = useSignIn(text);

  return (
    <AuthWrapper onSubmit={() => signInMutate.mutate()}>
      <Text size="heading1">Sign in</Text>
      <Input
        type="text"
        name="email"
        value={text.email}
        onChange={handleOnChange}
        margin="113px 0 11px 0"
        placeholder="example@email.coom"
        label="아이디"
      />
      <Input
        type="password"
        name="password"
        value={text.password}
        onChange={handleOnChange}
        placeholder="•••••••••••"
        label="비밀번호"
      />
      <Button margin="59px 0 0 0">로그인</Button>
      <Text margin="40px 0 0 0" align="center" size="body1">
        <UnderLineLink to="/sign-up">회원가입</UnderLineLink> |{' '}
        <UnderLineLink to="/reset-password">비밀번호 초기화</UnderLineLink>
      </Text>
    </AuthWrapper>
  );
};
