import { Hamburger, LogoWithText } from '@/assets';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationList } from '../common/list/Navigation';
import { Columns } from '../../layouts/Columns';
import { NavListIsLogin } from './constants';
import { useRecoilValue } from 'recoil';
import { profileSelectBox } from '@/store/modal';
import { ProfileSelectBox } from '../select-box/Profile';
import { localStorgeGetItem } from '@/utils/storge';
import { media } from '@/media';

export const Header = () => {
  const profile = useRecoilValue(profileSelectBox);
  return (
    <_Wrapper>
      <_Column12>
        <Link to={'/'}>
          <LogoWithText />
        </Link>
        <nav>
          <NavigationList
            list={NavListIsLogin(
              localStorgeGetItem('access_token') ? true : false
            )}
          />
          <_Hamburger>
            <Hamburger />
          </_Hamburger>
        </nav>
      </_Column12>
      {profile && <ProfileSelectBox />}
    </_Wrapper>
  );
};

const _Wrapper = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  background-color: ${({ theme }) => theme.color.gray1};
`;

const _Column12 = styled(Columns)`
  width: 100%;
  max-width: 1152px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 1.5rem;
  ${media.media720`padding: 0 1rem;`};
`;

const _Hamburger = styled.div`
  cursor: pointer;
  display: none;
  ${media.media720`display: block;`}
`;
