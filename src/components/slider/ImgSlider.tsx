import styled, { css } from 'styled-components';
import { IMac, LabTap, IPhone } from '@/assets';
import { useSlide } from '@/hooks/useSlide';
import { keyOfColor } from '@/styles/theme/color';
import { Text } from '../common/text';
import { ColumnCenterGap } from '@/layouts/DirectionGap';
import { appearArray } from '@/styles/animation/slider';
import { media } from '@/styles/media';

const activeColor = (idx: number, count: number) => idx === count % 3;

export const ImgSlider = () => {
  const { currentImg, count, setCount } = useSlide(LabTap, IMac, IPhone);
  return (
    <_Wrapper>
      <_DescriptionImg
        width={400}
        height={400}
        src={currentImg}
        count={count}
      />
      <ColumnCenterGap gap="16px" margin="12px 0 0">
        <Text size="title1" color="gray100">
          연합 동아리를 모아보세요.
        </Text>
        <ColumnCenterGap gap="0">
          <Text color="gray100">
            scouit에서는 연합 동아리를 찾아줘서 개발자들이 취업하기 쉽게
          </Text>
          <Text color="gray100">기회를 만들워줘요. 지금 시작하세요.</Text>
        </ColumnCenterGap>
      </ColumnCenterGap>
      <_BallWrapper>
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <_Ball
              size={activeColor(idx, count) ? '12px' : '8px'}
              color={activeColor(idx, count) ? 'primary500' : 'gray100'}
              hover={activeColor(idx, count) ? 'primary500' : 'gray400'}
              onClick={() => setCount(idx)}
            />
          ))}
      </_BallWrapper>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 33.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${media._1024('display:none;')}
`;

const _BallWrapper = styled.div`
  height: 0.9375rem;
  display: flex;
  align-items: center;
  gap: 1.5625rem;
  margin-top: 2.5rem;
`;

const _Ball = styled.div<{
  size: string;
  color: keyOfColor;
  hover: keyOfColor;
}>`
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `};

  cursor: pointer;
  transition: 0.25s;
  border-radius: 0.625rem;
  background-color: ${({ theme, color }) => theme.color[color]};

  :hover {
    background-color: ${({ theme, hover }) => theme.color[hover]};
  }
`;

const _DescriptionImg = styled.img<{ count: number }>`
  object-fit: contain;
  animation: ${({ count }) => appearArray[count % 3]} 3s forwards;
`;
