import { LoungeData } from '@/components/card/LoungeData';
import { ProfileCard } from '@/components/card/Profile';
import { HeaderWrapper } from '@/layouts/wrapper/Header';
import { cardDummy } from '@/_dummy/lounge';

export const LoungeHomePage = () => (
  <HeaderWrapper type="어드민" currentPage="홈">
    {cardDummy.map(({ title, content, peoples, kinda }) => (
      <ProfileCard isProfile={false}>
        <LoungeData
          title={title}
          content={content}
          peoples={peoples}
          kinda={kinda}
        />
      </ProfileCard>
    ))}
  </HeaderWrapper>
);
