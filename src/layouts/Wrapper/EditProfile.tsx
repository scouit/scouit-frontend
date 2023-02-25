import { ReactNode, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ProfileType } from '@/apis/profile/type';
import { getUserProfile } from '@/apis/profile/getProfile';
import { useProfileUpdate } from '@/hooks/useProfile';
import { atomProfile } from '@/store/write';
import { Columns } from '../Columns';
import { media } from '@/styles/media';
import { lio } from '@/components/write-profile/constants';
import { Tapbar } from '@/components/write-profile';
import { Header } from '@/components/header';

interface PropsType {
  children: ReactNode;
}

export const EditProfileWrapper = ({ children }: PropsType) => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);
  const { basicUpdate, projectUpdate, workUpdate } = useProfileUpdate();
  useQuery(['profile', profile], () => getUserProfile<ProfileType>(), {
    onSuccess: (data) => {},
  });
  return (
    <_Wrapper>
      <_Columns>{children}</_Columns>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray2};
  position: relative;
  padding: 0 1.5rem;
`;

const _Columns = styled.div`
  max-width: 1152px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 184px 0 132px;
  ${media._1024(`
    flex-direction: column-reverse;
  `)}
`;
