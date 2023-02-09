import { LogoWithText } from '@/assets';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationList } from '../list/Navigation';
import { Columns12 } from '../../layouts/columns/12';
import { NavListIsLogin } from './Constants';
import { useRecoilValue } from 'recoil';
import { profileSelectBox } from '@/store/modal';
import { ProfileSelectBox } from '../select-box/Profile';
import { localStorgeGetItem } from '@/utils/storge';

export const Header = () => {
  const profile = useRecoilValue(profileSelectBox);
  return (
    <>
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
          </nav>
        </_Column12>
        {profile && <ProfileSelectBox />}
      </_Wrapper>
      <_A />
    </>
  );
};

const _A = styled.div`
  padding-top: 70px;
`;

const _Wrapper = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  background-color: ${({ theme }) => theme.color.gray1};
`;

const _Column12 = styled(Columns12)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;
