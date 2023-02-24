import { SelectFalse, SelectTrue } from '@/assets';
import { Icons } from 'react-toastify';
import styled from 'styled-components';
import { Text } from '../common/text';

interface PropsType {
  lists: string[];
  value: string;
  onClick: (value: string) => void;
}

export const SelectBox = ({ lists, value, onClick }: PropsType) => {
  return (
    <>
      {lists.map((e, idx) => (
        <_Wrapper onClick={() => onClick(e)}>
          {lists[idx] === value ? <SelectTrue /> : <SelectFalse />}
          <Text size="body1" color="gray7">
            {e}
          </Text>
        </_Wrapper>
      ))}
    </>
  );
};

const _Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 14px;
`;