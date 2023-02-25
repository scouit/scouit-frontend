import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  NextJs, Profile, React, Typescript,
} from '@/assets';
import { ColumnCenterGap, RowCenterGap } from '@/layouts/DirectionGap';
import { media } from '@/styles/media';
import { Button } from '../common/button';
import { Text } from '../common/text';
import { ProfileData } from './ProfileData';
import { Tag } from './Tag';

interface PropsType {
  name: string;
  url?: string;
  isProfile: boolean;
  children: React.ReactNode;
}

export const dummy = {
  name: '조상현',
  profile: Profile,
  role: 'UI/UX 엔지니어',
  descript:
    '항상 더 좋은 프로덕트에 대해 고민하고결정해요. 단순한 의사결정이아닌 여러 답을 도출하고 그 중에 가장 올바른 결정을 합니다.',
  tag: ['사이드 프로젝트 모집 중', '커피챗 가능'],
};

export const ProfileCard = ({
  name, url, isProfile, children,
}: PropsType) => {
  const navigate = useNavigate();
  return (
    <_Wrapper>
      {children}
      <Button
        onClick={() => navigate('/developers/resume/a')}
        kind="contained"
        size="large"
        radius="0 0 0.5rem 0.5rem"
      >
        view
        {' '}
        {isProfile ? 'profile' : 'post'}
      </Button>
    </_Wrapper>
  );
};

const _Wrapper = styled.article`
  height: 21.25rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadow.surface};
  border-radius: 0.5rem;
  width: 100%;
  max-width: 23rem;
  ${media._1512('min-width: 19.3rem;')}
  ${media._1024('min-width: 20.25rem;')}
`;

const _TagContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
