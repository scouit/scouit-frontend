import { ReactNode } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ProfileType } from '@/apis/profile/type';
import { getUserProfile } from '@/apis/profile/getProfile';
import { atomProfile } from '@/store/write';
import { media } from '@/styles/media';

interface PropsType {
  children: ReactNode;
}

export const EditProfileWrapper = ({ children }: PropsType) => {
  const [profile] = useRecoilState<ProfileType>(atomProfile);
  useQuery(['profile', profile], () => getUserProfile<ProfileType>(), {
    onSuccess: () => {},
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
