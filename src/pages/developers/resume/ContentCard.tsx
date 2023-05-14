import { ColumnGap } from '@/layouts/DirectionGap';
import { Text } from '@scouit/design-system';
import styled from 'styled-components';

export const ContentCard = () => {
  return (
    <_Wrapper>
      <ColumnGap gap="20px">
        <Text size="title1">(대충 아이콘) 어쩌구</Text>
        <_Content>
          <_ContentTitle>
            <Text size="title2">scouit</Text>
            <Text size="title2">2021</Text>
          </_ContentTitle>
          <Text size="title3">Content</Text>
        </_Content>
      </ColumnGap>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 30px 36px;
  background-color: ${({ theme }) => theme.color.gray0};
`;

const _Content = styled.div`
  background-color: ${({ theme }) => theme.color.primary50};
  padding: 16px 20px;
  border-radius: ${({ theme }) => theme.borderRadius._12};
  box-shadow: ${({ theme }) => theme.shadow.md};
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const _ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
