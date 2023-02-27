import styled from 'styled-components';
import { NavigationList } from '../common/list/Navigation';
import { _Columns, _ColumnContent } from '../../layouts/Columns';
import { navList, socialList } from './constants';

export const Footer = () => (
  <_Wrapper as="footer" padding="70px 0 96px 0">
    <_ColumnContent>
      <_Navigation>
        <NavigationList list={navList} />
        <NavigationList list={socialList} />
      </_Navigation>
    </_ColumnContent>
  </_Wrapper>
);

const _Wrapper = styled(_Columns)`
  height: 285px;
  border-top: 1px solid ${({ theme }) => theme.color.gray4};
`;

const _Navigation = styled.nav`
  display: flex;
  align-items: center;
  height: 24px;
  justify-content: space-between;
`;
