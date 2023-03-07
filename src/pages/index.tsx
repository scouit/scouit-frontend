import styled from 'styled-components';
import {
  ColumnCenterGap,
  ColumnGap,
  RowCenterGap,
  RowEndGap,
  RowGap,
} from '@/layouts/DirectionGap';
import { HeaderWrapper } from '@/layouts/wrapper/Header';
import { cardDummy } from '@/_dummy/profile';
import { media } from '@/styles/media';
import { Text } from '@/components/common/text';
import { NextJs, React, Typescript } from '@/assets';
import { ListItemLayout } from '@/layouts/ListItemLayout';

const HomePage = () => (
  <HeaderWrapper currentPage="홈">
    {cardDummy.map(({ url, name, role, description, tag }) => (
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
            <RowGap gap="0.5rem">
              {tag.map((content) => (
                <_Tag>{content}</_Tag>
              ))}
            </RowGap>
          </ColumnGap>
        </ColumnCenterGap>
      </ListItemLayout>
    ))}
  </HeaderWrapper>
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

const _Tag = styled.div`
  ${({ theme }) => theme.font.body4};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray300};
  border-radius: 6.25rem;
  padding: 0.5625rem 1.125rem;
`;

export default HomePage;
