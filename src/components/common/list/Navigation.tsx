import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ListType = {
  name?: string | JSX.Element;
  link?: string;
  target?: '_blank';
};

interface PropsType {
  list: ListType[];
}

export const NavigationList = ({ list }: PropsType) => {
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
