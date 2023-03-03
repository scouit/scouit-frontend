import { useEffect } from 'react';
import { ProfileTapbarLayout } from '@/layouts/ProfileTapbar';
import { TextArea } from '@/components/textarea';
import { useProfileContent, useProfileUpdate } from '@/hooks/useProfile';
import { ColumnGap } from '@/layouts/DirectionGap';

export const IntroducePage = () => {
  const {
    profile: { intro },
    handleOnChange,
  } = useProfileContent('intro');

  const introUpdate = useProfileUpdate('intro');
  useEffect(() => () => introUpdate(), [introUpdate]);

  return (
    <ProfileTapbarLayout title="소개">
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
    </ProfileTapbarLayout>
  );
};
