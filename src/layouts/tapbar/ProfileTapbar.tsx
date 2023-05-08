import { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media, Button } from '@scouit/design-system';
import { useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import {
  ColumnEndGap,
  ColumnGap,
  ColumnStartGap,
} from '@/layouts/DirectionGap';

import { Text } from '@/components/common/text';
import { lio, profileInit } from './constants';
import { Header } from '@/components/header';
import { ColumnContent, Columns } from '../Columns';
import { ProfileType } from '@/apis/profile/type';
import { atomProfile } from '@/store/write';
import { getUserProfile } from '@/apis/profile/getProfile';
import { Banner } from '@/assets';

interface PropsType {
  title: string;
  children: ReactNode;
  onClick?: () => void;
}

export const ProfileTapbarLayout = ({
  title,
  onClick,
  children,
}: PropsType) => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);
  useQuery(['profile', profile], () => getUserProfile<ProfileType>(), {
    onSuccess: (data) => {
      console.log(data);
      setProfile(profileInit);
    },
  });
  return (
    <>
      <Header />
      <_EditWrapper>
        <_EditContent direction="row" gap="24px" justify="space-between">
          <ColumnGap gap="25px">
            <_BannerImg src={Banner} />
            <_Wrapper>
              <_TitleWrapper>
                <Text size="heading1">{title}</Text>
              </_TitleWrapper>
              <ColumnStartGap gap="60px" padding="0 0 65px">
                {children}
                <ColumnEndGap gap="0">
                  {onClick && (
                    <_RemoveButton
                      kind="tonal"
                      height="list"
                      color="error500"
                      radius="circle"
                    >
                      삭제하기
                    </_RemoveButton>
                  )}
                </ColumnEndGap>
              </ColumnStartGap>
            </_Wrapper>
            {onClick && (
              <Button
                onClick={onClick}
                kind="fill"
                height="LargeButton"
                radius="circle"
              >
                추가하기
              </Button>
            )}
          </ColumnGap>

          <_TapbarWrapper>
            <_ActiveContent>
              {lio.map((e) => (
                <Link to={e.url}>
                  <Button kind="text" height="LargeButton" radius="circle">
                    {e.title}
                  </Button>
                </Link>
              ))}
            </_ActiveContent>
            <_ButtonWrapper>
              <Button kind="fill" height="LargeButton" radius="circle">
                프로필 저장
              </Button>
            </_ButtonWrapper>
          </_TapbarWrapper>
        </_EditContent>
      </_EditWrapper>
    </>
  );
};

const _EditWrapper = styled(Columns)`
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray50};
  position: relative;
  padding: 184px 1.5rem 132px 1.5rem;
`;

const _EditContent = styled(ColumnContent)`
  ${media._1024(`
    flex-direction: column-reverse;
  `)}
`;

const _Wrapper = styled.div`
  width: 100%;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadow.md};
  padding: 40px 60px 0 60px;
  background-color: ${({ theme }) => theme.color.gray0};
`;

const _TitleWrapper = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 50px;
  border-bottom: 2px solid ${({ theme }) => theme.color.gray900};
`;

const _TapbarWrapper = styled.div`
  max-width: 264px;
  width: 30%;
  height: 500px;
  border-radius: 0.5rem;
  top: 115px;
  padding: 60px 16px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.gray25};
  box-shadow: ${({ theme }) => theme.shadow.md};
  position: sticky;
`;

const _ActiveContent = styled.div`
  display: flex;
  flex-direction: column;
  ${media._1024(`
    display:none;
  `)}
`;

const _ButtonWrapper = styled.div`
  ${media._1024(`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`)}
`;

const _BannerImg = styled.img`
  width: 100%;
  height: 162px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const _RemoveButton = styled(Button)`
  width: fit-content;
`;
