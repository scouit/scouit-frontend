import { Text } from '@scouit/design-system';
import styled from 'styled-components';

interface PropType {
  src: string;
  title: string;
  isWhite?: boolean;
  margin?: string;
}

export const PageTitle = ({ src, title, isWhite, margin }: PropType) => {
  return (
    <_Wrapper margin={margin}>
      <_Img src={src} />
      <_Title color={isWhite ? 'gray0' : 'gray900'}>{title}</_Title>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ margin: string }>`
  position: relative;
  width: 100%;
  height: 130px;
  margin: ${({ margin }) => margin};
`;

const _Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const _Title = styled(Text)`
  position: absolute;
  top: 60px;
  left: 20%;
  font-weight: bold;
  font-size: 40px;
`;
