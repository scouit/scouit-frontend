import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { TextListInput } from '@/components/common/input/TextList';
import { Line } from '@/components/common/line';
import { Header } from '@/components/header';
import { ProfileWriteBox } from '@/components/profileWriteForm';
import { Tapbar } from '@/components/write-profile';
import { lio } from '@/components/write-profile/constants';
import {
  useProfileArray,
  useProfileList,
  useProfileUpdate,
} from '@/hooks/useProfile';
import { EditProfileWrapper } from '@/layouts/Wrapper/EditProfile';

const experience = 'experience';

export const ExperiencePage = () => {
  const { profile, listChange } = useProfileArray(experience);
  const { addListArray, removeArrayList } = useProfileList(experience);
  const { workUpdate } = useProfileUpdate();
  useEffect(() => () => workUpdate.mutate(), []);
  return (
    <>
      <Header
        textList={lio}
        currentPage="업무 경험"
        gap="17px"
        isMedia
      />
      <ProfileWriteBox title="업무 경험" onClick={() => {}}>
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
      </ProfileWriteBox>
      <Tapbar currentPage="업무 경험" />
    </>
  );
};
