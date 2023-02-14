import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { ProfileWriteForm } from '@/components/profileWriteForm';
import { TextArea } from '@/components/textarea';
import { ColumnGap } from '@/layouts/DirectionGap';
import { useState } from 'react';
import styled from 'styled-components';

interface PropsType {
  name: string;
  placeholder: string;
}

export const Experience = ({ name, placeholder }: PropsType) => {
  return (
    <ProfileWriteForm title="업무 경험">
      <_ButtonWrapper>
        <Button kind="contained">추가하기</Button>
      </_ButtonWrapper>
      <_Content>
        {Array(10)
          .fill(0)
          .map((e) => (
            <_InputContent>
              <Input label={name} placeholder={name + '이름을 작성해 주세요'} />
              <TextArea
                label="내용"
                placeholder={placeholder + '내용을 작성해 주세요'}
              />
              <_Line />
            </_InputContent>
          ))}
      </_Content>
    </ProfileWriteForm>
  );
};

const _Content = styled.div`
  width: 488px;
`;

const _InputContent = styled.div`
  display: Flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 32px;
`;

const _Line = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.color.gray4};
`;

const _ButtonWrapper = styled.div`
  position: absolute;
  top: 71px;
  right: 70px;
`;
