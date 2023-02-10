import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  children: ReactNode;
  gap: string;
  direction: 'row' | 'column';
  margin?: string;
  width?: string;
  height?: string;
  justify?: string;
  align?: string;
}

export const DirectionGap = ({
  children,
  gap,
  margin,
  direction,
  width,
  height,
  justify,
  align,
}: PropsType) => (
  <_Wrapper
    gap={gap}
    margin={margin}
    direction={direction}
    width={width}
    height={height}
    justify={justify}
    align={align}
  >
    {children}
  </_Wrapper>
);

const _Wrapper = styled.div<{
  gap: string;
  margin?: string;
  direction: 'row' | 'column';
  width?: string;
  height?: string;
  justify?: string;
  align?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;
