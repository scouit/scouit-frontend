import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { AuthWrapper } from '@/layouts/Wrapper/Auth';
import { useSignUp } from '@/hooks/useAuth';
import { useForm } from '@/hooks/useForm';
import { Text } from '@/components/common/text';
import { Link } from 'react-router-dom';
import { ColumnCenterGap } from '@/layouts/DirectionGap';
import { customToast } from '@/utils/toast';
import { useState } from 'react';

interface ErrorType {
  name: boolean | null;
  password: boolean | null;
  passwordCheck: boolean | null;
}

/** 프로필, 이메일 인증 추가 요망 */
export const SignUpPage = () => {
  const { text, handleOnChange } = useForm({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
  });
  const [isError, setError] = useState<ErrorType>({
    name: null,
    password: null,
    passwordCheck: null,
  });

  const errorType = {
    name: text.name.length < 1 || text.name.length > 11,
    password:
      text.password.length < 8 ||
      !/[~!@#$%^&*{}()|[\]\\]/g.test(text.password) ||
      !/[A-Z]/g.test(text.password),
    passwordCheck: text.passwordCheck !== text.password,
  };

  const signUpMutate = useSignUp(text);

  return (
    <AuthWrapper
      onSubmit={() => {
        const { name, password, passwordCheck } = errorType;
        if (!name && !password && !passwordCheck) signUpMutate.mutate();
        else {
          setError({
            name,
            password,
            passwordCheck,
          });
          customToast('입력한 값을 다시 확인해 주세요', 'error');
        }
      }}
    >
      <Text size="heading1">Sign up</Text>
      <ColumnCenterGap gap="4px" margin="45px 0 40px 0">
        <Input
          type="text"
          name="email"
          placeholder="example@email.com"
          label="아이디"
          value={text.email}
          onChange={handleOnChange}
        />
        <Input
          type="text"
          name="name"
          placeholder="홍길동"
          label="이름"
          value={text.name}
          onChange={handleOnChange}
          isError={isError.name}
          errorMsg="이름을 2자 이상 10자 이하로 설정해 주세요"
        />
        <Input
          type="password"
          name="password"
          placeholder="•••••••••••"
          label="비밀번호"
          value={text.password}
          onChange={handleOnChange}
          isError={isError.password}
          errorMsg="비밀번호가 너무 짧거나 대문자와 특수 문자를 넣어주세요"
        />
        <Input
          type="password"
          name="passwordCheck"
          placeholder="•••••••••••"
          label="비밀번호 확인"
          value={text.passwordCheck}
          onChange={handleOnChange}
          isError={isError.passwordCheck}
          errorMsg="비밀번호가 틀립니다."
        />
      </ColumnCenterGap>
      <Button>회원가입</Button>
      <Link to="/sign-in">
        <Button kind="text" color="gray" margin="10px 0 0 0">
          로그인
        </Button>
      </Link>
    </AuthWrapper>
  );
};
