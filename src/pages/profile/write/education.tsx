import { useEffect } from 'react';
import styled from 'styled-components';
import { DateInput } from '@scouit/design-system';
import { Input } from '@scouit/design-system';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { useProfileArray, useProfileUpdate } from '@/hooks/useProfile';
import { ProfileLabel } from '@/layouts/ProfileLabel';

const education = 'education';

const EducatePage = () => {
  const { profile, listChange, addContent } = useProfileArray(education);
  const edcuateUpdate = useProfileUpdate(education);
  useEffect(() => () => edcuateUpdate(), [edcuateUpdate]);
  return (
    <ProfileTapbarLayout title="학력" onClick={addContent}>
      {profile.education.map((e, idx) => (
        <>
          <ProfileLabel label="학교 이름">
            <Input
              label=""
              name="name"
              placeholder="학교 이름을 입력해 주세요"
              value={e.name}
              onChange={listChange(idx) as any}
            />
          </ProfileLabel>

          <ProfileLabel label="졸업일일">
            <DateInput
              name="startDate"
              onSubmitAtInput={() => {}}
              isDayInclude
              value={e.startDate}
              placeholder="날짜를 입력해 주세요"
            />
          </ProfileLabel>
        </>
      ))}
    </ProfileTapbarLayout>
  );
};

export const _Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.color.gray400};
`;

export default EducatePage;
