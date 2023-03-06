import { Back } from '@/assets';
import { Img } from '@/components/common/img';
import { Text } from '@/components/common/text';
import { LabelText } from '@/components/common/text/LabelText';
import { ColumnGap } from '@/layouts/DirectionGap';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { detailDummy } from '@/_dummy/lounge';
import { Header } from '@/components/header';

interface DetailDataType {
  title: string;
  name: keyof typeof detailDummy;
}

const detailData: DetailDataType[] = [
  { title: '장소', name: 'location' },
  { title: '일정', name: 'schedule' },
  { title: '인원', name: 'person' },
  { title: '조건', name: 'condition' },
  { title: '설명', name: 'explanation' },
  { title: '연락', name: 'communication' },
  { title: '링크', name: 'link' },
];

const LoungeDetail = () => (
  <>
    <Header />
    <Columns padding="127px 16px">
      <ColumnContent width="59.75rem" gap="35px">
        <Text size="title1">{detailDummy.title}</Text>
        <Text size="heading2">{detailDummy.kind}</Text>
        <Text size="body1">{detailDummy.date}</Text>
        <Img width="100%" objectFit="cover" src={Back} />
        <Text size="body1" margin="0 0 70px">
          {detailDummy.content}
        </Text>
        {detailData.map(({ title, name }) => {
          const data = detailDummy[name];
          return (
            <LabelText label={title}>
              {Array.isArray(data) ? (
                <ColumnGap gap="20px">
                  {data.map((e) => (
                    <Text as="li" size="body1">
                      {e}
                    </Text>
                  ))}
                </ColumnGap>
              ) : (
                <Text size="body1">{data}</Text>
              )}
            </LabelText>
          );
        })}
      </ColumnContent>
    </Columns>
  </>
);

export default LoungeDetail;
