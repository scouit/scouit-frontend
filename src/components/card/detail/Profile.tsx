import styled from 'styled-components';
import { Text } from '@/components/common/text';
import { ColumnStartGap } from '@/layouts/DirectionGap';
import { media } from '@/styles/media';

interface PropsType {
  image: string;
  name: string;
  intro: string;
  url: string[];
}

export const DetailProfile = ({ image, name, intro, url }: PropsType) => (
  <_Wrapper>
    <_ImgWrapper>
      <_Img src={image} />
      <Text size="title1" color="gray900">
        {name}
      </Text>
    </_ImgWrapper>
    <Text size="body4" color="gray900" lineHeight="160%">
      {intro}
    </Text>
    <ColumnStartGap gap="12px" margin="17px 0 0">
      {url.map((e) => (
        <Text as="li" size="body4">
          {e}
        </Text>
      ))}
    </ColumnStartGap>
  </_Wrapper>
);

const _Wrapper = styled.div`
  width: 366px;
  height: fit-content;
  padding: 55px 15px;
  position: sticky;
  top: 100px;
  ${media._1024('width: auto;position:static')};
`;

const _ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 29px;
`;

const _Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
