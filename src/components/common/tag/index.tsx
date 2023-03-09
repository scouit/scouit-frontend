import styled from 'styled-components';
import { keyOfColor } from '@scouit/design-system';

interface PropsType {
  color?: keyOfColor;
  children: React.ReactNode;
}

export const Tag = ({ color, children }: PropsType) => (
  <_Wrapper color={color}>{children}</_Wrapper>
);

const _Wrapper = styled.div<{
  margin?: string;
  padding?: string;
  color?: keyOfColor;
}>`
  display: flex;
  align-items: center;
  gap: 7px;
  margin: 4.25px 0;
  padding: 7px;
  ${({ theme }) => theme.font.body4};
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 8px;
`;
