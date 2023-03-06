import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@/styles/media';
import { Button } from '../common/button';

interface PropsType {
  isProfile: boolean;
  children: ReactNode;
}

export const ProfileCard = ({ isProfile, children }: PropsType) => {
  const navigate = useNavigate();
  return (
    <_Wrapper>
      <div>{children}</div>
      <Button onClick={() => navigate('/developers/resume/a')} size="large">
        view {isProfile ? 'profile' : 'post'}
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
  box-shadow: ${({ theme }) => theme.shadow.lg};
  border-radius: 0.5rem;
  width: 100%;
  max-width: 23rem;
  ${media._1512('min-width: 19.3rem;')}
  ${media._1024('min-width: 20.25rem;')}
`;
