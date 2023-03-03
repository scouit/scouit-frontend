import { useEffect } from 'react';
import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { TextListInput } from '@/components/common/input/TextList';
import { Line } from '@/components/common/line';
import { ProfileTapbarLayout } from '@/layouts/ProfileTapbar';
import {
  useProfileArray,
  useProfileList,
  useProfileUpdate,
} from '@/hooks/useProfile';

const experience = 'experience';

export const ExperiencePage = () => {
  const { profile, listChange } = useProfileArray(experience);
  const { addListArray, removeArrayList } = useProfileList(experience);
  const workUpdate = useProfileUpdate('experience');
  useEffect(() => () => workUpdate(), [workUpdate]);
  return (
    <ProfileTapbarLayout title="업무 경험" onClick={() => {}}>
      {profile[experience].map((e, idx) => (
        <>
          <Line height="3px" color="gray4" />
          <Input
            name="name"
            value={e.name}
            onChange={listChange(idx)}
            label="회사 이름"
            placeholder="회사 이름을 작성해 주세요"
          />
          <DateInput value={e.time} />
          <Input
            name="role"
            value={e.role}
            onChange={listChange(idx)}
            label="직군"
            placeholder="직군을 입력해 주세요"
          />
          <TextListInput
            name="works"
            onSubmit={addListArray(idx)}
            onListClick={removeArrayList(idx)}
            value={e.works}
            label="상세 업무"
            placeholder="업무에 대해 상세하게 입력해 주세요"
          />
        </>
      ))}
    </ProfileTapbarLayout>
  );
};
