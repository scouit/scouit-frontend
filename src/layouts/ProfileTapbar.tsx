import { ReactNode } from 'react';
import styled from 'styled-components';
import { ColumnStartGap } from '@/layouts/DirectionGap';
import { Button } from '@/components/common/button';
import { Text } from '@/components/common/text';
import { Tapbar } from '@/components/writeProfile';
import { lio } from '@/components/writeProfile/constants';
import { Header } from '@/components/header';

interface PropsType {
  title: string;
  children: ReactNode;
  onClick?: () => void;
}

export const ProfileTapbarLayout = ({
  title,
  onClick,
  children,
}: PropsType) => (
  <>
    <Header textList={lio} currentPage={title} gap="17px" isMedia />
    <_Wrapper>
      <_TitleWrapper>
        <Text size="heading1">{title}</Text>
        {onClick && <Button onClick={onClick}>추가하기</Button>}
      </_TitleWrapper>
      <ColumnStartGap gap="65px" padding="0 0 65px">
        {children}
      </ColumnStartGap>
    </_Wrapper>
    <Tapbar currentPage={title} />
  </>
);

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
