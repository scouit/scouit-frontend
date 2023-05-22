import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '@/components/common/text';
import { useGetCompanyByIdList } from '@/hooks/Query';
import { Columns, ColumnContent } from '@/layouts/Columns';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Back, BookMark, Company, Share } from '@/assets';
import { Button } from '@scouit/design-system';
import { ColumnEndGap, ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { companyDetail } from '@/_dummy/company';

const buttonList = ['주요 업무', '채용 정보', '계약 내용'];

const JobPostingDetailPage = () => {
  // const { id } = useParams();
  // const { data } = useGetCompanyByIdList(id);
  const {
    url,
    logo,
    name,
    content,
    location,
    tag,
    jobContent,
    condition,
    contract,
    date,
    contentImgs,
  } = companyDetail;
  return (
    <>
      <Header />
      <Columns>
        <ColumnContent justify="start">
          <_CompanyWrapper>
            <RowGap gap="20px">
              <_CompanyImg width={72} height={72} src={logo} />
              <_CompanyName>{name}</_CompanyName>
            </RowGap>
            <_CompanyIntroduce>{content}</_CompanyIntroduce>
          </_CompanyWrapper>
          <RowGap gap="10px" margin="0 0 40px">
            <_SideIntroduceBox>
              <_SideBoxContent>
                <div>
                  <Text color="gray0">Tag.</Text>
                  <_TagList>
                    {tag.map((tagText) => (
                      <_Tag color="gray0">{tagText}</_Tag>
                    ))}
                  </_TagList>
                </div>
              </_SideBoxContent>
            </_SideIntroduceBox>
            <_SideIntroduceBox>
              <_SideBoxContent>
                <div>
                  <Text color="gray0">location</Text>
                  <Text color="gray0" size="title2">
                    {location}
                  </Text>
                </div>
                <div>
                  <Text color="gray0">contact</Text>
                  <Text color="gray0" size="title2">
                    010-1241-1241
                  </Text>
                </div>
              </_SideBoxContent>
            </_SideIntroduceBox>
          </RowGap>
          <_SideImg src={url} />
        </ColumnContent>
      </Columns>
      <_DetailWrapper>
        <ColumnGap gap="47px">
          <RowGap gap="10px">
            {buttonList.map((list) => (
              <_Button kind="fill" height="40" radius="circle">
                {list}
              </_Button>
            ))}
          </RowGap>
          <Text size="heading2">{jobContent}</Text>
        </ColumnGap>
        <ColumnEndGap gap="46px">
          <Text size="title2">{date}</Text>
          <ColumnGap gap="22px" width="fit-content">
            <Text size="title1">Company.</Text>
            <_DetailImg src={contentImgs[0]} />
          </ColumnGap>
          <_Button kind="text" height="40" radius="circle">
            지원하기
          </_Button>
        </ColumnEndGap>
      </_DetailWrapper>
    </>
  );
};

const _CompanyWrapper = styled.div`
  width: 932px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow.md};
  margin-top: 50px;
`;

const _CompanyImg = styled.img`
  border-radius: 100px;
`;

const _CompanyName = styled.div`
  font-size: 48px;
  font-weight: bold;
`;

const _CompanyIntroduce = styled.div`
  border-top: dashed;
  padding: 20px 10px;
  ${({ theme }) => theme.font.title2};
`;

const _SideIntroduceBox = styled.div`
  width: 300px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.gray900};
  padding: 10px;
`;

const _SideBoxContent = styled.div`
  border: 1px solid: ${({ theme }) => theme.color.gray0};
  height: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.color.gray0 + '1A'};
`;

const _TagList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const _Tag = styled(Text)`
  padding: 3px 7px;
  background-color: ${({ theme }) => theme.color.gray900};
  border-radius: 8px;
`;

const _SideImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  width: 348px;
  height: 100%;
  object-fit: cover;
`;

const _DetailWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray800};
  display: flex;
  padding: 33px 35px 100px 88px;
  gap: 125px;
  justify-content: space-between;
  div {
    color: ${({ theme }) => theme.color.gray0};
  }
`;

const _DetailImg = styled.img`
  width: 500px;
  height: 250px;
  border-radius: 8px;
`;

const _Button = styled(Button)`
  width: fit-content;
  padding: 10px 24px;
`;

export default JobPostingDetailPage;
