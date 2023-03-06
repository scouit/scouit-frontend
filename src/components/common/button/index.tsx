import { keyOfColor } from '@/styles/theme/color';
import { ReactNode } from 'react';
import styled from 'styled-components';

const heightSize = {
  small: 26,
  medium: 32,
  large: 40,
};

const backgroundColor = {
  primary: {
    default: 'primary500',
    hover: 'primary600',
    active: 'primary700',
  },
  affirmative: {
    default: 'success500',
    hover: 'success600',
    active: 'success700',
  },
  nagative: {
    default: 'error500',
    hover: 'error600',
    active: 'error700',
  },
} as const;

type ColorType = keyof typeof backgroundColor;

type SizeType = keyof typeof heightSize;

interface PropsType {
  className?: string;
  size?: SizeType;
  color?: ColorType;
  children?: ReactNode;
  disabled?: boolean;
  icon?: {
    isLeft: boolean;
    Element: JSX.Element;
  };
  onClick?: () => void;
  clickType?: 'submit' | 'button';
}

export const Button = ({
  className,
  size = 'medium',
  color = 'primary',
  children,
  disabled = false,
  onClick,
  icon,
  clickType = 'button',
}: PropsType) => (
  <_Wrapper
    className={className}
    size={size}
    color={color}
    disabled={disabled}
    onClick={!disabled && onClick}
    type={clickType}
  >
    {icon && icon.isLeft && icon.Element}
    {children}
    {icon && !icon.isLeft && icon.Element}
  </_Wrapper>
);

const _Wrapper = styled.button<{
  size: SizeType;
  color: ColorType;
}>`
  padding: 0 24px;
  height: ${({ size }) => heightSize[size]}px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  ${({ theme }) => theme.font.title4};
  cursor: pointer;
  background-color: ${({ theme, color }) =>
    theme.color[backgroundColor[color].default]};
  color: ${({ theme }) => theme.color.gray25};
  :hover {
    background-color: ${({ theme, color }) =>
      theme.color[backgroundColor[color].hover]};
  }
  :active {
    background-color: ${({ theme, color }) =>
      theme.color[backgroundColor[color].active]};
  }
`;
