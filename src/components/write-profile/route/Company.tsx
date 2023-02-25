import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useMutation, useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getUserProfile, ProfileType } from '@/apis/profile/getProfile';
import { patchUserProfile } from '@/apis/profile/PostProfile';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { ProfileWriteForm } from '@/components/profileWriteForm';
import { TextArea } from '@/components/textarea';
import { useForm } from '@/hooks/useForm';
import { ArrayEditType, useProfile } from '@/hooks/useProfile';
import { ColumnGap } from '@/layouts/DirectionGap';
import { atomProfile } from '@/store/write';
import { ContentType } from '../../../apis/profile/getProfile';

interface PropsType {
  title: string;
  name: 'project' | 'workExperience';
  role: string;
  placeholder: string;
}

export const Company = ({
  title, name, role, placeholder,
}: PropsType) => {
  const { profile, arrayChange, addContent } = useProfile(name);
  console.log(profile);
  return (
    <ProfileWriteForm title={title}>
      <_ButtonWrapper>
        <Button kind="contained" onClick={addContent}>
          추가하기
        </Button>
      </_ButtonWrapper>
      <_Content>
        {profile[name].map((item, idx) => (
          <_InputContent key={idx}>
            <Input
              name="name"
              value={item.name}
              onChange={(e) => arrayChange(e, idx)}
              label={role}
              placeholder={`${role}이름을 작성해 주세요`}
            />
            <TextArea
              name="content"
              value={item.content}
              onChange={(e) => arrayChange(e, idx)}
              label="내용"
              placeholder={`${placeholder}내용을 작성해 주세요`}
            />
            {profile[name].length - 1 !== idx && <_Line />}
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
