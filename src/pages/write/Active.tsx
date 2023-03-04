import { useEffect } from 'react';
import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { ProfileTapbarLayout } from '@/layouts/ProfileTapbar';
import { TextArea } from '@/components/textarea';
import { useProfileArray, useProfileUpdate } from '@/hooks/useProfile';

const active = 'active';

export const ActivePage = () => {
  const { profile, listChange } = useProfileArray(active);
  const activeUpdate = useProfileUpdate(active);
  useEffect(() => () => activeUpdate(), [activeUpdate]);
  return (
    <ProfileTapbarLayout title="활동" onClick={() => {}}>
      {profile.active.map((e, idx) => (
        <>
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
          <DateInput value={e.time} gap="46px" />
        </>
      ))}
    </ProfileTapbarLayout>
  );
};
