import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  gap: string;
  margin?: string;
}

export const RowGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin}>
    {children}
  </_Wrapper>
);

const _Wrapper = styled.div<{
  gap: string;
  margin?: string;
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;
