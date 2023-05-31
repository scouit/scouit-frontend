import { RowCenterGap, RowGap } from '@/layouts/DirectionGap';
import { Text } from '@scouit/design-system';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
  icon: string | ReactNode;
  title: string;
  children: ReactNode;
}

export const MyPageItem = ({ icon, title, children }: PropsType) => {
  const istNotice = typeof icon === 'string';
  return (
    <_Wrapper>
      <RowGap gap="18px">
        {istNotice ? <_Icon src={icon} /> : icon}
        <Text size={istNotice ? 'title2' : 'title3'}>{title}</Text>
      </RowGap>
      <RowCenterGap gap="50px">{children}</RowCenterGap>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    align-items: center;
    width: fit-content;
  }
  padding: 20px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

const _Icon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
`;
