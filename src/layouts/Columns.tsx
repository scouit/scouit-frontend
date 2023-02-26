import styled from 'styled-components';

interface PropsType {
  gutter?: 5 | 12;
  className?: string;
}

const gutterObject = {
  5: 380,
  12: 1152,
};

export const _Columns = styled.div<PropsType>`
  width: ${({ gutter }) => gutterObject[gutter]}px;
  margin: 0 auto;
`;

export const _CardColums = styled(_Columns)`
  gap: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
