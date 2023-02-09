import { Button } from '@/components/common/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { WriteProfile } from '@/components/navigation/write-profile';
import { Columns12 } from '@/layouts/columns/12';
import styled from 'styled-components';

export const EditProfile = () => {
  return (
    <>
      <Header />
      <_Wrapper>
        <_Columns12>
          <_Content>qwd</_Content>
          <WriteProfile />
        </_Columns12>
      </_Wrapper>
      <_Bottom>
        <Button kind="round">프로필 저장</Button>
      </_Bottom>
    </>
  );
};

const _Bottom = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray1};
  border-top: 1px solid ${({ theme }) => theme.color.gray4};
`;

const _Content = styled.div`
  width: 760px;
  background-color: ${({ theme }) => theme.color.gray1};
`;

const _Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray2};
`;

const _Columns12 = styled(Columns12)`
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
`;
