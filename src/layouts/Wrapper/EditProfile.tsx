import { getUserProfile, ProfileType } from '@/apis/profile/getProfile';
import { Button } from '@/components/common/button';
import { Header } from '@/components/header';
import { useProfileUpdate } from '@/hooks/useProfile';
import { atomProfile } from '@/store/write';
import { ReactNode, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Columns } from '../Columns';

interface PropsType {
  children: ReactNode;
}

export const EditProfileWrapper = ({ children }: PropsType) => {
  const [profile, setProfile] = useRecoilState<ProfileType>(atomProfile);
  const { basicUpdate, projectUpdate, workUpdate } = useProfileUpdate();
  useQuery(['profile', profile], () => getUserProfile<ProfileType>(), {
    onSuccess: (data) => setProfile(data),
  });
  return (
    <_Wrapper>
      <Header />
      <_Columns>{children}</_Columns>
      <_BottomTapBar>
        <Button
          size="medium"
          kind="contained"
          onClick={() => {
            basicUpdate.mutate();
            projectUpdate.mutate();
            workUpdate.mutate();
          }}
        >
          프로필 저장
        </Button>
      </_BottomTapBar>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray3};
  position: relative;
`;

const _Columns = styled(Columns)`
  display: flex;
  justify-content: space-between;
  padding: 115px 0 132px;
`;

const _BottomTapBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: ${({ theme }) => theme.shadow.modal};
  padding-right: 29px;
  display: flex;
  justify-content: end;
  align-items: center;
`;
