import styled from 'styled-components';

export const Img = styled.img<{
  width?: string;
  height?: string;
  radius?: string;
  objectFit?: string;
}>`
  width: ${({ width }) => width || 'fit-content'};
  height: ${({ height }) => height || 'fit-content'};
  border-radius: ${({ radius }) => radius};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
`;
