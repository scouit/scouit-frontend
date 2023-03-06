import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ColumnGap } from '@/layouts/DirectionGap';
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
      <Text size="body2" color="gray600" margin="0 0 11px 5px">
        {label}
      </Text>
      <_InputWrapper>
        <_Input
          name={name}
          placeholder={placeholder}
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <Button
          onClick={() => {
            onSubmit(name, list);
            setList('');
          }}
        >
          추가
        </Button>
      </_InputWrapper>
      <ColumnGap gap="20px" margin="26px 0 0 20px">
        {value.map((ele, idx) => (
          <_ListText onClick={() => onListClick(name, idx)}>{ele}</_ListText>
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

const _InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const _Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.gray500};
  ${({ theme }) => theme.font.body1};

  width: 100%;
  height: 46px;
  padding: 0 50px 0 16px;
  border-radius: 4px;

  :focus {
    border: 2px solid ${({ theme }) => theme.color.primary500};
  }
`;

const _ListText = styled.li`
  cursor: pointer;

  ::marker {
    color: ${({ theme }) => theme.color.gray400};
  }

  :hover {
    ${({ theme }) => css`
      color: ${theme.color.error500};

      ::marker {
        color: ${theme.color.error500};
      }
    `}
  }
`;
