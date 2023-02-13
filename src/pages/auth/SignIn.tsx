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
    email: 'lokijoji2@gmail.com',
    password: 'iggso821',
  });

  const signInMutate = useSignIn(text);

  return (
    <AuthWrapper onSubmit={() => signInMutate.mutate()}>
      <Text size="heading1">Sign in</Text>
      <Input
        type="text"
        value={text.email}
        margin="43px 0 52px 0"
        placeholder="example@email.coom"
        label="아이디를 입력해주세요"
      />
      <Input
        type="password"
        value={text.password}
        placeholder="iggso821.21"
        label="비밀번호를 입력해주세요"
      />
      <Button margin="72px 0 0 0">로그인</Button>
      <Text margin="20px 0 0 0" align="center" size="body1">
        <UnderLineLink to="/sign-up">회원가입</UnderLineLink> |{' '}
        <UnderLineLink to="/reset-password">비밀번호 초기화</UnderLineLink>
      </Text>
    </AuthWrapper>
  );
};
