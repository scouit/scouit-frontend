import { getUserProfile, ProfileType } from '@/apis/profile/getProfile';
import { patchUserProfile } from '@/apis/profile/PostProfile';
import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { ProfileWriteForm } from '@/components/profileWriteForm';
import { TextArea } from '@/components/textarea';
import { useForm } from '@/hooks/useForm';
import { ArrayEditType, useProfile } from '@/hooks/useProfile';
import { ColumnGap } from '@/layouts/DirectionGap';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components';
import { ContentType } from '../../../apis/profile/getProfile';

interface PropsType {
  name: 'project' | 'workExperience';
  role: string;
  placeholder: string;
  profile: ContentType[];
  addContent: (type: ArrayEditType) => void;
  arrayChange: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: ArrayEditType,
    index: number
  ) => void;
  projectUpdate?: () => void;
  workUpdate?: () => void;
}

export const Experience = ({
  name,
  role,
  placeholder,
  profile,
  addContent,
  arrayChange,
  projectUpdate,
  workUpdate,
}: PropsType) => {

  return (
    <ProfileWriteForm title="업무 경험">
      <_ButtonWrapper>
        <Button kind="contained" onClick={() => addContent(name)}>
          추가하기
        </Button>
      </_ButtonWrapper>
      <_Content>
        {profile.map((item, idx) => (
          <_InputContent>
            <Input
              name="name"
              value={item.name}
              onChange={(e) => arrayChange(e, name, idx)}
              label={role}
              placeholder={role + '이름을 작성해 주세요'}
            />
            <TextArea
              name="content"
              value={item.content}
              onChange={(e) => arrayChange(e, name, idx)}
              label="내용"
              placeholder={placeholder + '내용을 작성해 주세요'}
            />
            {profile.length - 1 !== idx && <_Line />}
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
