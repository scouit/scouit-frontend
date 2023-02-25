import { Link } from 'react-router-dom';
import { Button } from '@/components/common/button';
import { Text } from '@/components/common/text';
import { ColumnGap } from '@/layouts/DirectionGap';
import { ErrorLayout } from '@/layouts/ErrorLayout';

interface PropsType {
  Error: {
    name: string;
    number: 401 | 403 | 404;
    content: string;
    image: string;
  };
}

export const NotFoundPage = ({
  Error: {
    name, number, content, image,
  },
}: PropsType) => (
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
