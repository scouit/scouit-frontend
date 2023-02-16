import { RowEndGap } from '@/layouts/DirectionGap';
import styled from 'styled-components';
import { Text } from '../common/text';

interface PropsType {
  name: string;
  percent: number;
}

export const Progress = ({ name, percent }: PropsType) => {
  return (
    <_Wrapper>
      <RowEndGap gap="65px" margin="0 0 8px">
        <Text size="body1" color="gray10">
          {name}
        </Text>
        <Text size="body2" color="gray10">
          {percent}%
        </Text>
      </RowEndGap>
      <_Bar />
    </_Wrapper>
  );
};

const _Wrapper = styled.div``;

const _Bar = styled.div`
  width: 100%;
  height: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.gray4};
`;
