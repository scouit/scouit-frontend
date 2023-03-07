import { useEffect } from 'react';
import styled from 'styled-components';
import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
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
          <_Line />
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

export const _Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.color.gray400};
`;

export default EducatePage;
