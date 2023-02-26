import styled from 'styled-components';
import { Text } from '@/components/common/text';
import { ColumnGap } from '@/layouts/DirectionGap';
import { media } from '@/styles/media';
import { SkillCard } from '../Skill';

interface PropsType {
  title: string;
  direction?: 'row' | 'column';
  role?: string;
  image?: string;
  date?: string;
  url?: string[];
  content?: string;
  works?: string[];
  skills?: string[];
}

const isColumn = (direction: 'column' | 'row') => direction === 'column';

export const ContentCard = ({
  title,
  direction = 'row',
  role,
  image,
  date,
  url = [],
  content,
  works = [],
  skills = [],
}: PropsType) => (
  <_Wrapper direction={direction}>
    <_Content gap={isColumn(direction) ? '28px' : '0'}>
      <_Img src={image} />
      <_TitleWrapper direction={direction} gap="0.5rem">
        <Text size="title1" color="gray10">
          {title}
        </Text>
        <Text
          size={isColumn(direction) ? 'title1' : 'body2'}
          color={isColumn(direction) ? 'gray5' : 'gray10'}
        >
          {date}
        </Text>
        <Text size="body1" color="gray10">
          {role}
        </Text>
      </_TitleWrapper>
    </_Content>
    <ColumnGap gap={isColumn(direction) ? '28px' : '0'}>
      <ColumnGap gap="12px">
        {url.map((e) => (
          <Text as="li" size="body4">
            {e}
          </Text>
        ))}
      </ColumnGap>
      <Text size="body1" color="gray10">
        {content}
      </Text>
      <_SkillWrapper>
        {skills.map(() => (
          <SkillCard name="React" color="gray10" />
        ))}
      </_SkillWrapper>
      <ColumnGap gap="12px">
        {works.map((e) => (
          <Text as="li" size="body1">
            {e}
          </Text>
        ))}
      </ColumnGap>
    </ColumnGap>
  </_Wrapper>
);

const _Wrapper = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: 28px;
  padding-left: 40px;
  ${media._1024('padding: 0;flex-direction: column')}
`;

const _Content = styled.div<{ gap: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;

const _Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const _TitleWrapper = styled.div<{ direction: 'row' | 'column'; gap?: string }>`
  width: ${({ direction }) => (isColumn(direction) ? 'auto' : '134px')};
  display: flex;
  align-items: start;
  flex-direction: ${({ direction }) =>
    isColumn(direction) ? 'row' : 'column'};
  gap: ${({ gap }) => gap};
  ${({ direction }) => !isColumn(direction) && media._1024('gap: 20px;')}
`;

const _SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
`;
