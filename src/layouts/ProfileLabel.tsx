import { Text } from '@scouit/design-system';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface PropsType {
  label: string;
  important?: boolean;
  children: ReactNode;
  wrap?: boolean;
}

export const ProfileLabel = ({
  label,
  important,
  children,
  wrap,
}: PropsType) => {
  return (
    <_Wrapper wrap={wrap}>
      <_Label size="title2">
        {label}
        {important && <Text color="error100">*</Text>}
      </_Label>
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ wrap: boolean }>`
  width: 100%;
  display: flex;
  ${({ wrap }) => css`
    flex-direction: ${wrap ? 'column' : 'row'};
    > div {
      :nth-child(2) {
        width: ${wrap ? '100%' : '70%'};
      }
    }
  `};
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

const _Label = styled(Text)``;
