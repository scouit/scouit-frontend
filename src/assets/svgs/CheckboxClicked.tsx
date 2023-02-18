import styled from 'styled-components';
import { CheckBoxType, disableColor } from './CheckBoxUnSelected';

export const CheckBoxClicked = ({ disable }: CheckBoxType) => {
  return (
    <_Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      disable={disable}
    >
      <rect y="0.5" width="24" height="24" rx="2" fill="#3D8AFF" />
      <path d="M6 11.5L10.3148 16L18.5 8.5" stroke="white" stroke-width="2" />
    </_Svg>
  );
};

const _Svg = styled.svg<CheckBoxType>`
  > rect {
    fill: ${({ disable, theme }) =>
    disableColor(theme, disable, 'primaryLighten1', 'primary')};
  }
`;
