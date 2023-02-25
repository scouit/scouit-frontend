import { useEffect } from 'react';
import { Header } from '@/components/header';
import { ProfileWriteBox } from '@/components/profileWriteForm';
import { TextArea } from '@/components/textarea';
import { Tapbar } from '@/components/write-profile';
import { lio } from '@/components/write-profile/constants';
import { useProfileContent, useProfileUpdate } from '@/hooks/useProfile';
import { ColumnGap } from '@/layouts/DirectionGap';

export const IntroducePage = () => {
  const {
    profile: { intro },
    handleOnChange,
  } = useProfileContent('intro');

  const { basicUpdate } = useProfileUpdate();
  useEffect(() => () => basicUpdate.mutate(), [basicUpdate]);

  return (
    <>
      <Header textList={lio} currentPage="소개" gap="17px" isMedia />
      <ProfileWriteBox title="소개">
        <ColumnGap gap="20px" margin="47px 0 0">
          <TextArea
            name="oneLineIntroduction"
            value={intro.oneLineIntroduction}
            onChange={handleOnChange}
            label="한 줄 소개"
            placeholder="한 줄소개를 입력해주세요"
          />
          <TextArea
            name="aboutMe"
            value={intro.aboutMe}
            onChange={handleOnChange}
            label="자기소개"
            placeholder="자기소개를 입력해주세요"
          />
        </ColumnGap>
      </ProfileWriteBox>
      <Tapbar currentPage="소개" />
    </>
  );
};
