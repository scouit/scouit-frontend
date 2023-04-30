import { Text } from '@scouit/design-system';
import styled from 'styled-components';

interface PropType {
  src: string;
  title: string;
}

export const PageTitle = ({ src, title }: PropType) => {
  return (
    <_Wrapper>
      <_Img src={src} />
      <_Title>{title}</_Title>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 130px;
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
