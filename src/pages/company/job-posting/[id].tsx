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

const buttonList = ['주요 업무', '채용 정보', '계약 내용'];

const JobPostingDetailPage = () => {
  const { id } = useParams();
  const { data } = useGetCompanyByIdList(id);
  return (
    <>
      <Header />
      <Columns>
        <ColumnContent justify="start">
          {/* {data && (
            <div>
              <Text size="heading1">FrontEnd Developer</Text>
              <>{data.career}</>
            </div>
          )} */}
          <_CompanyWrapper>
            <RowGap gap="20px">
              <_CompanyImg width={72} height={72} src={Back} />
              <_CompanyName>서핏</_CompanyName>
            </RowGap>
            <_CompanyIntroduce>어쩌구 저쩌구</_CompanyIntroduce>
          </_CompanyWrapper>
          <RowGap gap="10px" margin="0 0 40px">
            <_SideIntroduceBox>
              <_SideBoxContent>
                <div>
                  <Text color="gray0">Tag.</Text>
                  <_TagList>
                    {Array(5)
                      .fill(0)
                      .map(() => (
                        <_Tag color="gray0">태그</_Tag>
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
                    대전 유성구
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
          <_SideImg src={Back} />
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
          <Text size="heading2">
            서핏에 오게되시면 회사 시스템에 적응하실 수 있도록 현장체험
            프로그램을 진행하고 있습니다. 어디서 어떤 분들이 일하고 있는지
            알아야, 필요할 때 찾아갈 수 있으니까요 ✨ IOS 분야는 저희 서핏
            서비스 구축 및 유지보수 뿐만 아니라 회사내 복지 서비스 프로젝트 참여
            및 문서 정리 등 다양한 활동을 하게 됩니다. 저희가 필요하다 생각되는
            MVVM에 대해 파트너 분들과 소통하고 토론합니다. IOS 시니어 분들과
            같이 협업하며 프로젝트를 진행해요! 앞으로도 잘 부탁해요 👏
          </Text>
        </ColumnGap>
        <ColumnEndGap gap="46px">
          <Text size="title2">모집기간 </Text>
          <ColumnGap gap="22px" width="fit-content">
            <Text size="title1">Company.</Text>
            <_DetailImg src={Back} />
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
