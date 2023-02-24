import { ColumnStartGap } from '@/layouts/DirectionGap';
import { FormEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '../common/button';
import { Text } from '../common/text';

interface PropsType {
  title: string;
  children: ReactNode;
  onClick?: () => void;
}

export const ProfileWriteBox = ({ title, onClick, children }: PropsType) => {
  return (
    <_Wrapper>
      <TitleWrapper>
        <Text size="heading1">{title}</Text>
        {onClick && (
          <Button kind="contained" onClick={onClick}>
            추가하기
          </Button>
        )}
      </TitleWrapper>
      <ColumnStartGap gap="65px" padding="0 0 65px">
        {children}
      </ColumnStartGap>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  max-width: 856px;
  width: 100%;
  position: relative;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.gray1};
  padding: 0 60px;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;
