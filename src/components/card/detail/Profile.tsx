import styled from 'styled-components';
import { Profile } from '@/assets';
import { Text } from '@/components/common/text';
import { ColumnStartGap } from '@/layouts/DirectionGap';
import { media } from '@/styles/media';

export const DetailProfile = () => (
  <_Wrapper>
    <_ImgWrapper>
      <_Img src={Profile} />
      <Text size="title1" color="gray10">
        조상현
      </Text>
    </_ImgWrapper>
    <Text size="body4" color="gray10" lineHeight="160%">
      최상의 비즈니스를 위해최고의 프로덕트를 만드는프론트엔드
      엔지니어입니다.아무도 바라보지 않는 미세한 디테일에 집착하고 고민합니다.
      문제의 본질을 탐구하면서 근본적인 해결책을 찾고 통찰합니다. 최고의
      사용자 경험을 제공하기 위해 끊임없이 고민하고 주도적으로 개선합니다.
      이러한 집착으로부터 더 나은 비즈니스 가치를 창출할 수 있다고 믿습니다.
    </Text>
    <ColumnStartGap gap="12px" margin="17px 0 0">
      <Text as="li" size="body4">
        https://velog.io/@lokijoji2
      </Text>
      <Text as="li" size="body4">
        https://velog.io/@lokijoji2
      </Text>
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
