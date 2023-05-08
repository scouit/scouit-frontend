import { Text } from '@scouit/design-system';
import styled from 'styled-components';

interface PropsType {
  url: string;
}

export const ResumeCard = ({ url }: PropsType) => {
  return (
    <_ResumeCard>
      <div>
        <img src={url} alt="프로필 이미지" />
        <Text size="title1" as="div">
          조상현
        </Text>
        <div>UI / UX 디자이너</div>
      </div>
      <div>
        항상 더 좋은 프로덕트에 대해 고민하고결정해요. 단순한 의사결정이 아닌
        여러 답을 도출하고 그 중에 가장 올바른 결정을 합니다.
      </div>
    </_ResumeCard>
  );
};

const _ResumeCard = styled.article`
  width: 264px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
