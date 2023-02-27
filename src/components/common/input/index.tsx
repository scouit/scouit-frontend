import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { EyeClose, EyeOpen } from '@/assets';
import { Text } from '../text';
import { useInversion } from '@/hooks/useInversion';

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
  const { state: isEyeOpen, invertState } = useInversion();
  return (
    <_Wrapper margin={margin}>
      <Text size="body2" color="gray6" margin="0 0 11px 5px">
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
      <_ErroWrapper>
        <Text height="12px" size="body4" color="error" margin="0 0 0 16px">
          {isError && errorMsg}
        </Text>
      </_ErroWrapper>
      {type === 'password' && (
        <_Eye onClick={invertState}>
          {isEyeOpen ? <EyeOpen /> : <EyeClose />}
        </_Eye>
      )}
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin: string }>`
  position: relative;
  margin: ${({ margin }) => margin};
  width: 100%;
`;

const _Input = styled.input<{ isError: boolean }>`
  border: 1px solid
    ${({ theme, isError }) => theme.color[isError ? 'error' : 'gray5']};
  ${({ theme }) => theme.font.body1};

  width: 100%;
  height: 46px;
  padding: 0 50px 0 16px;
  border-radius: 4px;

  :focus {
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
`;

const _ErroWrapper = styled.div`
  position: absolute;
`;

const _Eye = styled.div`
  cursor: pointer;
  position: absolute;
  top: 36px;
  right: 12px;
`;
