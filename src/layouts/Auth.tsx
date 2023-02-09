import { Arrow } from '@/assets';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormEvent } from 'react';

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
      <_GoHome to="/">
        <Arrow direction="left" />
        홈으로 이동
      </_GoHome>
      <_Box onSubmit={onSubmitPreventDefault}>
        <div>{children}</div>
      </_Box>
    </_Wrapper>
  );
};

const _GoHome = styled(Link)`
  position: absolute;
  top: 79px;
  left: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const _Box = styled.form`
  width: 621px;
  height: 800px;
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadow.modal};
  > div {
    width: 524px;
    margin: 0 auto;
  }
`;
