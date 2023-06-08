import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { keyOfFont, media, Text } from '@scouit/design-system';

type ListType = {
  name?: string | JSX.Element;
  link?: string;
  target?: '_blank';
};

interface PropsType {
  list: ListType[];
  gap?: string;
  size?: keyOfFont;
  isColumn?: boolean;
}

export const NavigationList = ({
  list,
  gap = '50px',
  size = 'heading3',
  isColumn,
}: PropsType) => (
  <_Wrapper isColumn={isColumn} gap={gap}>
    {list.map(({ link, name, target }) => (
      <Text size={size} as="li">
        <Link target={target} to={link}>
          {name}
        </Link>
      </Text>
    ))}
  </_Wrapper>
);

const _Wrapper = styled.ul<{ isColumn: boolean; gap: string }>`
  width: fit-content;
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
  align-items: center;
  gap: ${({ gap }) => gap};
  ${media._720('display:none;')}
`;
