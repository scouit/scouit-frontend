import styled, { css } from 'styled-components';
import { ReactNode } from 'react';
import { keyOfColor } from '@/styles/theme/color';
import { keyOfFont } from '@/styles/theme/font';

type KindType = 'contain' | 'round' | 'text';
type WidthType = 'fit-content' | '100%';

interface PropsType {
  width?: WidthType;
  kind?: KindType;
  type?: 'submit' | 'button';
  onClick?: () => void;
  margin?: string;
  size?: keyOfFont;
  children: ReactNode;
  Icon?: JSX.Element;
  color?: keyOfColor;
}

export const Button = ({
  width = '100%',
  kind = 'contain',
  type = 'submit',
  size = 'body2',
  onClick,
  margin,
  children,
  Icon,
  color = 'gray1',
}: PropsType) => {
  return (
    <_Wrapper
      width={width}
      onClick={onClick}
      kind={kind}
      type={type}
      margin={margin}
      color={color}
      size={size}
    >
      {Icon && Icon}
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.button<{
  kind: KindType;
  margin: string;
  width: WidthType;
  size: keyOfFont;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 16px;
  border-radius: 4px;
  width: ${({ width }) => width};
  height: 50px;
  cursor: pointer;
  margin: ${({ margin }) => margin && margin};
  ${({ theme, size }) => theme.font[size]};
  ${({ kind, theme, color }) => {
    switch (kind) {
      case 'contain':
        return css`
          background-color: ${theme.color.primary};
          color: ${theme.color[color]};
          :hover {
            background-color: ${theme.color.primaryDarken1};
          }
          :active {
            background-color: ${theme.color.primaryDarken2};
          }
        `;
      case 'round':
        return css`
          border-radius: 30px;
          background-color: ${theme.color.primary};
          color: ${theme.color[color]};
          :hover {
            background-color: ${theme.color.primaryDarken1};
          }
          :active {
            background-color: ${theme.color.primaryDarken2};
          }
        `;
      case 'text':
        return css`
          background-color: ${({ theme }) => theme.color.gray1};
          color: ${theme.color[color]};
          :hover {
            background-color: ${({ theme }) => theme.color.gray3};
          }
          :active {
            background-color: ${({ theme }) => theme.color.gray4};
          }
        `;
    }
  }}
`;
