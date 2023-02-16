import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Columns } from '../Columns';

interface PropsType {
  children: ReactNode;
}

export const JobPostingWrapper = ({ children }: PropsType) => {
  return (
    <div>
      <Header />
      <_Columns>{children}</_Columns>
      <Footer />
    </div>
  );
};

const _Columns = styled(Columns)`
  display: flex;
  justify-content: space-between;
`;
