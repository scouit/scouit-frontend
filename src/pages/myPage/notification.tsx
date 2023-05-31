import { Back } from '@/assets';
import { Loud } from '@/assets/svgs/Loud';
import { Header } from '@/components/header';
import { MyPageItem } from '@/components/MyPageItem';
import { MyPageLayout } from '@/layouts/MyPage';
import { Text } from '@scouit/design-system';
import styled from 'styled-components';

const Notification = () => {
  return (
    <>
      <Header />
      <MyPageLayout>
        <_Title size="title2">받은 공지</_Title>
        <MyPageItem
          icon={<Loud size={36} />}
          title="서핏 서비스를 종료하도록 하겠습니다. 감사합니다."
        >
          <Text size="title2">서핏</Text>
        </MyPageItem>
      </MyPageLayout>
    </>
  );
};

const _Title = styled(Text)`
  margin-top: 20px;
`;

export default Notification;
