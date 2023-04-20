import { useEffect } from 'react';
import { Input } from '@/components/common/input';
import { TextListInput } from '@/components/common/input/TextList';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { TextArea } from '@/components/textarea';
import { ImgLeader } from '@/components/common/input/FileLeader';
import {
  useProfileArray,
  useProfileList,
  useProfileUpdate,
} from '@/hooks/useProfile';
import { SkillInput } from '@/components/common/input/Skill';
import { _Line } from './education';
import { DateInput, TextList, ImageInput } from '@scouit/design-system';
import { ProfileLabel } from '@/layouts/ProfileLabel';

const project = 'project';

const ProjectPage = () => {
  const { profile, setProfile, listChange } = useProfileArray(project);
  const { addListArray, removeArrayList } = useProfileList(project);
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
                name="name"
                value={e.name}
                onChange={listChange(idx)}
                placeholder="프로젝트 이름을 작성해 주세요"
              />
            </ProfileLabel>
            <ProfileLabel label="소개">
              <TextArea
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
              <SkillInput placeholder="사용한 기술을 작성해 주세요" />
            </ProfileLabel>
            <ProfileLabel label="이미지">
              <ImageInput
                name="img"
                isLoading={true}
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
