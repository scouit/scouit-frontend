import styled from 'styled-components';
import { Line } from '@/components/common/line';
import { Text } from '@/components/common/text';
import { media } from '@/styles/media';
import { ColumnGap } from './DirectionGap';

interface PropsType {
  title: string;
  number: number;
  image: string;
  children: React.ReactNode;
}

export const ErrorLayout = ({ title, number, image, children }: PropsType) => (
  <_Wrapper>
    <_Content>
      <ColumnGap gap="1.4375rem">
        <Text size="title2" color="gray600">
          {title}
        </Text>
        <_ErrorNumber>{number}</_ErrorNumber>
        <Line color="gray900" width="208px" height="4px" />
        {children}
      </ColumnGap>
    </_Content>
    <_BackGroundImg src={image} />
  </_Wrapper>
);

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
  font-size: 120px;
  font-weight: 900;
  margin-bottom: 30px;
`;

const _BackGroundImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  ${media._1024('display:none;')}
`;
