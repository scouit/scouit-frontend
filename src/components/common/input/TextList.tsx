import { EyeClose, EyeOpen } from '@/assets';
import { ColumnGap, RowGap } from '@/layouts/DirectionGap';
import { ChangeEvent, FormEvent, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../button';
import { Text } from '../text';

interface PropsType {
  name?: string;
  placeholder: string;
  margin?: string;
  label?: string;
  value?: string[];
  onSubmit?: (name: string, value: string) => void;
  onListClick?: (name: string, listIndex: number) => void;
}

export const TextListInput = ({
  name,
  placeholder,
  margin,
  label,
  value = [],
  onSubmit,
  onListClick,
}: PropsType) => {
  const [list, setList] = useState<string>('');
  return (
    <_Wrapper margin={margin}>
      <Text size="body2" color="gray6" margin="0 0 11px 5px">
        {label}
      </Text>
      <_Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(onSubmit)
          onSubmit(name, list);
          setList('');
        }}
      >
        <_Input
          name={name}
          placeholder={placeholder}
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <Button>추가</Button>
      </_Form>
      <ColumnGap gap="20px" margin="26px 0 0 20px">
        {value.map((ele, idx) => (
          <_ListWrapper onClick={() => onListClick(name, idx)}>
            <_ListText>{ele}</_ListText>
          </_ListWrapper>
        ))}
      </ColumnGap>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin: string }>`
  position: relative;
  margin: ${({ margin }) => margin};
  width: 100%;
`;

const _Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const _Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.gray5};
  ${({ theme }) => theme.font.body1};
  width: 100%;
  height: 46px;
  padding: 0 50px 0 16px;
  border-radius: 4px;
  :focus {
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
`;

const _ListText = styled.li`
  cursor: pointer;
  ::marker {
    width: 7px;
    height: 7px;
    color: ${({ theme }) => theme.color.gray4};
  }
  :hover {
    ${({ theme }) =>
      css`
        color: ${theme.color.error};
        ::marker {
          color: ${theme.color.error};
        }
      `}
  }
`;

const _ListWrapper = styled.ul`
  list-style-type: disc;
  align-items: center;
  padding-left: 18px;
  gap: 15px;
`;
