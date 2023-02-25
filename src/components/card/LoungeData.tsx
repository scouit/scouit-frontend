import styled from 'styled-components';
import { Back } from '@/assets';
import { ColumnGap } from '@/layouts/DirectionGap';
import { Text } from '../common/text';

interface PropsType {
  title: string;
  kinda: string;
  content: string;
  peoples: string;
}

export const LoungeData = ({
  title, kinda, content, peoples,
}: PropsType) => (
  <>
    <_Img src={Back} />
    <_Content>
      <Text size="title3" color="gray10">
        {title}
      </Text>
      {kinda && (
      <Text size="body2" color="gray10">
        {kinda}
      </Text>
      )}
      {content && (
      <Text size="body2" color="gray10">
        {content}
      </Text>
      )}
      <Text size="body2" color="gray10">
        {peoples}
      </Text>
    </_Content>
  </>
);

const _Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0;
  background-color: ${({ theme }) => theme.color.gray4};
`;

const _Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 1.5rem;
`;
