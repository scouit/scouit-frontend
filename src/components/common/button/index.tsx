import styled, { css } from 'styled-components';
import { ReactNode } from 'react';

type KindType = 'contain' | 'round' | 'text';
type WidthType = 'fit-content' | '100%';

interface PropsType {
  width?: WidthType;
  kind?: KindType;
  onClick?: () => void;
  margin?: string;
  children: ReactNode;
  Icon?: JSX.Element;
}

export const Button = ({
  width = '100%',
  kind = 'contain',
  onClick,
  margin,
  children,
  Icon,
}: PropsType) => {
  return (
    <_Wrapper width={width} onClick={onClick} kind={kind} margin={margin}>
      {Icon && Icon}
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.button<{
  kind: KindType;
  margin: string;
  width: WidthType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 16px;
  border-radius: 2px;
  width: ${({ width }) => width};
  height: 43px;
  cursor: pointer;
  border: none;
  margin: ${({ margin }) => margin && margin};
  ${({ theme }) => theme.font.body2};
  ${({ kind, theme }) => {
    switch (kind) {
      case 'contain':
        return css`
          background-color: ${theme.color.primary};
          color: ${theme.color.gray1};
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
          color: ${theme.color.gray1};
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
