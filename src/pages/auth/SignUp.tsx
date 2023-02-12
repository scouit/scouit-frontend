import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { PasswordInput } from '@/components/common/input/PasswordInput';
import { AuthWrapper } from '@/layouts/AuthWrapper';
import { useSignUp } from '@/hooks/useAuth';
import { useForm } from '@/hooks/useForm';
import { Text } from '@/components/common/text';
import { Link } from 'react-router-dom';
import { ColumnCenterGap } from '@/layouts/DirectionGap';
import { customToast } from '@/utils/toast';

/** 프로필, 이메일 인증 추가 요망 */
export const SignUpPage = () => {
  const { text, handleOnChange } = useForm({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
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
        else customToast('입력한 값을 다시 확인해 주세요', 'error');
      }}
    >
      <Text size="heading1">Sign up</Text>
      <ColumnCenterGap gap="15px" margin="45px 0 40px 0">
        <Input
          value={text.name}
          name="name"
          label="이름"
          onChange={handleOnChange}
          placeholder="이름을 입력해주세요."
          error={errorType.name}
          errorMes="이름을 2자 이상 10자 이하로 설정해 주세요"
        />
        <Input
          value={text.email}
          name="email"
          label="이메일"
          onChange={handleOnChange}
          placeholder="이메일을 입력해주세요."
        />
        <PasswordInput
          value={text.password}
          name="password"
          label="비밀번호"
          onChange={handleOnChange}
          placeholder="비밀번호를 입력해주세요."
          error={errorType.password}
          errorMes="비밀번호가 너무 짧거나 대문자와 특수 문자를 넣어주세요"
        />
        <PasswordInput
          value={text.passwordCheck}
          name="passwordCheck"
          label="비밀번호 확인"
          onChange={handleOnChange}
          placeholder="비밀번호를 한 번 더 입력해주세요."
          error={errorType.passwordCheck}
          errorMes="비밀번호가 틀립니다."
        />
      </ColumnCenterGap>
      <Button>회원가입</Button>
      <Text margin="20px 0 0 0" align="center" size="body1" underLine={true}>
        <Link to="/signin">로그인</Link> |{' '}
        <Link to="/reset-password">비밀번호 찾기</Link>
      </Text>
    </AuthWrapper>
  );
};
