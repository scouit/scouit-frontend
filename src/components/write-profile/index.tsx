import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@/components/common/button';
import { ColumnCenterGap } from '@/layouts/DirectionGap';
import { media } from '@/styles/media';
import { lio, URI } from './constants';

interface PropsType {
  currentPage: string;
}

export const Tapbar = ({ currentPage }: PropsType) => (
  <_Wrapper>
    <ColumnCenterGap gap="24px">
      <_ActiveContent>
        {lio.map((e) => (
          <Link to={e.url}>
            <_TabButton selected={e.title === currentPage}>
              {e.title}
            </_TabButton>
          </Link>
        ))}
      </_ActiveContent>
    </ColumnCenterGap>
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
  padding: 60px 16px 30px 16px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.gray1};
  position: sticky;
  flex-direction: column;
  ${media._1024(`
    padding: 0;
    width: 0;
    height: 0;
  `)}
`;

const _ActiveContent = styled.div`
  width: 100%;
  padding: 0 10px;
  justify-content: center;
  background-color: #ffffff;
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

const _TabButton = styled.div<{ selected: boolean }>`
  width: 100%;
  border-radius: 0.5rem;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? 'blue' : 'black')};
  ${({ theme }) => theme.font.heading3};
`;
