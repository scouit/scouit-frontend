import { Back } from '@/assets';
import { Img } from '@/components/common/img';
import { Text } from '@/components/common/text';
import { LabelText } from '@/components/common/text/LabelText';
import { ColumnGap } from '@/layouts/DirectionGap';
import { _Columns, _ColumnContent } from '@/layouts/Columns';
import { detailDummy } from '@/_dummy/lounge';
import { Header } from '@/components/header';

export const LoungeDetail = () => (
  <>
    <Header />
    <_Columns padding="127px 16px">
      <_ColumnContent width="59.75rem" gap="35px">
        <Text size="title1">{detailDummy.title}</Text>
        <Text size="heading2">{detailDummy.kind}</Text>
        <Text size="body1">{detailDummy.date}</Text>
        <Img width="100%" objectFit="cover" src={Back} />
        <Text size="body1" margin="0 0 70px">
          {detailDummy.content}
        </Text>
        <LabelText label="장소">
          <Text size="body1">{detailDummy.location}</Text>
        </LabelText>
        <LabelText label="일정">
          <Text size="body1">{detailDummy.schedule}</Text>
        </LabelText>
        <LabelText label="인원">
          <Text size="body1">{detailDummy.person}</Text>
        </LabelText>
        <LabelText label="조건">
          <ColumnGap gap="20px">
            {detailDummy.condition.map((e) => (
              <Text as="li" size="body1">
                {e}
              </Text>
            ))}
          </ColumnGap>
        </LabelText>
        <LabelText label="설명">
          <Text size="body1">{detailDummy.explanation}</Text>
        </LabelText>
        <LabelText label="연락">
          <Text size="body1">{detailDummy.communication}</Text>
        </LabelText>
        <LabelText label="링크">
          <ColumnGap gap="20px">
            {detailDummy.link.map((e) => (
              <Text as="li" size="body1">
                {e}
              </Text>
            ))}
          </ColumnGap>
        </LabelText>
      </_ColumnContent>
    </_Columns>
  </>
);
