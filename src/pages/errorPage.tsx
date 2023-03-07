import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@/components/common/button';
import { Text } from '@/components/common/text';
import { ColumnGap } from '@/layouts/DirectionGap';
import { Error403, Error404 } from '@/assets';
import { media } from '@/styles/media';

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
    <_Wrapper>
      <_Content>
        <ColumnGap gap="1.4375rem">
          <Text size="title2" color="gray600">
            {name}
          </Text>
          <_ErrorNumber>{number}</_ErrorNumber>
          <Text size="title1">
            <ColumnGap gap="16px">
              <div>{content}</div>
              <div>아래 버튼을 누르면 홈으로 돌아갈 수 있습니다.</div>
            </ColumnGap>
          </Text>
          <Link to="/">
            <Button size="large">Home</Button>
          </Link>
        </ColumnGap>
      </_Content>
      <_BackGroundImg src={image} />
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Content = styled.div`
  padding: 0 1rem;
  margin: auto;
`;

const _ErrorNumber = styled.div`
  width: fit-content;
  font-size: 120px;
  font-weight: 900;
  padding-bottom: 30px;
  border-bottom: 4px solid ${({ theme }) => theme.color.gray900};
`;

const _BackGroundImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  ${media._1024('display:none;')}
`;

export default NotFoundPage;
