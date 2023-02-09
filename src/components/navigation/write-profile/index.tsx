import { Button } from '@/components/common/button';
import styled from 'styled-components';
import { lio } from './constants';

export const WriteProfile = () => {
  return (
    <_Wrapper>
      {lio.map((item) => {
        return <Button kind="text">{item}</Button>;
      })}
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: sticky;
  top: 100px;
  width: 300px;
  height: fit-content;
`;
