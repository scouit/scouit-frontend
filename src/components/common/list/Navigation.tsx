import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@scouit/design-system';

type ListType = {
  name?: string | JSX.Element;
  link?: string;
  target?: '_blank';
};

interface PropsType {
  list: ListType[];
}

export const NavigationList = ({ list }: PropsType) => (
  <_Wrapper>
    {list.map(({ link, name, target }) => (
      <li>
        <Link target={target} to={link}>
          {name}
        </Link>
      </li>
    ))}
  </_Wrapper>
);

const _Wrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  ${media._720('display:none;')}
`;
