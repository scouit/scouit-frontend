import styled from 'styled-components';
import { Button, Text } from '@scouit/design-system';
import { cardDummy } from '@/_dummy/profile';
import { ProfileSide } from '@/assets';
import { Header } from '@/components/header';
import { ResumeCard } from './ResumeCard';
import { Link } from 'react-router-dom';
import { ColumnCenterGap, ColumnGap } from '@/layouts/DirectionGap';

const HomePage = () => (
  <>
    <Header />
    <_Wrapper>
      <_ResumeCardWrapper>
        {cardDummy.map(({ url, name, description, role }) => (
          <Link to="/developers/resume/yourid">
            <ResumeCard
              url={url}
              name={name}
              description={description}
              role={role}
            />
          </Link>
        ))}
      </_ResumeCardWrapper>
      <_SideController>
        {localStorage.getItem('access_token') ? (
          <ColumnGap gap="20px" padding="40px 20px">
            <_Profile>
              <img
                width={60}
                height={60}
                src={ProfileSide}
                alt="프로필 사이드이미지"
              />
              <div>
                <_Name as="div">조경현</_Name>
                <Text size="body2" as="div">
                  UI / UX 디자이너
                </Text>
              </div>
            </_Profile>
            <Text size="body4" as="div">
              항상 더 좋은 프로덕트에 대해 고민하고결정해요. 단순한 의사결정이
              아닌 여러 답을 도출하고 그 중에 가장 올바른 결정을 합니다.
            </Text>
          </ColumnGap>
        ) : (
          <ColumnCenterGap gap="20px" padding="40px 20px">
            <Text>로그인 하셨나요?</Text>
            <Link to="/auth/sign-in">
              <Text color="primary500">로그인 하기</Text>
            </Link>
          </ColumnCenterGap>
        )}
      </_SideController>
    </_Wrapper>
  </>
);

const _Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const _Name = styled(Text)`
  margin-bottom: 2px;
`;

const _ResumeCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const _Wrapper = styled.div`
  width: 1124px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 200vh;
  gap: 24px;
  margin-top: 100px;
`;

const _SideController = styled.div`
  width: 100%;
  height: 372px;
  position: sticky;
  top: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 2px solid ${({ theme }) => theme.color.gray200};
`;

export default HomePage;
