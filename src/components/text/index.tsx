import { keyOfColor } from '@/styles/theme/color';
import { keyOfFont } from '@/styles/theme/font';
import styled from 'styled-components';
import { ReactNode } from 'react';

type alignType = 'start' | 'center' | 'end';

interface Props {
  className?: string;
  align?: alignType;
  size?: keyOfFont;
  color?: keyOfColor;
  margin?: string;
  padding?: string;
  children: ReactNode;
}

export const Text = ({
  className,
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
  align: alignType;
  color: keyOfColor;
  size: keyOfFont;
  marign: string;
  padding: string;
}>`
  padding: ${({ padding }) => padding && padding};
  text-align: ${({ align }) => align};
  ${({ theme, size }) => theme.font[size]};
  color: ${({ theme, color }) => theme.color[color]};
  margin: ${({ marign }) => marign && marign};
`;
