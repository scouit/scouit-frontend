import styled from 'styled-components';
import { DateType } from '@scouit/api-types';
import { RowGap } from '@/layouts/DirectionGap';

interface PropsType {
  value: DateType;
  margin?: string;
  gap?: string;
}

export const DateInput = ({ value, margin, gap = '46px' }: PropsType) => (
  <_Wrapper margin={margin} gap={gap}>
    <DateInput value={value} />
  </_Wrapper>
);

const _Wrapper = styled(RowGap)`
  width: 100%;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;
