import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  gap: string;
}

export const RowGap = ({ children, gap }: PropsType) => (
  <_Wrapper gap={gap}>{children}</_Wrapper>
);

const _Wrapper = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;
