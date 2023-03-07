import { useEffect } from 'react';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { TextArea } from '@/components/textarea';
import { useProfileContent, useProfileUpdate } from '@/hooks/useProfile';
import { ColumnGap } from '@/layouts/DirectionGap';

const introduce = 'introduce';

const IntroducePage = () => {
  const { profile, handleOnChange } = useProfileContent(introduce);

  const introUpdate = useProfileUpdate(introduce);
  useEffect(() => () => introUpdate(), [introUpdate]);

  return (
    <ProfileTapbarLayout title="소개">
      <ColumnGap gap="20px" margin="47px 0 0">
        <TextArea
          name="oneLineIntroduction"
          value={profile.introduce.simple}
          onChange={handleOnChange}
          label="한 줄 소개"
          placeholder="한 줄소개를 입력해주세요"
        />
        <TextArea
          name="aboutMe"
          value={profile.introduce.complex}
          onChange={handleOnChange}
          label="자기소개"
          placeholder="자기소개를 입력해주세요"
        />
      </ColumnGap>
    </ProfileTapbarLayout>
  );
};

export default IntroducePage;
