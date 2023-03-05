import { ProfileCard } from '@/components/card/Profile';
import { CardTextData } from '@/components/card/CardTextData';
import { Img } from '@/components/common/img';
import { ColumnGap } from '@/layouts/DirectionGap';
import { HeaderWrapper } from '@/layouts/wrapper/Header';
import { cardDummy } from '@/_dummy/lounge';

export const LoungeHomePage = () => (
  <HeaderWrapper type="어드민" currentPage="홈">
    {cardDummy.map(({ title, content, peoples, kinda, url }) => (
      <ProfileCard isProfile={false}>
        <Img width="100%" height="150px" radius="8px 8px 0 0" src={url} />
        <ColumnGap gap="10px" padding="10px 1.5rem">
          <CardTextData
            title={title}
            content={content}
            peoples={peoples}
            kinda={kinda}
          />
        </ColumnGap>
      </ProfileCard>
    ))}
  </HeaderWrapper>
);
