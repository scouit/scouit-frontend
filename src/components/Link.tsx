import { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface PropsType {
  children: ReactNode;
  to: string;
}

export const UnderLineLink = ({ children, to }: PropsType) => (
  <_Wrapper to={to}>{children}</_Wrapper>
);

const _Wrapper = styled(Link)`
  :hover {
    text-decoration: underLine;
    text-underline-position: under;
  }
`;
