import { useEffect } from 'react';
import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { Line } from '@/components/common/line';
import { ProfileTapbarLayout } from '@/layouts/ProfileTapbar';
import { useProfileArray, useProfileUpdate } from '@/hooks/useProfile';

const education = 'education';

const EducatePage = () => {
  const { profile, listChange, addContent } = useProfileArray(education);
  const edcuateUpdate = useProfileUpdate(education);
  useEffect(() => () => edcuateUpdate(), [edcuateUpdate]);
  return (
    <ProfileTapbarLayout title="학력" onClick={addContent}>
      {profile.education.map((e, idx) => (
        <>
          <Line height="3px" color="gray400" />
          <Input
            name="name"
            label="학교 이름"
            placeholder="학교 이름을 입력해 주세요"
            value={e.name}
            onChange={listChange(idx)}
          />
          <DateInput value={e.period} />
        </>
      ))}
    </ProfileTapbarLayout>
  );
};

export default EducatePage;
