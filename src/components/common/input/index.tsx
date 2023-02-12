import { EyeClose, EyeOpen } from '@/assets';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Text } from '../text';

interface PropsType {
  type?: 'text' | 'password';
  name?: string;
  placeholder: string;
  margin?: string;
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type = 'text',
  name,
  placeholder,
  margin,
  label,
  isError = false,
  errorMsg = 'error message',
  value,
  onChange,
}: PropsType) => {
  const [isEyeOpen, setEyeOpen] = useState<boolean>(false);
  return (
    <_Wrapper margin={margin}>
      <Text size="body2" color="gray6" margin="0 0 11px">
        {label}
      </Text>
      <_Input
        type={isEyeOpen ? 'text' : type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isError={isError}
      />
      <Text size="body4" color="error" margin="0 0 0 16px">
        {isError && errorMsg}
      </Text>
      {type === 'password' && (
        <_Eye onClick={() => setEyeOpen(!isEyeOpen)}>
          {isEyeOpen ? <EyeOpen /> : <EyeClose />}
        </_Eye>
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin: string }>`
  position: relative;
  margin: ${({ margin }) => margin};
`;

const _Input = styled.input<{ isError: boolean }>`
  border: 0;
  outline: 1px solid
    ${({ theme, isError }) => theme.color[isError ? 'error' : 'gray5']};
  ${({ theme }) => theme.font.body1};
  width: 100%;
  height: 46px;
  padding-left: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  :focus {
    outline: 2px solid ${({ theme }) => theme.color.primary};
  }
`;

const _Eye = styled.div`
  position: absolute;
  top: 36px;
  right: 12px;
`;
