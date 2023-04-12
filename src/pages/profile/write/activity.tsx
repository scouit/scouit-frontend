import { useEffect } from 'react';
import { Input } from '@/components/common/input';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { TextArea } from '@/components/textarea';
import { useProfileArray, useProfileUpdate } from '@/hooks/useProfile';
import { _Line } from './education';
import { DateInput } from '@scouit/design-system';

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
            <_Line />
            <Input
              name={e.content}
              onChange={listChange(idx)}
              label="이름"
              placeholder="참가한 활동의 이름을 적어주세요"
            />
            <TextArea
              label="내용"
              name="content"
              placeholder="참가한 활동의 내용을 적어주세요"
              value={e.content}
              onChange={listChange(idx)}
            />
            <DateInput
              label="앙기모띠"
              onSubmitAtInput={() => {}}
              isDayInclude
              value={e.startDate}
              placeholder="날짜를 입력해 주세요"
            />
          </>
        ))}
    </ProfileTapbarLayout>
  );
};

export default ActivePage;
