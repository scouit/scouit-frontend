import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  gap: string;
  margin?: string;
}

export const ColumnGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin} align="start" direction="column">
    {children}
  </_Wrapper>
);

export const ColumnStartGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin} align="start" direction="column">
    {children}
  </_Wrapper>
);

export const ColumnCenterGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin} align="center" direction="column">
    {children}
  </_Wrapper>
);
export const ColumnEndGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin} align="end" direction="column">
    {children}
  </_Wrapper>
);

export const RowGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin} direction="row">
    {children}
  </_Wrapper>
);

export const RowStartGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin} justify="start" direction="row">
    {children}
  </_Wrapper>
);

export const RowCenterGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin} justify="center" direction="row">
    {children}
  </_Wrapper>
);

export const RowEndGap = ({ children, gap, margin }: PropsType) => (
  <_Wrapper gap={gap} margin={margin} justify="end" direction="row">
    {children}
  </_Wrapper>
);

const _Wrapper = styled.div<{
  gap: string;
  margin?: string;
  direction?: 'column' | 'row';
  align?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;
