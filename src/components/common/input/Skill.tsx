import ReactOutsizeClick from 'react-outside-click-handler';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { React, Search } from '@/assets';
import { ColumnGap } from '@/layouts/DirectionGap';
import { Text } from '../text';
import { SkillCard } from '@/components/card/Skill';

interface PropsType {
  name?: string;
  placeholder: string;
  margin?: string;
  label?: string;
  value?: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SkillInput = ({
  name,
  placeholder,
  margin,
  label,
  value = ['safaf'],
  onChange,
}: PropsType) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <_Wrapper margin={margin}>
      <Text size="body2" color="gray6" margin="0 0 11px 5px">
        {label}
      </Text>
      <_Content>
        {Array(3)
          .fill(0)
          .map(() => (
            <SkillCard name="React" color="gray10" />
          ))}
        <_InputWrapper>
          <Search />
          <_Input
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setModal(true)}
          />
        </_InputWrapper>
        {modal && (
          <ReactOutsizeClick onOutsideClick={() => setModal(false)}>
            <_Modal>
              {Array(3)
                .fill(1)
                .map(() => (
                  <ColumnGap gap="9.5px">
                    <_Button>React</_Button>
                  </ColumnGap>
                ))}
            </_Modal>
          </ReactOutsizeClick>
        )}
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin: string }>`
  position: relative;
  margin: ${({ margin }) => margin};
  width: 100%;
`;

const _Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 14px;
  column-gap: 14px;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.gray5};
  border-radius: 4px;
`;

const _Input = styled.input`
  ${({ theme }) => theme.font.body1};
  background-color: transparent;
  height: 46px;
  border: 0;
`;

const _InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const _Modal = styled.div`
  position: absolute;
  bottom: -138px;
  z-index: 2;
  left: 0;
  width: 100%;
  height: 130px;
  padding: 14px 13px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: ${({ theme }) => theme.shadow.modal};
`;

const _Button = styled.button`
  cursor: pointer;
  padding: 6px 16px;
  text-align: start;
  ${({ theme }) => theme.font.body1};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray1};
  :hover {
    background-color: ${({ theme }) => theme.color.gray4};
  }
`;
