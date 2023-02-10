import { IMac, LabTap, IPhone } from '@/assets';
import { useSlide } from '@/hooks/useSlide';
import { DirectionGap } from '@/layouts/DirectionGap';
import { keyOfColor } from '@/styles/theme/color';
import styled from 'styled-components';
import { Text } from '../common/text';

export const ImgSlider = () => {
  const { currentImg, count, setCount } = useSlide(LabTap, IMac, IPhone);

  return (
    <DirectionGap
      margin="0 auto"
      direction="column"
      gap="40px"
      width="530px"
      align="center"
      justify="center"
    >
      <_DescriptionImg width={500} height={460} src={currentImg} />
      <DirectionGap direction="column" gap="16px">
        <Text size="title1" color="gray1">
          원하는 회사의 멋진 동료가
        </Text>
        <Text size="title1" color="gray1">
          될 기회를 얻을 수 있어요.
        </Text>
      </DirectionGap>
      <DirectionGap direction="row" gap="46px">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <_IndexBall
              color={idx === count % 3 ? 'primary' : 'gray1'}
              hover={idx === count % 3 ? 'primary' : 'gray4'}
              onClick={() => setCount(idx)}
            />
          ))}
      </DirectionGap>
    </DirectionGap>
  );
};

const _DescriptionImg = styled.img`
  object-fit: contain;
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
