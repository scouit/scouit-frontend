import styled from 'styled-components';
import { Text } from '../text';
import { ChangeEvent, useState } from 'react';
import { EyeClose, EyeOpen } from '@/assets';

interface PropsType {
  type?: 'number' | 'password' | 'text';
  label: string;
  margin?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  showError?: boolean;
  error?: boolean;
  errorMes?: string;
}

export const Input = ({
  type = 'text',
  label,
  margin,
  placeholder,
  onChange,
  name,
  value,
  showError = false,
  error = null,
  errorMes = '',
}: PropsType) => {
  const [isError, setError] = useState<boolean | null>(null);
  return (
    <_Wrapper margin={margin}>
      <Text color="gray6" size="body2" margin="0 0 10px 0">
        {label}
      </Text>
      <_Content>
        <_Input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          isError={error === null || !showError ? null : isError}
          onBlur={() => setError(error)}
        />
        {showError && (
          <Text color="error" size="body4" margin="2px 0 0 16px">
            {errorMes}
          </Text>
        )}
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin: string }>`
  position: relative;
  margin: ${({ margin }) => margin && margin};
`;

const _Content = styled.div`
  height: 58px;
`;

const _Input = styled.input<{ isError: boolean | null }>`
  width: 500px;
  height: 46px;
  padding-left: 18px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid
    ${({ theme, isError }) =>
      theme.color[isError === null ? 'gray5' : isError ? 'error' : 'primary']};
  ${({ theme }) => theme.font.body1};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray5};
  }
  :focus {
    border: 1px solid
      ${({ theme, isError }) => theme.color[isError ? 'error' : 'primary']};
  }
`;