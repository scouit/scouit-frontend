import styled from 'styled-components';
import { keyOfColor } from '@/styles/theme/color';

interface PropsType {
  width?: string;
  height: string;
  padding?: string;
  margin?: string;
  color: keyOfColor;
}

export const Line = styled.div<PropsType>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  background-color: ${({ color, theme }) => theme.color[color]};
`;
