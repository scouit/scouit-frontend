import styled from 'styled-components';
import { Text } from '../text';
import { ChangeEvent } from 'react';

interface PropsType {
  type?: 'number' | 'password' | 'text';
  label: string;
  margin?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}

/* type password 눈깔 추가 요망 */
export const Input = ({
  type = 'text',
  label,
  margin,
  placeholder,
  onChange,
  name,
  value,
}: PropsType) => {
  return (
    <_Wrapper margin={margin}>
      <Text color="gray6" size="body2" margin="0 0 10px 0">
        {label}
      </Text>
      <_Input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin: string }>`
  margin: ${({ margin }) => margin && margin};
`;

const _Input = styled.input`
  width: 500px;
  height: 46px;
  padding-left: 18px;
  border-radius: 4px;
  ${({ theme }) => theme.font.body1};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray5};
  }
`;
