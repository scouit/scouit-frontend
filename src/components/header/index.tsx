import { Hamburger, LogoWithText } from '@/assets';
import { Link, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { NavigationList } from '../common/list/Navigation';
import { Columns } from '../../layouts/Columns';
import { NavListIsLogin } from './constants';
import { useRecoilValue } from 'recoil';
import { profileSelectBox } from '@/store/modal';
import { ProfileSelectBox } from '../select-box/Profile';
import { localStorgeGetItem } from '@/utils/storge';
import { media } from '@/styles/media';
import { BottomListNav } from './bottom/ListNav';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';

export interface BottomHeaderType {
  textList?: {
    title: string;
    url: string;
  }[];
  currentPage?: string;
  gap?: string;
  isMedia?: boolean;
}

export const Header = (bottomProps: BottomHeaderType) => {
  const profile = useRecoilValue(profileSelectBox);
  const display = useHeaderScroll();
  return (
    <_Wrapper>
      <_Column12 display={display}>
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
      {bottomProps.textList && <BottomListNav {...bottomProps} />}
    </_Wrapper>
  );
};

const _Wrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: ${({ theme }) => theme.shadow.modal};
`;

const _Column12 = styled(Columns)<{ display: boolean }>`
  display: flex;
  transition: height 0.25s;
  width: 100%;
  max-width: 1152px;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 1.5rem;
  ${({ display }) =>
    !display &&
    css`
      visibility: hidden;
      height: 0;
    `}
  ${media._720(`padding: 0 1rem;`)};
`;

const _Hamburger = styled.div`
  cursor: pointer;
  display: none;
  ${media._720(`display: block;`)}
`;
