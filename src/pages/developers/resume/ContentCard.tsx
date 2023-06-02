import { ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { Text } from '@scouit/design-system';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface ItemType {
  role: string;
  name: string;
  profile: string;
  content: string;
  simple: string;
  complex: string;
  startDate: string;
  endDate: string;
  url: string;
  skills: string[];
  works: string[];
  imgs: string[];
}

interface PropsType {
  title: string;
  items: ItemType[] | ItemType;
  children: ReactNode;
}

export const ContentCard = ({ title, items, children }: PropsType) => {
  return (
    <_Wrapper>
      <ColumnGap gap="20px">
        <Text size="title1">{title}</Text>
        {children}
      </ColumnGap>
    </_Wrapper>
  );
};

interface ExplainType {
  children: ReactNode;
}
export const _ExplainText = ({ children }: ExplainType) => (
  <Text size="heading2">{children}</Text>
);

interface TagType {
  tags: string[];
}

export const TagList = ({ tags }: TagType) => (
  <RowGap wrap gap="10px">
    {tags.map((tag) => (
      <_Tag size="body1" color="gray0">
        {tag}
      </_Tag>
    ))}
  </RowGap>
);

const _Tag = styled(Text)`
  background-color: ${({ theme }) => theme.color.gray900};
  color: ${({ theme }) => theme.color.gray0};
  padding: 3px 7px;
  width: fit-content;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const _Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: 30px 36px;
  background-color: ${({ theme }) => theme.color.gray0};
`;
