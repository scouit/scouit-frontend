import styled from 'styled-components';
import { Text } from '../text';
import { ChangeEvent, useState } from 'react';
import { EyeClose, EyeOpen } from '@/assets';

interface PropsType {
  label: string;
  margin?: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  error?: boolean;
  errorMes?: string;
}

/* type password 눈깔 추가 요망 */
export const PasswordInput = ({
  label,
  margin,
  placeholder,
  onChange,
  name,
  value,
  error = null,
  errorMes,
}: PropsType) => {
  const [isEyeOpen, setOpen] = useState<boolean>(false);
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
          type={isEyeOpen ? 'text' : 'password'}
          placeholder={placeholder}
          isError={error === null ? null : isError}
          onBlur={() => setError(error)}
        />
        {isError && (
          <Text color="error" size="body4" margin="2px 0 0 16px">
            {errorMes}
          </Text>
        )}
      </_Content>
      {
        <_EyeIcon onClick={() => setOpen(!isEyeOpen)}>
          {isEyeOpen ? <EyeOpen /> : <EyeClose />}
        </_EyeIcon>
      }
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
  border: 1px solid
    ${({ theme, isError }) =>
      theme.color[isError === null ? 'gray5' : isError ? 'error' : 'primary']};
  ${({ theme }) => theme.font.body1};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray5};
  }
`;

const _EyeIcon = styled.div`
  position: absolute;
  right: 15px;
  bottom: 20px;
`;
