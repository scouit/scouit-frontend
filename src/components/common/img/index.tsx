import styled from 'styled-components';

export const Img = styled.img<{
  width?: string;
  height?: string;
  objectFit?: string;
}>`
  width: ${({ width }) => width || 'fit-content'};
  height: ${({ height }) => height || 'fit-content'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
`;
