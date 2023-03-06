import styled from 'styled-components';
import { BookMark, Company, Share } from '@/assets';
import { Button } from '../common/button';
import { Text } from '../common/text';

export const DetailCompany = () => (
  <_Wrapper>
    <div>
      <img src={Company} alt="채용공고 이미지" />
      <div>
        <Text size="title1">토스 (비바리퍼블리카)</Text>
        <div>
          <BookMark />
          <Share />
        </div>
      </div>
    </div>
    <div>
      <div>소속</div>
      <div>토스뱅크</div>
    </div>
    <div>
      <div>고용형태</div>
      <div>정규직</div>
    </div>
    <div>
      <div>연봉</div>
      <div>3000 ~ 6000 만원</div>
    </div>
    <div>
      <div>근무 위치</div>
      <div>서울 금천구 가산디지털1로 225, (가산동)</div>
    </div>
    <div>
      <div>경력</div>
      <div>3년 이상</div>
    </div>
    <div>
      <div>지원 마감</div>
      <div>상시 채용</div>
    </div>
    <Button>지원하기</Button>
  </_Wrapper>
);

const _Wrapper = styled.div`
  position: sticky;
`;
