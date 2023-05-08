import styled, { css } from 'styled-components';
import { useEffect } from 'react';
import { Arrow } from '@/assets';
import { Text } from '../common/text';
import { useInversion } from '@/hooks/useInversion';
import { Navigation } from '../common/Navigation';

export const Header = () => {
  const { state: display, correctState, incorrectState } = useInversion();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > 0) correctState();
      else incorrectState();

      document.documentElement.scrollTop = currentScroll;
    });
  }, []);

  return (
    <>
      <_Wrapper display={display}>
        <div>
          <Text size="heading1">SCOUIT</Text>
          <Navigation list={['채용공고', '이력서']} />
          <Navigation list={['로그인/회원가입']} />
        </div>
      </_Wrapper>
      <_Button>
        <Arrow color="gray900" />
        이전으로
      </_Button>
      <_Padding />
    </>
  );
};

const _Padding = styled.div`
  padding-top: 70px;
`;

const _Wrapper = styled.header<{ display: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 56px;
  transition: background 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s,
    height 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s,
    border 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s;
  ${({ display }) =>
    display &&
    css`
      height: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.11);
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(20px);
      will-change: background-color, height, border-bottom;
    `}
  >div {
    width: 1124px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

const _Button = styled.div`
  width: 127px;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
  z-index: 10;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.gray0};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: 0 8px 8px 0;
  top: 90px;
  font-size: ${({ theme }) => theme.font.heading2};
`;
