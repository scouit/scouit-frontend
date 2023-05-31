import { Back } from '@/assets';
import { Header } from '@/components/header';
import { MyPageItem } from '@/components/MyPageItem';
import { MyPageLayout } from '@/layouts/MyPage';
import { Text } from '@scouit/design-system';
import styled from 'styled-components';

const Suggestion = () => {
  return (
    <>
      <Header />
      <MyPageLayout>
        <_Title size="title2">제한 상황</_Title>
        <MyPageItem icon={Back} title="기모씨">
          <Text size="title2">지원하기</Text>
          <Text size="title2" color="error500">
            삭제
          </Text>
        </MyPageItem>
      </MyPageLayout>
    </>
  );
};

const _Title = styled(Text)`
  margin-top: 20px;
`;

export default Suggestion;
