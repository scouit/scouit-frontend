import { Link } from 'react-router-dom';
import { Button } from '@/components/common/button';
import { Text } from '@/components/common/text';
import { ColumnGap } from '@/layouts/DirectionGap';
import { ErrorLayout } from '@/layouts/ErrorLayout';
import { Error403, Error404 } from '@/assets';

const ErrorState = {
  notFound: {
    name: 'Not Found',
    content: '이런, 페이지를 찾을 수 없습니다.',
    image: Error404,
    number: 404,
  },
  forbidden: {
    name: 'Forbidden',
    content: '이 페이지에 대한 접근권한이 존재하지 않습니다.',
    image: Error403,
    number: 403,
  },
};

interface PropsType {
  type: 'notFound' | 'forbidden';
}

const NotFoundPage = ({ type }: PropsType) => {
  const { name, content, image, number } = ErrorState[type];
  return (
    <ErrorLayout title={name} number={number} image={image}>
      <Text size="title1">
        <ColumnGap gap="16px">
          <div>{content}</div>
          <div>아래 버튼을 누르면 홈으로 돌아갈 수 있습니다.</div>
        </ColumnGap>
      </Text>
      <Link to="/">
        <Button size="large">Home</Button>
      </Link>
    </ErrorLayout>
  );
};

export default NotFoundPage;
