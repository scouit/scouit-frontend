import { Warning } from '@/assets';
import { Button } from '@/components/common/button';
import { Text } from '@/components/common/text';

export const NotFoundPage = () => {
  return (
    <div>
      <Warning width={80} height={80} />
      <Text size="heading1" color="errorDarken1">
        404 NOT FOUND
      </Text>
      <Text size="title3">
        해당 페이지에 대한 접근권한이 없거나 페이지가 존재하지 않습니다. URL
        주소를 다시 한번 확인해 주세요.
      </Text>
      <Button>이전 화면</Button>
    </div>
  );
};
