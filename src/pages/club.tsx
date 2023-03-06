import { ProfileCard } from '@/components/card/Profile';
import { ColumnCenterGap, RowCenterGap, RowGap } from '@/layouts/DirectionGap';
import { CardTextData } from '@/components/card/CardTextData';
import { Tag } from '@/components/common/tag';
import { HeaderWrapper } from '@/layouts/wrapper/Header';
import { cardDummy } from '@/_dummy/profile';
import { Img } from '@/components/common/img';

const ClubPage = () => (
  <HeaderWrapper currentPage="연합 동아리">
    {cardDummy.map(({ url, name, role, description, tag }) => (
      <ProfileCard isProfile>
        <ColumnCenterGap gap="2.25rem" padding="0 1.5rem">
          <RowCenterGap gap="0.875rem" margin="2.5rem 0 0">
            <Img src={url} width="6.25rem" height="6.25rem" radius="100px" />
            <CardTextData name={name} role={role} description={description} />
          </RowCenterGap>
          <RowGap gap="0.5rem">
            {tag.map((content) => (
              <Tag padding="0.5625rem 1.125rem">{content}</Tag>
            ))}
          </RowGap>
        </ColumnCenterGap>
      </ProfileCard>
    ))}
  </HeaderWrapper>
);

export default ClubPage;
