import { ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { media } from '@scouit/design-system';
import { ProfileType } from '@/apis/profile/type';
import { getUserProfile } from '@/apis/profile/getProfile';
import { atomProfile } from '@/store/write';
import { Columns, ColumnContent } from '../Columns';

interface PropsType {
  children: ReactNode;
}

const initState: ProfileType = {
  basic: {
    role: '',
  },
  introduce: {
    simple: '',
    complex: '',
  },
  project: [
    {
      name: '',
      introduce: '',
      period: { start: '', end: '' },
      url: '',
      works: [],
      skills: [],
      img: [],
    },
  ],
  experience: [
    { name: '', period: { start: '', end: '' }, role: '', works: [] },
  ],
  technology: { main: [], sub: [] },
  activity: [{ name: '', content: '', period: { start: '', end: '' } }],
  education: [{ name: '', period: { start: '', end: '' } }],
};

export const EditProfileWrapper = ({ children }: PropsType) => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);
  useQuery(['profile', profile], () => getUserProfile<ProfileType>(), {
    onSuccess: () => {
      setProfile(initState);
    },
  });
  return (
    <_Wrapper padding="184px 1.5rem 132px 1.5rem">
      <_Content direction="row" gap="24px" justify="space-between">
        {children}
      </_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled(Columns)`
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray200};
  position: relative;
`;

const _Content = styled(ColumnContent)`
  ${media._1024(`
    flex-direction: column-reverse;
  `)}
`;
