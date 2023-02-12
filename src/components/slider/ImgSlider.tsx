import { IMac, LabTap, IPhone } from '@/assets';
import { useSlide } from '@/hooks/useSlide';
import { keyOfColor } from '@/styles/theme/color';
import styled from 'styled-components';
import { Text } from '../common/text';
import { ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { appear } from '@/animation/slider';

export const ImgSlider = () => {
  const { ref, currentImg, count, setCount } = useSlide(LabTap, IMac, IPhone);

  return (
    <_Wrapper>
      <_DescriptionImg
        width={500}
        height={460}
        ref={ref}
        src={currentImg}
      />
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
            <_Ball
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
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const _Ball = styled.div<{ color: keyOfColor; hover: keyOfColor }>`
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

const _DescriptionImg = styled.img`
  object-fit: contain;
  animation: ${appear} 3s forwards;
`;
