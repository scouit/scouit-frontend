import { Back } from '@/assets';
import { Header } from '@/components/header';
import { MyPageItem } from '@/components/MyPageItem';
import { MyPageLayout } from '@/layouts/MyPage';
import { Text } from '@scouit/design-system';
import styled from 'styled-components';

const Application = () => {
  return (
    <>
      <Header />
      <MyPageLayout activeCount>
        <Text size="title2">현황</Text>
        <MyPageItem icon={Back} title="기모씨">
          <Text size="title2">상태</Text>
          <Text size="title2" color="error500">
            취소 버튼
          </Text>
        </MyPageItem>
      </MyPageLayout>
    </>
  );
};

const _Wrapper = styled.div``;

export default Application;
