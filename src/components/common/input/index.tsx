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
  const [isEyeOpen, setOpen] = useState<boolean>(false);
  const isPassWord = type === 'password';
  return (
    <_Wrapper margin={margin}>
      <Text color="gray6" size="body2" margin="0 0 10px 0">
        {label}
      </Text>
      <_Input
        name={name}
        value={value}
        onChange={onChange}
        type={isPassWord && (isEyeOpen ? 'text' : 'password')}
        placeholder={placeholder}
      />
      {
        <_EyeIcon onClick={() => setOpen(!isEyeOpen)}>
          {isPassWord && (isEyeOpen ? <EyeOpen /> : <EyeClose />)}
        </_EyeIcon>
      }
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin: string }>`
  position: relative;
  margin: ${({ margin }) => margin && margin};
`;

const _Input = styled.input`
  width: 500px;
  height: 46px;
  padding-left: 18px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray5};
  ${({ theme }) => theme.font.body1};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray5};
  }
`;

const _EyeIcon = styled.div`
  position: absolute;
  right: 15px;
  bottom: 12px;
`;
