import styled from 'styled-components';
import { ReactNode } from 'react';

interface PropsType {
  className?: string;
  children: ReactNode;
}

export const Columns12 = ({ className, children }: PropsType) => {
  return <_Wrapper className={className}>{children}</_Wrapper>;
};

const _Wrapper = styled.div`
  width: 1112px;
  margin: 0 auto;
`;
