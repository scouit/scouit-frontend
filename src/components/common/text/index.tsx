import styled from 'styled-components';
import { ReactNode } from 'react';
import { keyOfColor } from '@/styles/theme/color';
import { keyOfFont } from '@/styles/theme/font';

type alignType = 'start' | 'center' | 'end';

interface PropsType {
  className?: string;
  as?: 'div' | 'li';
  lineHeight?: string;
  height?: string;
  align?: alignType;
  size?: keyOfFont;
  color?: keyOfColor;
  margin?: string;
  padding?: string;
  children: ReactNode;
}

export const Text = ({
  className,
  as = 'div',
  lineHeight,
  height = 'auto',
  align = 'start',
  size = 'body1',
  color = 'gray9',
  margin,
  padding,
  children,
}: PropsType) => (
  <_Wrapper
    as={as}
    className={className}
    lineHeight={lineHeight}
    height={height}
    align={align}
    color={color}
    size={size}
    marign={margin}
    padding={padding}
  >
    {children}
  </_Wrapper>
);

const _Wrapper = styled.div<{
  lineHeight: string;
  height: string;
  align: alignType;
  color: keyOfColor;
  size: keyOfFont;
  marign: string;
  padding: string;
}>`
  line-height: ${({ lineHeight }) => lineHeight};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding && padding};
  text-align: ${({ align }) => align};
  ${({ theme, size }) => theme.font[size]};

  color: ${({ theme, color }) => theme.color[color]};
  margin: ${({ marign }) => marign && marign};
`;
