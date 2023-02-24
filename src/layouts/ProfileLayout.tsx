import { media } from '@/styles/media';
import styled from 'styled-components';

interface PropsType {
  children: React.ReactNode;
}

export const ProfileLayout = ({ children }: PropsType) => {
  return (
    <_Wrapper>
      <_Content>{children}</_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100%;
  padding: 7.6875rem 1rem;
`;

const _Content = styled.div`
  gap: 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
