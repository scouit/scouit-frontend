import styled from 'styled-components';
import { media } from '@scouit/design-system';
import {
  ColumnCenterGap,
  ColumnGap,
  RowCenterGap,
  RowEndGap,
  RowGap,
} from '@/layouts/DirectionGap';
import { cardDummy } from '@/_dummy/profile';
import { Text } from '@/components/common/text';
import { NextJs, React, Typescript } from '@/assets';
import { ListItemLayout } from '@/layouts/ListItemLayout';

const SideProjectPage = () => (
  <div>
    {cardDummy.map(({ url, name, role, description }) => (
      <ListItemLayout isProfile>
        <ColumnCenterGap gap="2.25rem" padding="0 1.5rem">
          <ColumnGap gap="0.4375rem">
            <RowCenterGap gap="0.875rem" margin="2.5rem 0 0">
              <_Img src={url} />
              <ColumnGap gap="0.4375rem" padding="0 0 40px">
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
                <Text size="body4">{description}</Text>
              </ColumnGap>
            </RowCenterGap>
            <RowGap gap="0.5rem">이상한프로필</RowGap>
          </ColumnGap>
        </ColumnCenterGap>
      </ListItemLayout>
    ))}
  </div>
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

const _Img = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 100px;
`;

export default SideProjectPage;
