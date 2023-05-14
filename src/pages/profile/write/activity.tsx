import { useEffect } from 'react';
import { DateInput } from '@scouit/design-system';
import { Input } from '@scouit/design-system';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { Textarea } from '@scouit/design-system';
import { useProfileArray, useProfileUpdate } from '@/hooks/useProfile';
import { ProfileLabel } from '@/layouts/ProfileLabel';

const activity = 'activity';

const ActivePage = () => {
  const { profile, listChange } = useProfileArray(activity);
  const activeUpdate = useProfileUpdate(activity);
  useEffect(() => () => activeUpdate(), [activeUpdate]);
  return (
    <ProfileTapbarLayout title="활동" onClick={() => {}}>
      {profile &&
        profile.activity.map((e, idx) => (
          <>
            <ProfileLabel label="이름">
              <Input
                label=""
                value=""
                name={e.content}
                onChange={listChange(idx) as any}
                placeholder="참가한 활동의 이름을 적어주세요"
              />
            </ProfileLabel>
            <ProfileLabel label="이름">
              <Textarea
                label=""
                name="content"
                placeholder="참가한 활동의 내용을 적어주세요"
                value={e.content}
                onChange={listChange(idx)}
              />
            </ProfileLabel>
            <ProfileLabel label="이름">
              <DateInput
                name="startDay"
                onSubmitAtInput={() => {}}
                isDayInclude
                value={e.startDate}
                placeholder="날짜를 입력해 주세요"
              />
            </ProfileLabel>
          </>
        ))}
    </ProfileTapbarLayout>
  );
};

export default ActivePage;
