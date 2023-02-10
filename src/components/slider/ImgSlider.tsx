import { IMac, LabTap, IPhone } from '@/assets';
import { useSlide } from '@/hooks/useSlide';
import { keyOfColor } from '@/styles/theme/color';
import styled from 'styled-components';
import { Text } from '../common/text';
import { ColumnGap } from '@/layouts/ColumnGap';
import { RowGap } from '@/layouts/RowGap';
import { useState } from 'react';

export const ImgSlider = () => {
  const [count, setCount] = useState<number>(0);
  const ImgArr = [LabTap, IMac, IPhone];

  return (
    <_Wrapper>
      <_DescriptionImg width={500} height={460} src={ImgArr[count % 3]} />
      <ColumnGap gap="16px">
        <Text size="title1" color="gray1">
          원하는 회사의 멋진 동료가
        </Text>
        <Text size="title1" color="gray1">
          될 기회를 얻을 수 있어요.
        </Text>
      </ColumnGap>
      <RowGap gap="46px">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <_IndexBall
              color={idx === count % 3 ? 'primary' : 'gray1'}
              hover={idx === count % 3 ? 'primary' : 'gray4'}
              onClick={() => setCount(idx)}
            />
          ))}
      </RowGap>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 530px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 0 auto;
`;

const _DescriptionImg = styled.img`
  object-fit: contain;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation: appear 3s forwards;
`;

const _IndexBall = styled.div<{ color: keyOfColor; hover: keyOfColor }>`
  width: 15px;
  height: 15px;
  cursor: pointer;
  transition: 0.25s;
  border-radius: 10px;
  background-color: ${({ theme, color }) => theme.color[color]};
  :hover {
    background-color: ${({ theme, hover }) => theme.color[hover]};
  }
`;
