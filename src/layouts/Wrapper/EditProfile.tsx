import { Button } from '@/components/common/button';
import { Header } from '@/components/header';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Columns } from '../Columns';

interface PropsType {
  children: ReactNode;
}

export const EditProfileWrapper = ({ children }: PropsType) => {
  return (
    <_Wrapper>
      <Header />
      <_Columns>{children}</_Columns>
      <_Footer>
        <Button size="medium" kind="contained">
          프로필 저장
        </Button>
      </_Footer>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray3};
`;

const _Columns = styled(Columns)`
  display: flex;
  justify-content: space-between;
  padding: 115px 0 32px;
`;

const _Footer = styled.div`
  height: 100px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: ${({ theme }) => theme.shadow.modal};
  padding-right: 29px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
