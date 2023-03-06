import styled from 'styled-components';
import { SelectFalse, SelectTrue } from '@/assets';
import { Text } from '../common/text';

interface PropsType {
  lists: string[];
  value: string;
  onClick: (value: string) => void;
}

export const SelectBox = ({ lists, value, onClick }: PropsType) => (
  <>
    {lists.map((e, idx) => (
      <_Wrapper onClick={() => onClick(e)}>
        {lists[idx] === value ? <SelectTrue /> : <SelectFalse />}
        <Text size="body1" color="gray700">
          {e}
        </Text>
      </_Wrapper>
    ))}
  </>
);

const _Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
`;
