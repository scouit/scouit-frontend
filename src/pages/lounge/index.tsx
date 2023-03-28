import styled from 'styled-components';
import { ColumnGap } from '@/layouts/DirectionGap';
import { cardDummy } from '@/_dummy/lounge';
import { Text } from '@/components/common/text';
import { ListItemLayout } from '@/layouts/ListItemLayout';

const LoungeHomePage = () => (
  <div>
    {cardDummy.map(({ title, content, peoples, kinda, url }) => (
      <ListItemLayout>
        <_Img src={url} />
        <ColumnGap gap="10px" padding="10px 1.5rem">
          <ColumnGap gap="0.4375rem">
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
        </ColumnGap>
      </ListItemLayout>
    ))}
  </div>
);

const _Img = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export default LoungeHomePage;
