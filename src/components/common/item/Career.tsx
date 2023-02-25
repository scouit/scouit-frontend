import styled from 'styled-components';
import { Text } from '../text';

export const CareerItem = () => (
  <div>
    <_TopWrapper>
      <Text size="title4">Viva Republica (Toss)</Text>
      <Text size="body3">2022.09.21 ~ 현재</Text>
    </_TopWrapper>
    <Text margin="8px 0" size="body3">
      FrontEnd Developer
    </Text>
    <_Explain size="body4" color="gray5">
      금융관리 회사 핀테크의 Toss 배구공을 토스하듯이 토스합니다. 아주
      재미있죠.
    </_Explain>
  </div>
);

const _TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

const _Explain = styled(Text)`
  width: 238px;
`;
