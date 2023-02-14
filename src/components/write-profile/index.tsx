import { Button } from '@/components/common/button';
import { ColumnCenterGap } from '@/layouts/DirectionGap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Progress } from '../progress';
import { lio } from './constants';

export const Tapbar = () => {
  return (
    <_Wrapper>
      <ColumnCenterGap gap="24px" margin="58px 0">
        <Progress name="프로필 완성도" percent={0} />
        <_ActiveContent>
          {lio.map((item) => (
            <Link to={item.url}>
              <Button size="large" kind="text" color="gray">
                {item.title}
              </Button>
            </Link>
          ))}
        </_ActiveContent>
      </ColumnCenterGap>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 300px;
  height: 764px;
  box-shadow: ${({ theme }) => theme.shadow.modal};
  background-color: ${({ theme }) => theme.color.gray1};
`;

const _ActiveContent = styled.div`
  width: 100%;
  padding: 0 10px;
`;
