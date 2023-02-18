import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { Text } from '@/components/common/text';
import { AuthWrapper } from '@/layouts/Wrapper/Auth';
import { useSignIn } from '@/hooks/useAuth';
import { useForm } from '@/hooks/useForm';
import { Link, useNavigate } from 'react-router-dom';
import { ColumnCenterGap } from '@/layouts/DirectionGap';
import { CheckBox } from '@/components/common/checkBox';
import { Arrow } from '@/assets';

export const SignInPage = () => {
  const navigate = useNavigate();
  const { text, handleOnChange } = useForm({
    email: '',
    password: '',
  });

  const signInMutate = useSignIn(text);

  return (
    <AuthWrapper onSubmit={() => signInMutate.mutate()}>
      <Button
        clickType="button"
        kind="text"
        Icon={<Arrow direction="left" color="primaryDarken2" />}
        margin="0 0 7.3125rem 0"
        onClick={() => navigate(-1)}
      >
        뒤로가기
      </Button>
      <Text size="heading1">로그인</Text>
      <ColumnCenterGap gap="1.875rem" margin="4.0625rem 0 1.75rem">
        <Input
          type="text"
          name="email"
          value={text.email}
          onChange={handleOnChange}
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
      </ColumnCenterGap>
      <CheckBox gap="0.4375rem" margin="0 0 3.125rem">
        아이디 저장
      </CheckBox>
      <Button size="large">로그인</Button>
      <Link to="/sign-up">
        <Button
          kind="text"
          size="large"
          color="primary"
          margin="0.625rem 0 0 0"
        >
          회원가입
        </Button>
      </Link>
    </AuthWrapper>
  );
};
