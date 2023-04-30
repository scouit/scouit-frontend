import styled from 'styled-components';
import { media } from '@scouit/design-system';
import { cardDummy } from '@/_dummy/profile';
import {
  ColumnCenterGap,
  ColumnGap,
  RowCenterGap,
  RowEndGap,
  RowGap,
} from '@/layouts/DirectionGap';
import { Text } from '@/components/common/text';
import { Back, ClubBack, NextJs, React, Typescript } from '@/assets';
import { ListItemLayout } from '@/layouts/ListItemLayout';
import { ColumnContent, Columns } from '@/layouts/Columns';
import { Header } from '@/components/header';
import { Selector } from '@/components/common/selector';
import { PageTitle } from '@/components/PageTitle';

const ClubPage = () => (
  <>
    <Header />
    <PageTitle src={ClubBack} title="연합동아리" margin="0 0 40px" isWhite />
    <Columns>
      <ColumnContent gap="24px" direction="row" wrap>
        {cardDummy.map(({ url, name, role, description, tag }) => (
          <_ItemWrapper>
            <_Img src={Back} />
            <_ItemContent>
              <ColumnGap gap="5px">
                <_Title size="title1">{name}</_Title>
                <Text size="heading2">{role}</Text>
                <Text size="heading2">{description}</Text>
              </ColumnGap>
              <RowGap gap="15px">
                <_Logo src={Back} />
                <ColumnGap gap="3px">
                  <Text size="title2">기업 이름</Text>
                  <Text size="body3">날짜</Text>
                </ColumnGap>
              </RowGap>
            </_ItemContent>
          </_ItemWrapper>
        ))}
      </ColumnContent>
    </Columns>
  </>
);

const _ItemWrapper = styled.div`
  width: 360px;
  height: 340px;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

const _ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 30px;
`;

const _Img = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 20px 20px 0 0;
`;

const _Logo = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
`;

const _Title = styled(Text)`
  height: 46px;
`;

export default ClubPage;
