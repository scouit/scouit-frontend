import { Img } from '@/components/common/img';
import { ColumnGap } from '@/layouts/DirectionGap';
import { HeaderWrapper } from '@/layouts/wrapper/Header';
import { cardDummy } from '@/_dummy/lounge';
import { Text } from '@/components/common/text';
import { ProfileCard } from '@/layouts/ListItemLayout';

const LoungeHomePage = () => (
  <HeaderWrapper type="어드민" currentPage="홈">
    {cardDummy.map(({ title, content, peoples, kinda, url }) => (
      <ProfileCard>
        <Img width="100%" height="150px" radius="8px 8px 0 0" src={url} />
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
      </ProfileCard>
    ))}
  </HeaderWrapper>
);

export default LoungeHomePage;
