import { ReactNode } from 'react';
import styled from 'styled-components';
import { Columns } from './Columns';

interface PropsType {
  children: ReactNode;
}

export const EditProfileWrapper = ({ children }: PropsType) => {
  return (
    <_Wrapper>
      <_Columns>{children}</_Columns>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray3};
  padding: 115px 0;
`;

const _Columns = styled(Columns)`
  display: flex;
  justify-content: space-between;
`;
