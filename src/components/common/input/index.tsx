import styled from 'styled-components';
import { Text } from '../text';
import { ChangeEvent, useState } from 'react';
import { EyeClose, EyeOpen } from '@/assets';

interface PropsType {
  type?: 'number' | 'password' | 'text';
  label: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  formError?: boolean | null;
  errorMsg?: string;
}

type InputType = PropsType & { margin?: string };

const BaseInput = ({
  type = 'text',
  label,
  placeholder,
  onChange,
  name,
  value,
  formError = null,
  errorMsg = '',
}: InputType) => {
  return (
    <>
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
          formError={formError === null ? null : formError}
        />
        {formError && (
          <Text color="error" size="body4" margin="2px 0 0 16px">
            {errorMsg}
          </Text>
        )}
      </_Content>
    </>
  );
};

export const Input = (props: InputType) => {
  return (
    <_Wrapper margin={props.margin}>
      <BaseInput {...props} />
    </_Wrapper>
  );
};

export const PasswordInput = (props: InputType) => {
  const [isEyeOpen, setOpen] = useState<boolean>(false);
  return (
    <_Wrapper margin={props.margin}>
      <BaseInput {...props} />
      <_Eye onClick={() => setOpen(!isEyeOpen)}>
        {isEyeOpen ? <EyeOpen /> : <EyeClose />}
      </_Eye>
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

export const _Input = styled.input<{ formError: boolean | null }>`
  width: 500px;
  height: 46px;
  padding-left: 18px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid
    ${({ theme, formError }) =>
      theme.color[
        formError === null ? 'gray5' : formError ? 'error' : 'primary'
      ]};
  ${({ theme }) => theme.font.body1};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray5};
  }
  :focus {
    border: 1px solid
      ${({ theme, formError }) => theme.color[formError ? 'error' : 'primary']};
  }
`;

const _Eye = styled.div`
  position: absolute;
  right: 15px;
  bottom: 20px;
  cursor: pointer;
`;
