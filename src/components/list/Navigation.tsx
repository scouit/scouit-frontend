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

// 1. 컴포넌트는 컴포넌트에게 의존할 수 없다.
// 2. 컴포넌트는 common 폴더에게 의존할 수 있다.
// 즉, common은 원자수준의 컴포넌트여야함