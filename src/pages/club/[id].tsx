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
  { title: '사진', name: 'imgList' },
  { title: '기간', name: 'date' },
  { title: '장소', name: 'location' },
  { title: '일정', name: 'schedule' },
  { title: '인원', name: 'person' },
  { title: '조건', name: 'condition' },
  { title: '설명', name: 'explanation' },
  { title: '연락', name: 'communication' },
  { title: '링크', name: 'link' },
];

const ClubDetail = () => (
  <>
    <Header />
    <Columns padding="127px 16px">
      <ColumnContent width="59.75rem" gap="32px" direction="row">
        <ColumnGap gap="32px">
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
        </ColumnGap>
        <_ProfileCard>
          <_TitleWrapper>
            <_ProfileImg src={Back} />
            <Text size="title1">디자인과 프레임워크의 만남</Text>
          </_TitleWrapper>
          <Text size="title2">대학생 전용입니다.</Text>
          <Text size="title2">
            Lorem ipsum dolor sit amet consectetur. Ultrices aliquam tempor
            etiam pulvinar. Ut egestas dolor a arcu venenatis mi amet eget.
          </Text>
        </_ProfileCard>
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

const _ProfileCard = styled.div`
  position: sticky;
  top: 100px;
  flex-shrink: 0;
  width: 260px;
  height: fit-content;
  padding: 32px 24px;
  box-shadow: ${({ theme }) => theme.shadow.md};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const _ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
`;

const _TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default ClubDetail;
