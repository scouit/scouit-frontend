import { Arrow, AuthBack } from '@/assets';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormEvent } from 'react';
import { Text } from '@/components/common/text';

interface PropsType {
  children: ReactNode;
  onSubmit?: () => void;
}

export const AuthWrapper = ({ children, onSubmit }: PropsType) => {
  const onSubmitPreventDefault = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <_Wrapper>
      <_AuthWhiteBox>
        <div>
          <_GoHome to="/">
            <Arrow direction="left" color="#005DE8" />
            뒤로가기
          </_GoHome>

          <Text size="heading1">Sign in</Text>

          <form onSubmit={onSubmitPreventDefault}>{children}</form>

          <_SetFixPolicyLink>
            <Link to="/signup">개인정보 처리방침</Link> •
            <Link to="/reset-password"> 회원이용약관</Link>
          </_SetFixPolicyLink>
        </div>
      </_AuthWhiteBox>
    </_Wrapper>
  );
};

const _GoHome = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.primaryDarken2};
  margin: 50px 0;
`;

const _Wrapper = styled.div`
  height: 100vh;
`;

const _SetFixPolicyLink = styled.div`
  position: absolute;
  width: 524px;
  text-align:center;
  bottom: 10%;
`;

const _AuthWhiteBox = styled.div`
  float: left;
  width: 718px;
  height: 100%;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: ${({ theme }) => theme.shadow.modal};
  > div {
    width: 524px;
    margin: 0 auto;
  }
`;
