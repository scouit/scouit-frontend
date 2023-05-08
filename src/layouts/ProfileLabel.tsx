import { Text } from '@scouit/design-system';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  label: string;
  important?: boolean;
  children: ReactNode;
}

export const ProfileLabel = ({ label, important, children }: PropsType) => {
  return (
    <_Wrapper>
      <_Label size="title2">
        {label}
        {important && <Text color="error100">*</Text>}
      </_Label>
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  > div {
    :nth-child(2) {
      width: 70%;
    }
  }
`;

const _Label = styled(Text)``;
