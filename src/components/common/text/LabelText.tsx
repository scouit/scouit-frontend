import styled from 'styled-components';
import { Text } from '.';

interface PropsType {
  label: string;
  children: React.ReactNode;
}
export const LabelText = ({ label, children }: PropsType) => (
  <_Wrapper>
    <_Text size="title2">{label}</_Text>
    <_Content>{children}</_Content>
  </_Wrapper>
);

const _Wrapper = styled.div`
  display: flex;
`;

const _Text = styled(Text)`
  white-space: nowrap;
`;

const _Content = styled.div`
  border-left: 2px solid ${({ theme }) => theme.color.gray900};
  padding-left: 25px;
  margin-left: 40px;
`;
