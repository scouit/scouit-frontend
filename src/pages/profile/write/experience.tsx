import { useEffect } from 'react';
import { DateInput, TextList } from '@scouit/design-system';
import { Input } from '@scouit/design-system';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { useProfileArray, useProfileUpdate } from '@/hooks/useProfile';
import { ProfileLabel } from '@/layouts/ProfileLabel';

const experience = 'experience';

const ExperiencePage = () => {
  const { profile, setProfile, listChange } = useProfileArray(experience);
  const workUpdate = useProfileUpdate(experience);
  useEffect(() => () => workUpdate(), []);
  console.log(profile);
  return (
    <ProfileTapbarLayout title="업무 경험" onClick={() => {}}>
      {profile.experience.map((e, idx) => {
        const arrayListChange = (value: string[]) => {
          console.log(value);
          setProfile({ ...e, works: value }, idx);
        };
        return (
          <>
            <ProfileLabel label="이름" important>
              <Input
                label=""
                name="name"
                value={e.name}
                onChange={listChange(idx) as any}
                placeholder="회사 이름을 작성해 주세요"
              />
            </ProfileLabel>

            <ProfileLabel label="시작일" important>
              <DateInput
                name="startDate"
                onSubmitAtInput={() => {}}
                isDayInclude
                value={e.startDate}
                placeholder="날짜를 입력해 주세요"
              />
            </ProfileLabel>

            <ProfileLabel label="개발 직군">
              <Input
                label=""
                name="role"
                value={e.role}
                onChange={listChange(idx) as any}
                placeholder="직군을 입력해 주세요"
              />
            </ProfileLabel>
            <ProfileLabel label="상세 업무">
              <TextList
                textList={e.works}
                name="works"
                onChange={arrayListChange}
                placeholder="업무에 대해 상세하게 입력해 주세요"
              />
            </ProfileLabel>
          </>
        );
      })}
    </ProfileTapbarLayout>
  );
};

export default ExperiencePage;
