import { Arrow, AuthBack } from '@/assets';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormEvent } from 'react';
import { Text } from '@/components/common/text';
import { Button } from '@/components/common/button';
import { DirectionGap } from './DirectionGap';
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
          <Button
            width="fit-content"
            kind="text"
            color="primaryDarken2"
            margin="50px 0 30px 0"
            Icon={<Arrow direction="left" color="#005DE8" />}
          >
            뒤로가기
          </Button>
          <form onSubmit={onSubmitPreventDefault}>{children}</form>
          <_PolicyLink>
            <Link to="/signup">개인정보 처리방침</Link> •
            <Link to="/reset-password"> 회원이용약관</Link>
          </_PolicyLink>
        </_ContentInner>
      </_Content>
      <ImgSlider />
      <_BackgroundImg src={AuthBack} />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
`;

const _PolicyLink = styled.div`
  position: absolute;
  width: 524px;
  text-align: center;
  bottom: 30px;
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
  margin: 0 auto;
  overflow: hidden;
`;

const _BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  object-fit: cover;
`;