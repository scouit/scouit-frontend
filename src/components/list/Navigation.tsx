import { Link } from 'react-router-dom';
import styled from 'styled-components';

type listType = {
  name?: string | JSX.Element;
  link: string;
  target?: '_blank';
};

interface Props {
  list: listType[];
}

export const NavigationList = ({ list }: Props) => {
  return (
    <_Wrapper>
      {list.map(({ link, name, target }, idx) => (
        <li key={idx}>
          <Link target={target} to={link}>
            {name}
          </Link>
        </li>
      ))}
    </_Wrapper>
  );
};

const _Wrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`;
