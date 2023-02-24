import { Header } from '@/components/header';
import { adminLinkList } from '@/pages/admin/Home';
import styled from 'styled-components';

interface PropsType {
  width: string;
  children: React.ReactNode;
}

export const LoungeLayout = ({ width, children }: PropsType) => {
  return (
    <_Wrapper>
      <Header textList={adminLinkList} currentPage="홈" gap="78px" />
      <_Content width={width}>{children}</_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  padding: 127px 24px;
`;

const _Content = styled.div<{ width: string }>`
  margin: 80px auto;
  max-width: ${({ width }) => width};
  gap: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
