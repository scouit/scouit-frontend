import { keyOfColor } from '@/styles/theme/color';
import { keyOfFont } from '@/styles/theme/font';
import styled from 'styled-components';
import { ReactNode } from 'react';

type alignType = 'start' | 'center' | 'end';

interface Props {
  className?: string;
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
  height = 'auto',
  align = 'start',
  size = 'body1',
  color = 'gray9',
  margin,
  padding,
  children,
}: Props) => {
  return (
    <_Wrapper
      className={className}
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
};

const _Wrapper = styled.div<{
  height: string;
  align: alignType;
  color: keyOfColor;
  size: keyOfFont;
  marign: string;
  padding: string;
}>`
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding && padding};
  text-align: ${({ align }) => align};
  ${({ theme, size }) => theme.font[size]};
  color: ${({ theme, color }) => theme.color[color]};
  margin: ${({ marign }) => marign && marign};
`;
