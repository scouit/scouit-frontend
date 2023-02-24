import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { TextListInput } from '@/components/common/input/TextList';
import { ProfileWriteBox } from '@/components/profileWriteForm';
import { TextArea } from '@/components/textarea';
import { Tapbar } from '@/components/write-profile';
import { ImgLeader } from '@/components/common/input/FileLeader';
import {
  useProfileArray,
  useProfileContent,
  useProfileList,
  useProfileUpdate,
} from '@/hooks/useProfile';
import { EditProfileWrapper } from '@/layouts/Wrapper/EditProfile';
import { useEffect } from 'react';
import { SkillInput } from '@/components/common/input/Skill';
import { Line } from '@/components/common/line';
import { Header } from '@/components/header';
import { lio } from '@/components/write-profile/constants';

const project = 'project';

export const ProjectPage = () => {
  const { profile, listChange } = useProfileArray(project);
  const { addListArray, removeArrayList } = useProfileList(project);
  const { projectUpdate } = useProfileUpdate();
  useEffect(() => {
    return () => projectUpdate.mutate();
  }, []);
  return (
    <>
      <Header textList={lio} currentPage="프로젝트" gap="17px" isMedia={true} />
      <ProfileWriteBox title="프로젝트" onClick={() => {}}>
        {profile[project].map((e, idx) => (
          <>
            <Line height="3px" color="gray4" />
            <Input
              name="name"
              value={e.name}
              onChange={listChange(idx)}
              label="프로젝트 이름"
              placeholder="프로젝트 이름을 작성해 주세요"
            />
            <TextArea
              name="intro"
              label="소개"
              placeholder="프로젝트를 설명해 주세요"
              value={e.intro}
              onChange={listChange(idx)}
            />
            <DateInput value={e.time} />
            <TextListInput
              name="works"
              value={e.works}
              onSubmit={addListArray(idx)}
              onListClick={removeArrayList(idx)}
              label="상세 업무"
              placeholder="프로젝트에서의 업무를 작성해 주세요"
            />
            <SkillInput
              label="기술 스택"
              placeholder="사용한 기술을 작성해 주세요"
            />
            <ImgLeader value={[]} listArrayChange={() => {}} name="img" />
          </>
        ))}
      </ProfileWriteBox>
      <Tapbar currentPage="프로젝트" />
    </>
  );
};