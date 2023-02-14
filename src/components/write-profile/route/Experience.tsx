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

export const Experience = () => {
  console.log(<_Content gap="10px">a</_Content>);
  return (
    <ProfileWriteForm title="업무 경험">
      <_Content gap="20px" margin="47px 0 0">
        <>
          <Input placeholder="" />
          <TextArea label="한 줄 소개" placeholder="한 줄소개를 입력해주세요" />
        </>
      </_Content>
    </ProfileWriteForm>
  );
};

const _Content = styled(ColumnGap)`
  width: 488px;
`;
