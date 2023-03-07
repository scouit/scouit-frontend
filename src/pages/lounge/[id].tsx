import styled from 'styled-components';
import { Back } from '@/assets';
import { Text } from '@/components/common/text';
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
        <_Img src={Back} />
        <Text size="body1" margin="0 0 70px">
          {detailDummy.content}
        </Text>
        {detailData.map(({ title, name }) => {
          const data = detailDummy[name];
          return (
            <_Wrapper>
              <_Text size="title2">{title}</_Text>
              <_Content>
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
              </_Content>
            </_Wrapper>
          );
        })}
      </ColumnContent>
    </Columns>
  </>
);

const _Wrapper = styled.div`
  display: flex;
`;

const _Text = styled(Text)`
  white-space: nowrap;
`;

const _Content = styled.div`
  border-left: 2px solid ${({ theme }) => theme.color.gray900};
  padding-left: 25px;
  margin-left: 40px;
`;

const _Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default LoungeDetail;
