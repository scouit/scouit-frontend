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
  { title: '내용', name: 'content' },
  { title: '기간', name: 'date' },
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
      <ColumnContent width="59.75rem" gap="32px">
        <ColumnGap gap="8px" margin="0 0 32px">
          <ColumnGap gap="8px">
            <Text size="title1">{detailDummy.title}</Text>
            <Text size="heading2">{detailDummy.kind}</Text>
            <Text size="body1">{detailDummy.date}</Text>
          </ColumnGap>
          <_Img src={Back} />
        </ColumnGap>
        {detailData.map(({ title, name }) => {
          const data = detailDummy[name];
          return (
            <ColumnGap gap="24px">
              <Wrapper>
                <_Text size="title2" color="primary400">
                  {title}
                </_Text>
                <_Line />
              </Wrapper>

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
            </ColumnGap>
          );
        })}
      </ColumnContent>
    </Columns>
  </>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const _Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.primary400};
`;

const _Text = styled(Text)`
  white-space: nowrap;
`;

const _Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default LoungeDetail;
