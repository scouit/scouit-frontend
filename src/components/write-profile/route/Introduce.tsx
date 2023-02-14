import { ProfileWriteForm } from '@/components/profileWriteForm';
import { TextArea } from '@/components/textarea';
import { ColumnGap } from '@/layouts/DirectionGap';
import {
  ProfileType,
  IntroType,
  getUserProfile,
  BasicType,
} from '@/apis/profile/getProfile';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useForm } from '@/hooks/useForm';
import { useMutation, useQuery } from 'react-query';
import { patchUserProfile } from '@/apis/profile/PostProfile';

interface PropsType {
  text: IntroType;
  handleOnChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  basicUpdate: () => void;
}

export const Introduce = ({ text, handleOnChange, basicUpdate }: PropsType) => {
  return (
    <ProfileWriteForm title="소개">
      <ColumnGap gap="20px" margin="47px 0 0">
        <TextArea
          name="oneLineIntroduction"
          value={text.oneLineIntroduction}
          onChange={handleOnChange}
          label="한 줄 소개"
          placeholder="한 줄소개를 입력해주세요"
        />
        <TextArea
          name="aboutMe"
          value={text.aboutMe}
          onChange={handleOnChange}
          label="자기소개"
          placeholder="자기소개를 입력해주세요"
        />
      </ColumnGap>
    </ProfileWriteForm>
  );
};
