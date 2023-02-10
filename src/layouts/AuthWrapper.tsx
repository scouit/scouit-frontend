import { Arrow, AuthBack } from '@/assets';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormEvent } from 'react';
import { Text } from '@/components/common/text';
import { Button } from '@/components/common/button';
import { ImgSlider } from '@/components/slider/ImgSlider';

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
      <_Content>
        <_ContentInner>
          <_ButtonAbsolute>
            <Button
              width="fit-content"
              kind="text"
              color="primaryDarken2"
              Icon={<Arrow direction="left" color="#005DE8" />}
            >
              뒤로가기
            </Button>
          </_ButtonAbsolute>

          <form onSubmit={onSubmitPreventDefault}>
            <_AuthContent>{children}</_AuthContent>
            <Text align="center" underLine={true}>
              <Link to="/signup">개인정보 처리방침</Link> •&nbsp;
              <Link to="/reset-password">회원이용약관</Link>
            </Text>
          </form>
        </_ContentInner>
      </_Content>
      <_BackgroundImg src={AuthBack} />
      <ImgSlider />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
`;

const _ButtonAbsolute = styled.div`
  position: absolute;
  top: 50px;
`;

const _AuthContent = styled.div`
  height: 550px;
`;

const _Content = styled.div`
  width: 718px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: ${({ theme }) => theme.shadow.modal};
  position: relative;
  z-index: 1;
`;

const _ContentInner = styled.div`
  width: 524px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  object-fit: cover;
`;
