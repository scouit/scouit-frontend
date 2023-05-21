import { useEffect } from 'react';
import { Select, Textarea } from '@scouit/design-system';
import styled from 'styled-components';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { Input } from '@scouit/design-system';
import { useProfileUpdate } from '@/hooks/useProfile';
import { ProfileLabel } from '@/layouts/ProfileLabel';
import { RowGap } from '@/layouts/DirectionGap';
import { Back } from '@/assets';

const basic = 'basic';

const BasicPage = () => {
  const basicUpdate = useProfileUpdate(basic);
  useEffect(() => () => basicUpdate(), [basicUpdate]);
  return (
    <ProfileTapbarLayout title="기본 정보">
      <RowGap gap="30px">
        <label>
          <_Img src={Back} />
          <input style={{ display: 'none' }} />
        </label>
        <_Content>
          <ProfileLabel label="이름">
            <Input
              label=""
              value=""
              onChange={() => {}}
              name="gas"
              placeholder=""
            />
          </ProfileLabel>
          <ProfileLabel label="직군">
            <Select
              label=""
              name=""
              placeholder=""
              optionList={['앙기모띠']}
              value=""
            />
          </ProfileLabel>
          <ProfileLabel label="간단소개" wrap>
            <Input
              width="100%"
              label=""
              value=""
              onChange={() => {}}
              name="gas"
              placeholder=""
            />
          </ProfileLabel>
          <ProfileLabel label="자기소개" wrap>
            <Textarea
              name=""
              label=""
              placeholder=""
              value=""
              onChange={() => {}}
            />
          </ProfileLabel>
        </_Content>
      </RowGap>
    </ProfileTapbarLayout>
  );
};

const _Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const _Img = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export default BasicPage;
