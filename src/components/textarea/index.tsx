import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Text } from '../common/text';

interface PropsType {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  placeholder: string;
}

export const TextArea = ({
  name,
  value,
  onChange,
  label,
  placeholder,
}: PropsType) => {
  return (
    <_Wrapper>
      <Text margin="0 0 24px 0" color="gray6" size="body2">
        {label}
      </Text>
      <_TextArea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Text align="end" margin="4px 0 0 0" size="body4">
        (0 / 2000)
      </Text>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100%;
`;

const _TextArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 194px;
  border-radius: 8px;
  padding: 18px;
  background-color: ${({ theme }) => theme.color.gray2};
  font-size: 13px;
`;
