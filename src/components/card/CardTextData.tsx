import styled from 'styled-components';
import { NextJs, React, Typescript } from '@/assets';
import { ColumnGap, RowEndGap } from '@/layouts/DirectionGap';
import { media } from '@/styles/media';
import { Text } from '../common/text';

interface PropsType {
  name?: string;
  role?: string;
  description?: string;
  title?: string;
  kinda?: string;
  content?: string;
  peoples?: string;
}

export const CardTextData = ({
  name,
  role,
  description,
  title,
  kinda,
  content,
  peoples,
}: PropsType) => (
  <ColumnGap gap="0.4375rem">
    {role && (
      <_RoleWrapper>
        <_NameWrapper>
          <Text size="title2">{name}</Text>
          <Text size="body4" color="gray500">
            {role}
          </Text>
        </_NameWrapper>
        <RowEndGap width="fit-content" gap="0.5rem">
          <Typescript />
          <NextJs />
          <React />
        </RowEndGap>
      </_RoleWrapper>
    )}
    <Text size="body4">{description}</Text>
    <Text size="title3" color="gray900">
      {title}
    </Text>
    <Text size="body2" color="gray900">
      {kinda}
    </Text>
    <Text size="body2" color="gray900">
      {content}
    </Text>
    <Text size="body2" color="gray900">
      {peoples}
    </Text>
  </ColumnGap>
);

const _RoleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  ${media._720(`
    flex-direction: column;
    gap: 0.375rem;
  `)};
`;

const _NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  ${media._720(`
    flex-direction: row;
    align-items:center
  `)};
`;
