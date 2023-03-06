import styled, { css } from 'styled-components';
import { keyOfColor } from '@/styles/theme/color';

interface PropsType {
  padding?: string;
  margin?: string;
  color?: keyOfColor;
  children: React.ReactNode;
}

export const Tag = ({ padding, margin, color, children }: PropsType) => (
  <_Wrapper margin={margin} padding={padding} color={color}>
    {children}
  </_Wrapper>
);

const _Wrapper = styled.div<{
  margin?: string;
  padding?: string;
  color?: keyOfColor;
}>`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  ${({ theme }) => theme.font.body4};
  ${({ theme, color }) =>
    color
      ? css`
          background-color: ${theme.color[color]};
          border-radius: 8px;
        `
      : css`
          border: 0.0625rem solid ${theme.color.gray300};
          border-radius: 6.25rem;
        `};
`;
