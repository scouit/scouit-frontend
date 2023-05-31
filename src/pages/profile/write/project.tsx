import { useEffect } from 'react';
import {
  DateInput,
  TextList,
  ImageInput,
  Input,
  Textarea,
  TagInput,
} from '@scouit/design-system';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { useProfileArray, useProfileUpdate } from '@/hooks/useProfile';
import { ProfileLabel } from '@/layouts/ProfileLabel';

const project = 'project';

const ProjectPage = () => {
  const { profile, setProfile, listChange } = useProfileArray(project);
  const projectUpdate = useProfileUpdate(project);
  useEffect(() => () => projectUpdate(), [projectUpdate]);
  return (
    <ProfileTapbarLayout title="프로젝트" onClick={() => {}}>
      {profile.project.map((e, idx) => {
        const arrayListChange = (value: string[]) => {
          setProfile({ ...e, works: value }, idx);
          console.log(value);
        };
        return (
          <>
            <ProfileLabel label="프로젝트 이름">
              <Input
                label=""
                name="name"
                value={e.name}
                onChange={listChange(idx) as any}
                placeholder="프로젝트 이름을 작성해 주세요"
              />
            </ProfileLabel>
            <ProfileLabel label="소개">
              <Textarea
                name="intro"
                label=""
                placeholder="프로젝트를 설명해 주세요"
                value={e.introduce}
                onChange={listChange(idx)}
              />
            </ProfileLabel>
            <ProfileLabel label="시작일">
              <DateInput
                name="startDate"
                onSubmitAtInput={() => {}}
                isDayInclude
                value={e.startDate}
                placeholder="날짜를 입력해 주세요"
              />
            </ProfileLabel>
            <ProfileLabel label="종료일">
              <DateInput
                name="endDate"
                onSubmitAtInput={() => {}}
                isDayInclude
                value={e.startDate}
                placeholder="날짜를 입력해 주세요"
              />
            </ProfileLabel>

            <ProfileLabel label="상세 업무">
              <TextList
                name="works"
                textList={e.works}
                onChange={arrayListChange}
                placeholder="프로젝트에서의 업무를 작성해 주세요"
              />
            </ProfileLabel>
            <ProfileLabel label="기술 스택">
              <TagInput
                onChange={() => {}}
                list={[]}
                placeholder="사용한 기술을 작성해 주세요"
              />
            </ProfileLabel>
            <ProfileLabel label="이미지" wrap>
              <ImageInput
                name="img"
                isLoading
                imageList={[]}
                label=""
                imgToUrl={() => new Promise(() => {})}
                onChange={() => {}}
              />
            </ProfileLabel>
          </>
        );
      })}
    </ProfileTapbarLayout>
  );
};

export default ProjectPage;
