import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import ReactOutsideClickHandler from 'react-outside-click-handler';
import { media } from '@scouit/design-system';
import { Hamburger, LogoWithText, Profile } from '@/assets';
import { NavigationList } from '../common/list/Navigation';
import { NavListIsLogin } from './constants';
import { profileSelectBox } from '@/store/modal';
import { localStorgeGetItem } from '@/utils/storge';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';
import { ColumnContent, Columns } from '@/layouts/Columns';
import { Text } from '../common/text';
import { Button } from '../common/button';

interface BottomHeaderType {
  textList?: {
    title: string;
    url: string;
  }[];
  currentPage?: string;
  gap?: string;
  isMedia?: boolean;
}

export const Header = ({
  textList,
  currentPage,
  gap,
  isMedia,
}: BottomHeaderType) => {
  const [profile, setProfile] = useRecoilState(profileSelectBox);
  const display = useHeaderScroll();
  return (
    <_Wrapper padding="0 1.5rem" as="header">
      <_Column12
        direction="row"
        align="center"
        justify="space-between"
        display={display}
      >
        <Link to="/">
          <LogoWithText />
        </Link>
        <nav>
          <NavigationList
            list={NavListIsLogin(!!localStorgeGetItem('access_token'))}
          />
          <_Hamburger>
            <Hamburger />
          </_Hamburger>
        </nav>
      </_Column12>
      {profile && (
        <ReactOutsideClickHandler onOutsideClick={() => setProfile(false)}>
          <_Content>
            <Text padding="15px 24px">내 프로필</Text>
            <ul>
              <_Item>
                <_Profile>
                  <img
                    width={85}
                    height={85}
                    src={Profile}
                    alt="내 프로필 사진"
                  />
                  <Text size="title2">조상현</Text>
                  <Link to="/profile/write/basic">
                    <Button>프로필 수정</Button>
                  </Link>
                </_Profile>
              </_Item>
              <_Item>
                <Link to="/my-page">마이페이지</Link>
              </_Item>
              <_Item>
                {/* <button onClick={() => logoutMutate.mutate()}>로그아웃</button> */}
              </_Item>
            </ul>
          </_Content>
        </ReactOutsideClickHandler>
      )}
      {textList && (
        <_TapWrapper gap={gap} isMedia={isMedia}>
          {textList?.map((e) => (
            <Link to={e.url}>
              <Text
                size="heading3"
                color={e.title === currentPage ? 'primary500' : 'gray900'}
              >
                {e.title}
              </Text>
            </Link>
          ))}
        </_TapWrapper>
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled(Columns)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray400};
  background-color: ${({ theme }) => theme.color.gray100};
  box-shadow: ${({ theme }) => theme.shadow.xs};
  ${media._720('padding: 0 1rem;')};
`;

const _Column12 = styled(ColumnContent)<{ display: boolean }>`
  transition: height 0.25s;
  height: 70px;
  ${({ display }) =>
    !display &&
    css`
      visibility: hidden;
      height: 0;
    `}
`;

const _Hamburger = styled.div`
  cursor: pointer;
  display: none;
  ${media._720('display: block;')}
`;

const _TapWrapper = styled.div<{ gap: string; isMedia: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 57px;
  gap: ${({ gap }) => gap};
  border-top: 1px solid ${({ theme }) => theme.color.gray400};
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.primary500};
  ${({ isMedia }) => isMedia && `display:none; ${media._1024('display:flex')}`}
`;

const _Profile = styled.div`
  width: 131px;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const _Content = styled.div`
  position: fixed;
  top: 75px;
  right: 200px;
  width: 330px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.xs};
  background-color: ${({ theme }) => theme.color.gray100};
`;

const _Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.font.title2};

  border-top: 1px solid ${({ theme }) => theme.color.gray400};
  min-height: 63px;
`;
