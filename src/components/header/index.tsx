import styled, { css } from 'styled-components';
import { useEffect } from 'react';
import { Arrow, MainProfile, Profile, ProfileSide } from '@/assets';
import { Text } from '../common/text';
import { useInversion } from '@/hooks/useInversion';
import { Navigation } from '../common/Navigation';
import { staticMember, writeProfileLink } from './constants';
import { NavigationList } from '../common/list/Navigation';
import { Link, useNavigate } from 'react-router-dom';
import { ColumnGap, RowGap } from '@/layouts/DirectionGap';
import OutsideClickHandler from 'react-outside-click-handler';

export const Header = () => {
  const {
    state: dropdown,
    incorrectState: closeDropdown,
    invertState: profileClick,
  } = useInversion();
  const { state: display, correctState, incorrectState } = useInversion();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > 0) correctState();
      else incorrectState();

      document.documentElement.scrollTop = currentScroll;
    });
  }, []);

  const isLogin = localStorage.getItem('access_token');

  return (
    <>
      <_Wrapper display={display}>
        <div>
          <RowGap gap="70px">
            <Link to="/">
              <Text size="heading1">SCOUIT</Text>
            </Link>

            <NavigationList list={[...staticMember].filter(Boolean)} />
          </RowGap>

          {isLogin ? (
            <OutsideClickHandler onOutsideClick={closeDropdown}>
              <_DropdownWrapper>
                <_ProfileImg
                  src={MainProfile}
                  width={50}
                  height={50}
                  onClick={profileClick}
                />
                {dropdown && (
                  <_Dropdown>
                    <ColumnGap gap="16px">
                      <Link to="/myPage/application">
                        <Text align="center">마이페이지</Text>
                      </Link>
                      <Link to="/profile/write/basic">
                        <Text align="center">이력서 작성</Text>
                      </Link>

                      <Text align="center">로그아웃</Text>
                    </ColumnGap>
                  </_Dropdown>
                )}
              </_DropdownWrapper>{' '}
            </OutsideClickHandler>
          ) : (
            <NavigationList
              list={[{ name: '로그인/회원가입', link: '/auth/sign-in' }]}
            />
          )}
        </div>
      </_Wrapper>
      <_Button onClick={() => navigate(-1)}>
        <Arrow color="gray900" />
        이전으로
      </_Button>

      <_Padding />
    </>
  );
};

const _Padding = styled.div`
  padding-top: 70px;
`;

const _ProfileImg = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
`;

const _Wrapper = styled.header<{ display: boolean }>`
  position: fixed;
  display: flex;
  z-index: 10;
  justify-content: center;
  width: 100%;
  height: 70px;
  box-shadow: ${({ theme }) => theme.shadow.md};
  transition: background 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s,
    height 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s,
    border 300ms cubic-bezier(0.31, 0.27, 0.15, 0.99) 0s;
  ${({ display }) =>
    display &&
    css`
      height: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.11);
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(20px);
      will-change: background-color, height, border-bottom;
    `}
  >div {
    width: 1124px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

const _Button = styled.div`
  width: 127px;
  position: fixed;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
  z-index: 10;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.gray0};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: 0 8px 8px 0;
  top: 90px;
  font-size: ${({ theme }) => theme.font.heading2};
`;

const _DropdownWrapper = styled.div`
  position: relative;
`;
const _Dropdown = styled.div`
  position: absolute;
  width: 170px;
  padding: 24px 40px;
  top: 70px;
  left: -100px;
  background-color: ${({ theme }) => theme.color.gray0};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadow.md};
`;
