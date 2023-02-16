import { Tapbar } from '@/components/write-profile';
import { TextArea } from '@/components/textarea';
import { ProfileWriteForm } from '@/components/profileWriteForm';
import { ColumnGap } from '@/layouts/DirectionGap';
import { useEffect } from 'react';
import { useBasic, useProfileUpdate } from '@/hooks/useProfile';
import { EditProfileWrapper } from '@/layouts/Wrapper/EditProfile';

export const BasicPage = () => {
  const { profile, handleOnChange } = useBasic();

  const { basicUpdate } = useProfileUpdate();
  useEffect(() => {
    return () => basicUpdate.mutate();
  }, []);
  return (
    <>
      <ProfileWriteForm title="소개">
        <ColumnGap gap="20px" margin="47px 0 0">
          <TextArea
            name="oneLineIntroduction"
            value={profile.basic.oneLineIntroduction}
            onChange={handleOnChange}
            label="한 줄 소개"
            placeholder="한 줄소개를 입력해주세요"
          />
          <TextArea
            name="aboutMe"
            value={profile.basic.aboutMe}
            onChange={handleOnChange}
            label="자기소개"
            placeholder="자기소개를 입력해주세요"
          />
        </ColumnGap>
      </ProfileWriteForm>
      <Tapbar />
    </>
  );
};
