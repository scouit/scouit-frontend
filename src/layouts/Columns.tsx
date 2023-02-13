import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  gutter?: 5 | 12;
  className?: string;
  children: ReactNode;
}

const gutterObject = {
  5: 380,
  12: 1112,
} as const;

export const Columns = ({ gutter = 12, children, className }: PropsType) => (
  <_Wrapper width={gutterObject[gutter]} className={className}>
    {children}
  </_Wrapper>
);

const _Wrapper = styled.div<{ width: 380 | 1112 }>`
  width: ${({ width }) => width}px;
  margin: 0 auto;
`;
