import { SkillInput } from '@/components/common/input/Skill';
import { Header } from '@/components/header';
import { ProfileWriteBox } from '@/components/profileWriteForm';
import { Tapbar } from '@/components/write-profile';
import { lio } from '@/components/write-profile/constants';

export const TechPage = () => (
  <>
    <Header textList={lio} currentPage="기술스택" gap="17px" isMedia />
    <ProfileWriteBox title="기술스택">
      <SkillInput label="대표 스킬" placeholder="대표 스킬을 작성해 주세요" />
      <SkillInput label="일반 스킬" placeholder="일반 스킬을 작성해 주세요" />
    </ProfileWriteBox>
    <Tapbar currentPage="기술스택" />
  </>
);
