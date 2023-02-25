import { ReactNode, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Arrow, AuthBack } from '@/assets';
import { Text } from '@/components/common/text';
import { Button } from '@/components/common/button';
import { ImgSlider } from '@/components/slider/ImgSlider';
import { UnderLineLink } from '@/components/Link';
import { media } from '@/styles/media';

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
        <form onSubmit={onSubmitPreventDefault}>{children}</form>
      </_Content>
      <_BackgroundImg src={AuthBack} />
      <ImgSlider />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const _Content = styled.div`
  width: 32rem;
  padding: 0 2.5rem;
  background-color: ${({ theme }) => theme.color.gray1};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  ${media._1024(`
    max-width: 31.125rem;
    padding: 0 1.5rem
  `)};
  ${media._360('padding: 0 1rem')};
`;

const _BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  object-fit: cover;
  ${media._1024('display:none')};
`;
