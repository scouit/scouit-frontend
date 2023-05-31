import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@scouit/design-system';
import { Input } from '@scouit/design-system';
import { Text } from '@/components/common/text';
import { AuthWrapper } from '@/layouts/wrapper/Auth';
import { useSignInQuery } from '@/hooks/Query';
import { useForm } from '@/hooks/useForm';
import { ColumnCenterGap, ColumnStartGap } from '@/layouts/DirectionGap';
import { useInversion } from '@/hooks/useInversion';
import { CheckBoxUnSelected, CheckBoxClicked } from '@/assets';

const SignInPage = () => {
  const { text, modernHandleChange } = useForm({
    email: '',
    password: '',
  });
  const { state: check, invertState } = useInversion();

  const signInMutate = useSignInQuery(text);

  return (
    <AuthWrapper onSubmit={() => signInMutate.mutate()}>
      <Text size="heading1">로그인</Text>
      <ColumnStartGap gap="1.875rem" margin="4.0625rem 0 1.75rem">
        <Input
          width="100%"
          type="text"
          name="email"
          value={text.email}
          onChange={modernHandleChange as any}
          placeholder="example@email.com"
          label="아이디"
        />
        <Input
          rightIconType="eye"
          name="password"
          value={text.password}
          onChange={modernHandleChange as any}
          placeholder="•••••••••••"
          label="비밀번호"
        />
      </ColumnStartGap>
      <_CheckBoxWrapper onClick={invertState}>
        {check ? <CheckBoxClicked /> : <CheckBoxUnSelected />}
        <Text size="body1" color="gray900">
          아이디 저장
        </Text>
      </_CheckBoxWrapper>
      <Button height="45" kind="fill" width="100%" radius="small">
        로그인
      </Button>
      <Link to="/auth/sign-up">
        <Button height="45" width="100%" radius="small">
          회원가입
        </Button>
      </Link>
    </AuthWrapper>
  );
};

const _CheckBoxWrapper = styled.div`
  cursor: pointer;
  width: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4375rem;
  margin: 0 0 3.125rem;
`;

export default SignInPage;
