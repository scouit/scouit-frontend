import { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '@scouit/design-system';
import { ColumnStartGap } from '@/layouts/DirectionGap';
import { Button } from '@/components/common/button';
import { Text } from '@/components/common/text';
import { lio, profileInit } from './constants';
import { Header } from '@/components/header';
import { ColumnContent, Columns } from '../Columns';
import { useRecoilState } from 'recoil';
import { ProfileType } from '@/apis/profile/type';
import { atomProfile } from '@/store/write';
import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '@/apis/profile/getProfile';

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
    onSuccess: () => {
      setProfile(profileInit);
    },
    enabled: !!profile,
  });
  return (
    <_EditWrapper>
      <_EditContent direction="row" gap="24px" justify="space-between">
        {/* <Header textList={lio} currentPage={title} gap="17px" isMedia /> */}
        <_Wrapper>
          <_TitleWrapper>
            <Text size="heading1">{title}</Text>
            {onClick && <Button onClick={onClick}>추가하기</Button>}
          </_TitleWrapper>
          <ColumnStartGap gap="65px" padding="0 0 65px">
            {children}
          </ColumnStartGap>
        </_Wrapper>
        <_TapbarWrapper>
          <_ActiveContent>
            {lio.map((e) => (
              <Link to={e.url}>
                <Button
                  size="large"
                  color={e.title === title ? 'primary' : 'affirmative'}
                >
                  {e.title}
                </Button>
              </Link>
            ))}
          </_ActiveContent>
          <_ButtonWrapper>
            <Button size="large">프로필 저장</Button>
          </_ButtonWrapper>
        </_TapbarWrapper>
      </_EditContent>
    </_EditWrapper>
  );
};

const _EditWrapper = styled(Columns)`
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray200};
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
  background-color: ${({ theme }) => theme.color.gray100};
  padding: 0 60px;
`;

const _TitleWrapper = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;

const _TapbarWrapper = styled.div`
  width: 270px;
  height: 500px;
  border-radius: 0.5rem;
  top: 115px;
  padding: 60px 16px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.gray100};
  position: sticky;
  ${media._1024(`
    padding: 0;
    width: 0;
    height: 0;
  `)}
`;

const _ActiveContent = styled.div`
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
