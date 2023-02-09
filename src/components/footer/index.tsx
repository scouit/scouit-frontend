import styled from 'styled-components';
import { NavigationList } from '../common/list/Navigation';
import { Columns12 } from '../../layouts/columns/12';
import { navList, socialList } from './constants';

export const Footer = () => {
  return (
    <_Wrapper>
      <_Columns12>
        <_Navigation>
          <NavigationList list={navList} />
          <NavigationList list={socialList} />
        </_Navigation>
      </_Columns12>
    </_Wrapper>
  );
};

const _Wrapper = styled.footer`
  height: 285px;
  border-top: 1px solid ${({ theme }) => theme.color.gray4};
`;

const _Columns12 = styled(Columns12)`
  padding: 70px 0 96px 0;
`;

const _Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 24px;
  justify-content: space-between;
`;
