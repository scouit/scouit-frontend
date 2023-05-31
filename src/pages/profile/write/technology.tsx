import { SkillInput } from '@/components/common/input/Skill';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { TagInput } from '@scouit/design-system';

const TechPage = () => (
  <ProfileTapbarLayout title="기술스택">
    <TagInput
      onChange={() => {}}
      list={[]}
      label="대표 스킬"
      placeholder="대표 스킬을 작성해 주세요"
    />
    <TagInput
      onChange={() => {}}
      list={[]}
      label="일반 스킬"
      placeholder="일반 스킬을 작성해 주세요"
    />
  </ProfileTapbarLayout>
);

export default TechPage;
