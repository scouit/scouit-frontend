import { ReactNode, FormEvent } from 'react';
import styled from 'styled-components';
import { AuthBack } from '@/assets';
import { ImgSlider } from '@/components/slider/ImgSlider';
import { media } from '@/styles/media';

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
  background-color: ${({ theme }) => theme.color.gray100};
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
