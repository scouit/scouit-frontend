import styled from 'styled-components';
import { Back } from '@/assets';
import { Text } from '@/components/common/text';
import { ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { detailDummy } from '@/_dummy/lounge';
import { Header } from '@/components/header';
import { clubDetail } from '@/_dummy/club';

interface DetailDataType {
  title: string;
  name: keyof typeof clubDetail;
}

const detailData: DetailDataType[] = [
  { title: '내용', name: 'content' },
  { title: '사진', name: 'imgList' },
  { title: '일정', name: 'date' },
  { title: '모집 인원', name: 'person' },
  { title: '모집 조건', name: 'condition' },
  { title: '링크', name: 'link' },
];

const ClubDetail = () => {
  const { name, jobCondition, introduce, url, logo, title, content } =
    clubDetail;
  return (
    <>
      <Header />
      <Columns padding="127px 16px">
        <ColumnContent gap="32px" direction="row">
          <ColumnGap gap="32px">
            <ColumnGap gap="8px" margin="0 0 32px">
              <ColumnGap gap="8px">
                <Text size="title1">{title}</Text>
              </ColumnGap>
              <_Img src={url} />
            </ColumnGap>
            {detailData.map(({ title, name }) => {
              const data = clubDetail[name];
              return (
                data && (
                  <ColumnGap gap="24px">
                    <Wrapper>
                      <Text size="title2" color="primary400">
                        {title}
                      </Text>
                      <_Line />
                    </Wrapper>

                    <ContentPreWrap>
                      {Array.isArray(data) ? (
                        name !== 'imgList' ? (
                          <ColumnGap gap="20px">
                            {data.map((e) => (
                              <Text as="li" size="body1">
                                {e}
                              </Text>
                            ))}
                          </ColumnGap>
                        ) : (
                          <RowGap gap="20px">
                            {data.map((e) => (
                              <_SubImg src={e} />
                            ))}
                          </RowGap>
                        )
                      ) : (
                        <Text size="body1">{data}</Text>
                      )}
                    </ContentPreWrap>
                  </ColumnGap>
                )
              );
            })}
          </ColumnGap>
          <_ProfileCard>
            <_TitleWrapper>
              <_ProfileImg src={logo} />
              <Text size="title1">{name}</Text>
            </_TitleWrapper>
            <Text size="title2">{jobCondition}</Text>
            <Text size="title2">{introduce}</Text>
          </_ProfileCard>
        </ColumnContent>
      </Columns>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  > div {
    :first-child {
      flex-shrink: 0;
    }
  }
`;

const _Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.primary400};
`;

const ContentPreWrap = styled.div`
  div {
    white-space: pre-wrap;
  }
`;

const _Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const _SubImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.large};
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
