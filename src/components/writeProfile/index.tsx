import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@/components/common/button';
import { media } from '@/styles/media';
import { lio } from './constants';

interface PropsType {
  currentPage: string;
}

export const Tapbar = ({ currentPage }: PropsType) => (
  <_Wrapper>
    <_ActiveContent>
      {lio.map((e) => (
        <Link to={e.url}>
          <Button
            kind="text"
            size="large"
            color={e.title === currentPage ? 'primary' : 'gray'}
          >
            {e.title}
          </Button>
        </Link>
      ))}
    </_ActiveContent>
    <_ButtonWrapper>
      <Button
        size="large"
        kind="contained"
        onClick={() => {
          // basicUpdate.mutate();
          // projectUpdate.mutate();
          // workUpdate.mutate();
        }}
      >
        프로필 저장
      </Button>
    </_ButtonWrapper>
  </_Wrapper>
);

const _Wrapper = styled.div`
  width: 270px;
  height: 500px;
  border-radius: 0.5rem;
  top: 115px;
  padding: 60px 16px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.gray1};
  position: sticky;
  ${media._1024(`
    padding: 0;
    width: 0;
    height: 0;
  `)}
`;

const _ActiveContent = styled.div`
  ${media._1024(`
    display:none;
  `)}
`;

const _ButtonWrapper = styled.div`
  ${media._1024(`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`)}
`;
