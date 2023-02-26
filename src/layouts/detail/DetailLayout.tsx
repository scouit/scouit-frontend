import styled from 'styled-components';
import { DetailProfile } from '@/components/card/detail/Profile';
import { Header } from '@/components/header';
import { media } from '@/styles/media';

interface PropsType {
  children: React.ReactNode;
}

export const DetailLayout = ({ children }: PropsType) => (
  <>
    <Header />
    <_Wrapper>
      <_Content>
        <DetailProfile />
        <_ContentInner>{children}</_ContentInner>
      </_Content>
    </_Wrapper>
  </>
);

const _Wrapper = styled.div`
  padding: 200px 1rem 50px;
`;

const _Content = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  gap: 1.5rem;
  ${media._1024('flex-direction: column')}
`;

const _ContentInner = styled.div`
  max-width: 643px;
  ${media._1024('max-width: 100%')}
`;
