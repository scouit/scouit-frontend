import { ReactNode } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ProfileType } from '@/apis/profile/type';
import { getUserProfile } from '@/apis/profile/getProfile';
import { atomProfile } from '@/store/write';
import { media } from '@/styles/media';
import { Columns, ColumnContent } from '../Columns';

interface PropsType {
  children: ReactNode;
}

export const EditProfileWrapper = ({ children }: PropsType) => {
  const [profile] = useRecoilState<ProfileType>(atomProfile);
  useQuery(['profile', profile], () => getUserProfile<ProfileType>(), {
    onSuccess: () => {},
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
  background-color: ${({ theme }) => theme.color.gray2};
  position: relative;
`;

const _Content = styled(ColumnContent)`
  ${media._1024(`
    flex-direction: column-reverse;
  `)}
`;
