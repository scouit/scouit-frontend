import { Arrow, AuthBack } from '@/assets';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FormEvent } from 'react';
import { Text } from '@/components/common/text';
import { Button } from '@/components/common/button';
import { ImgSlider } from '@/components/slider/ImgSlider';
import { UnderLineLink } from '@/components/Link';

interface PropsType {
  children: ReactNode;
  onSubmit?: () => void;
}

export const AuthWrapper = ({ children, onSubmit }: PropsType) => {
  const navigate = useNavigate();
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
            size="heading3"
            color="primaryDarken2"
            Icon={<Arrow direction="left" color="primaryDarken2" />}
            margin="0 0 50px 0"
            onClick={() => navigate(-1)}
          >
            뒤로가기
          </Button>
          <form onSubmit={onSubmitPreventDefault}>
            <_AuthContent>{children}</_AuthContent>
            <Text color="gray10" align="center" margin="30px 0 0 0">
              <UnderLineLink to="">개인정보 처리방침</UnderLineLink> •{' '}
              <UnderLineLink to="">회원이용약관</UnderLineLink>
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
  justify-content: center;
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
  @media screen and (max-width: 1050px) {
    box-shadow: none;
  }
`;

const _ContentInner = styled.div`
  width: 524px;
  height: 100%;
  margin: 0 auto;
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
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
