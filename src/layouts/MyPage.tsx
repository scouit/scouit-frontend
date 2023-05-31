import { Button, Text } from '@scouit/design-system';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColumnContent, Columns } from './Columns';
import { ColumnGap, RowGap } from './DirectionGap';

interface PropsType {
  activeCount?: boolean;
  children: ReactNode;
}

export const MyPageLayout = ({ activeCount, children }: PropsType) => {
  return (
    <Columns padding="50px 0 0" bg="gray50">
      <_Wrapper>
        <ColumnContent direction="row">
          <ColumnGap gap="24px">
            <_Title>MyPage</_Title>
            {activeCount && (
              <_Content>
                <_ContentNav>
                  <Text size="title2">전체</Text>
                  <_ContentTitle>105</_ContentTitle>
                </_ContentNav>
                <_ContentNav>
                  <Text size="title2">전체</Text>
                  <_ContentTitle>105</_ContentTitle>
                </_ContentNav>
                <_ContentNav>
                  <Text size="title2">전체</Text>
                  <_ContentTitle>105</_ContentTitle>
                </_ContentNav>
                <_ContentNav>
                  <Text size="title2">전체</Text>
                  <_ContentTitle>105</_ContentTitle>
                </_ContentNav>
                <_ContentNav>
                  <Text size="title2">전체</Text>
                  <_ContentTitle>105</_ContentTitle>
                </_ContentNav>
              </_Content>
            )}
            <ColumnGap gap="12px">{children}</ColumnGap>
          </ColumnGap>
          <_NavItemBox>
            <Link to="/myPage/application">
              <Button width="100%" radius="circle">
                지원 현황
              </Button>
            </Link>
            <Link to="/myPage/suggestion">
              <Button width="100%" radius="circle">
                지원 제안
              </Button>
            </Link>
            <Link to="/myPage/notification">
              <Button width="100%" radius="circle">
                받은 공지
              </Button>
            </Link>
          </_NavItemBox>
        </ColumnContent>
      </_Wrapper>
    </Columns>
  );
};

const _Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const _NavItemBox = styled.div`
  height: fit-content;
  padding: 30px;
  width: 260px;
  box-shadow: ${({ theme }) => theme.shadow.md};
  flex-shrink: 0;
`;

const _Wrapper = styled.div`
  height: calc(100vh - 70px);
`;

const _Content = styled.div`
  display: flex;
  padding: 17px 50px;
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

const _ContentNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 32px;
  gap: 20px;
  border-bottom: 3px solid ${({ theme }) => theme.color.primary700};
`;

const _ContentTitle = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const _ListsContents = styled.div``;
