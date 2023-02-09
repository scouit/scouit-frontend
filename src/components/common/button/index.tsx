import styled, { css } from 'styled-components';
import { ReactNode } from 'react';

type kindType = 'contain' | 'round' | 'text';

interface Props {
  kind?: kindType;
  onClick?: () => void;
  margin?: string;
  children: ReactNode;
}

export const Button = ({
  kind = 'contain',
  onClick,
  margin,
  children,
}: Props) => {
  return (
    <_Wrapper onClick={onClick} kind={kind} margin={margin}>
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.button<{ kind: kindType; margin: string }>`
  border-radius: 2px;
  width: 100%;
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
