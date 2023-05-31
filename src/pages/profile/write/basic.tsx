import { ChangeEvent, useEffect, useState } from 'react';
import { Select, Textarea } from '@scouit/design-system';
import styled from 'styled-components';
import { ProfileTapbarLayout } from '@/layouts/tapbar/ProfileTapbar';
import { Input } from '@scouit/design-system';
import { useProfileUpdate } from '@/hooks/useProfile';
import { ProfileLabel } from '@/layouts/ProfileLabel';
import { RowGap } from '@/layouts/DirectionGap';
import { Back, MainProfile } from '@/assets';

const basic = 'basic';

interface TestType {
  name: string;
  role: string;
  simple: string;
  complex: string;
}

const BasicPage = () => {
  const basicUpdate = useProfileUpdate(basic);
  useEffect(() => () => basicUpdate(), [basicUpdate]);
  const [state, setState] = useState<TestType>({
    name: '조경현',
    role: '백엔드 엔지니어',
    simple: '안녕하세요 반갑습니다',
    complex: '저는 백엔드 조경현입니다.',
  });
  const handleChange = ({ value, name }: { value: string; name: string }) => {
    setState({ ...state, [name]: value });
  };
  return (
    <ProfileTapbarLayout title="기본 정보">
      <RowGap gap="30px">
        <label>
          <_Img src={MainProfile} />
          <input style={{ display: 'none' }} />
        </label>
        <_Content>
          <ProfileLabel label="이름">
            <Input
              label=""
              value={state.name}
              onChange={handleChange}
              name="name"
              placeholder="이름을 작성해 주세요"
            />
          </ProfileLabel>
          <ProfileLabel label="직군">
            <Select
              label=""
              name="role"
              placeholder="자신의 직군을 입력해 주세요"
              optionList={[
                '프론트엔드 엔지니어',
                '백엔드 엔지니어',
                '빅데이터 엔지니어',
                'iOS',
                '안드로이드',
                '자바 개발자',
                'React 개발자',
              ]}
              onChange={handleChange}
              value={state.role}
            />
          </ProfileLabel>
          <ProfileLabel label="간단소개" wrap>
            <Input
              width="100%"
              label=""
              value={state.simple}
              onChange={handleChange}
              name="simple"
              placeholder="간단한 자기소개를 작성해주세요"
            />
          </ProfileLabel>
          <ProfileLabel label="자기소개" wrap>
            <Textarea
              name="complex"
              label=""
              placeholder="자기를 소개해 주세요"
              value={state.complex}
              onChange={(e) => handleChange(e.target)}
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
