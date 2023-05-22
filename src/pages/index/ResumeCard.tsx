import { ColumnGap } from '@/layouts/DirectionGap';
import { Text } from '@scouit/design-system';
import styled from 'styled-components';

interface PropsType {
  name: string;
  description: string;
  url: string;
  role: string;
}

export const ResumeCard = ({ url, name, description, role }: PropsType) => {
  return (
    <_ResumeCard>
      <ColumnGap gap="20px">
        <_ProfileImg src={url} alt="프로필 이미지" />
        <ColumnGap gap="5px">
          <Text size="title1" as="div">
            {name}
          </Text>
          <div>{role}</div>
        </ColumnGap>
      </ColumnGap>
      <div>{description}</div>
    </_ResumeCard>
  );
};

const _ResumeCard = styled.article`
  width: 264px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const _ProfileImg = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;
