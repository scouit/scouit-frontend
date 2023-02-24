import { React } from '@/assets';
import { keyOfColor } from '@/styles/theme/color';
import styled from 'styled-components';
import { Text } from '../common/text';

interface PropsType {
  color: keyOfColor;
  name: string;
  url?: string;
}

export const SkillCard = ({ color, name, url }: PropsType) => {
  return (
    <_SkillWrapper backColor={color}>
      <React />
      <Text size="body1" color="gray1">
        {name}
      </Text>
    </_SkillWrapper>
  );
};

const _SkillWrapper = styled.div<{ backColor: keyOfColor }>`
  width: fit-content;
  height: 32px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
  padding: 0 7px;
  margin: 7px 0;
  border-radius: 8px;
  background-color: ${({ theme, backColor }) => theme.color[backColor]};
`;
