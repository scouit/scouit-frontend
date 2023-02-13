import { ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from '../common/text';

interface PropsType {
  title: string;
  children: ReactNode;
}

export const ProfileWriteForm = ({ title, children }: PropsType) => {
  return (
    <_Wrapper>
      <Text size="heading1">{title}</Text>
      {children}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 760px;
  background-color: ${({ theme }) => theme.color.gray1};
  padding: 50px;
`;
