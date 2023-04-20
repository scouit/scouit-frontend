import { useEffect } from 'react';
import { Input } from '@/components/common/input';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { TextArea } from '@/components/textarea';
import { useProfileArray, useProfileUpdate } from '@/hooks/useProfile';
import { _Line } from './education';
import { DateInput } from '@scouit/design-system';
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
                name={e.content}
                onChange={listChange(idx)}
                placeholder="참가한 활동의 이름을 적어주세요"
              />
            </ProfileLabel>
            <ProfileLabel label="이름">
              <TextArea
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
