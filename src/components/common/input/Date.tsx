import { TimeType } from '@/apis/profile/type';
import { RowGap } from '@/layouts/DirectionGap';
import styled from 'styled-components';
import { Input } from '.';

interface PropsType {
  value: TimeType;
  margin?: string;
  gap?: string;
}

export const DateInput = ({ value, margin, gap = '46px' }: PropsType) => {
  return (
    <_Wrapper margin={margin} gap={gap}>
      <Input value={value.start} placeholder="yyyy-MM" label="시작일" />
      <Input value={value.end} placeholder="yyyy-MM" label="종료일" />
    </_Wrapper>
  );
};

const _Wrapper = styled(RowGap)`
  width: 100%;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;
