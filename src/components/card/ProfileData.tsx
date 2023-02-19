import { NextJs, React, Typescript } from '@/assets';
import { ColumnCenterGap, RowCenterGap } from '@/layouts/DirectionGap';
import { media } from '@/media';
import styled from 'styled-components';
import { Text } from '../common/text';

interface PropsType {
  url: string;
  name: string;
  role: string;
  descript: string;
}

export const ProfileData = ({ url, name, role, descript }: PropsType) => {
  return (
    <RowCenterGap gap="0.875rem" margin="2.5rem 0 0">
      <_ProfileImg src={url} />
      <ColumnCenterGap gap="0.4375rem">
        <_RoleWrapper>
          <_NameWrapper>
            <Text size="title2">{name}</Text>
            <Text size="body4" color="gray5">
              {role}
            </Text>
          </_NameWrapper>
          <RowCenterGap gap="0.5rem">
            <Typescript />
            <NextJs />
            <React />
          </RowCenterGap>
        </_RoleWrapper>
        <Text size="body4">{descript}</Text>
      </ColumnCenterGap>
    </RowCenterGap>
  );
};

const _ProfileImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: cover;
`;

const _RoleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  ${media.media720`
    flex-direction: column;
    gap: 0.375rem;
  `};
`;

const _NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  ${media.media720`
    flex-direction: row;
    align-items:center
  `};
`;
