import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Input, Button } from '@scouit/design-system';
import { AuthWrapper } from '@/layouts/wrapper/Auth';
import { useSignUpQuery } from '@/hooks/Query';
import { useForm } from '@/hooks/useForm';
import { Text } from '@/components/common/text';
import { ColumnCenterGap } from '@/layouts/DirectionGap';
import { customToast } from '@/utils/toast';

interface ErrorType {
  name: boolean | null;
  password: boolean | null;
  passwordCheck: boolean | null;
}

/** 프로필, 이메일 인증 추가 요망 */
const SignUpPage = () => {
  const { text, modernHandleChange } = useForm({
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

  const signUpMutate = useSignUpQuery(text);

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
      <Text size="heading1">회원가입</Text>
      <ColumnCenterGap gap="1.875rem" margin="3.125rem 0 3.4375rem 0">
        <Input
          type="text"
          name="email"
          placeholder="example@email.com"
          label="아이디"
          value={text.email}
          onChange={modernHandleChange as any}
        />
        <Input
          type="text"
          name="name"
          placeholder="홍길동"
          label="이름"
          value={text.name}
          onChange={modernHandleChange as any}
          isError={isError.name}
          hint="이름을 2자 이상 10자 이하로 설정해 주세요"
        />
        <Input
          name="password"
          placeholder="•••••••••••"
          label="비밀번호"
          value={text.password}
          onChange={modernHandleChange as any}
          isError={isError.password}
          rightIconType="eye"
          hint="대문자와 특수 문자를 넣어주세요"
        />
        <Input
          name="passwordCheck"
          placeholder="•••••••••••"
          label="비밀번호 확인"
          value={text.passwordCheck}
          onChange={modernHandleChange as any}
          rightIconType="eye"
          isError={isError.passwordCheck}
          hint="비밀번호가 다시 입력해 주세요."
        />
      </ColumnCenterGap>
      <Button height="45" kind="fill" width="100%" radius="small">
        회원가입
      </Button>
      <Link to="/auth/sign-in">
        <Button height="45" width="100%" radius="small">
          로그인
        </Button>
      </Link>
    </AuthWrapper>
  );
};

export default SignUpPage;
