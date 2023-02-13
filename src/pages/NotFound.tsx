import { Warning } from '@/assets';
import { Button } from '@/components/common/button';
import { Text } from '@/components/common/text';
import { ColumnCenterGap, ColumnGap } from '@/layouts/DirectionGap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PropsType {
  Error: {
    name: string;
    number: 401 | 403 | 404;
    content: string;
    image: string;
  };
}

export const NotFoundPage = ({
  Error: { name, number, content, image },
}: PropsType) => {
  return (
    <_Wrapper>
      <_Content>
        <ColumnGap gap="35px">
          <_TitleContent>
            <Text size="title2" color="gray6">
              {name}
            </Text>
            <_ErrorNumber>{number}</_ErrorNumber>
          </_TitleContent>
          <_ErrorContent size="title1" lineHeight="37.5px">
            {content}
            {`\n아래 버튼을 누르면 홈으로 돌아갈 수 있습니다.`}
          </_ErrorContent>
          <Link to="/">
            <Button>Home</Button>
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
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Content = styled.div`
  width: 416px;
  margin: auto;
`;

const _TitleContent = styled.div`
  width: 210px;
  border-bottom: 4px solid ${({ theme }) => theme.color.gray10};
`;

const _ErrorNumber = styled.div`
  font-size: 120px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const _ErrorContent = styled(Text)`
  white-space: pre-wrap;
`;

const _BackGroundImg = styled.img`
  width: 50%;
  object-fit: cover;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
