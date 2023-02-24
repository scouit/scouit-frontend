import { Text } from '@/components/common/text';
import styled from 'styled-components';

interface PropsType {
  title: string;
  children: React.ReactNode;
}

export const DetailContent = ({ title, children }: PropsType) => {
  return (
    <_Wrapper>
      <Text size="heading1" color="gray10">
        {title}
      </Text>
      <_Content>{children}</_Content>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  padding: 71px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 71px;
  border-top: 3px solid ${({ theme }) => theme.color.gray4};
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 122px;
  padding: 37px 0;
`;
