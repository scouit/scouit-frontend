import { LogoWithText } from '@/assets';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Text } from '@/components/common/text';
import { AuthWrapper } from '@/layouts/Auth';
import { useSignIn } from '@/hooks/useAuth';
import { useForm } from '@/hooks/useForm';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignInPage = () => {
  const { text, handleOnChange } = useForm({
    email: 'lokijoji2@gmail.com',
    password: 'iggso821',
  });

  const signInMutate = useSignIn(text);

  return (
    <AuthWrapper onSubmit={() => signInMutate.mutate()}>
      <_LogoWithText />
      <Text size="heading1">로그인</Text>
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
        <Link to="/signup">회원가입</Link> |{' '}
        <Link to="/reset-password">비밀번호 초기화</Link>
      </Text>
    </AuthWrapper>
  );
};

const _LogoWithText = styled(LogoWithText)`
  margin: 85px 0 66px 0;
`;
