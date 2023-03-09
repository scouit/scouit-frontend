import styled from 'styled-components';

interface PropsType {
  list: string[];
}

export const Navigation = ({ list }: PropsType) => {
  return (
    <nav>
      <_Inner>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </_Inner>
    </nav>
  );
};

const _Inner = styled.ul`
  display: flex;
  gap: 30px;
`;
