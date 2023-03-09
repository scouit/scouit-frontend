import styled, { DefaultTheme } from 'styled-components';
import { keyOfColor } from '@scouit/design-system';

export interface CheckBoxType {
  disable?: boolean;
}

export const disableColor = (
  theme: DefaultTheme,
  disable: boolean,
  firstColor: keyOfColor,
  secondColor: keyOfColor,
) => theme.color[disable ? firstColor : secondColor];

export const CheckBoxUnSelected = ({ disable }: CheckBoxType) => (
  <_Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    disable={disable}
  >
    <rect
      x="1"
      y="1"
      width="22"
      height="22"
      rx="1"
      stroke="#999999"
      strokeWidth="2"
    />
  </_Svg>
);

const _Svg = styled.svg<CheckBoxType>`
  background-color: ${({ disable, theme }) =>
    disableColor(theme, disable, 'gray100', 'gray200')};

  > rect {
    stroke: ${({ disable, theme }) =>
      disableColor(theme, disable, 'gray300', 'gray500')};
  }
`;
