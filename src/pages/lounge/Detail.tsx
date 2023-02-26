import { Back } from '@/assets';
import { Img } from '@/components/common/img';
import { Text } from '@/components/common/text';
import { LabelText } from '@/components/common/text/LabelText';
import { ColumnGap } from '@/layouts/DirectionGap';
import { LoungeLayout } from '@/layouts/lounge/Write';

const detail = {
  title: '헤더를 장식하는 새로운 스터디',
  kind: 'With JS',
  date: '2023.2.23 ~ 2023.2.24',
  content:
    '당신이 프로그래밍을 배울 때 가장 먼저 배웠던 자료구조는 무엇이었나?높은 확률로 아마도 배열일 것이다. 그렇다면 배열은 왜 배움에 있어서 가장 우선시 되는 자료구조일까?"배열은 가장 많이 사용되는 자료구조이기 때문이다."그렇다면 왜 배열은 가장 많이 사용되는 자료구조일까? 배열은 어떤 특징을 가지고 있을까?그리고, 나는 배열을 잘 사용하고 있을까?나처럼 배열의 모든 것을 다 안다고 착각했던 사람들에게 이 글을 바친다.',
  url: Back,
  location: '을지로 옆문동 1224',
  schedule: '매주 3일 3시간씩',
  person: '사람 10명',
  condition: [
    '전자문서 유통 기관 등록 기능 개발',
    '전자문서 유통 기관 등록 기능 개발',
    '전자문서 유통 기관 등록 기능 개발',
  ],
  explanation:
    '저희의 스터디는 다른 모든 스터디와 다른 차이점이 존재합니다. 바로 저희만의 특별한 꺽이지 않는 마음을 갖고 있습니다',
  communication: '카카오톡',
  link: ['https:/github', 'https:/github', 'https:/github'],
};

export const LoungeDetail = () => (
  <LoungeLayout width="59.75rem">
    <ColumnGap gap="30px">
      <Text size="title1">{detail.title}</Text>
      <Text size="heading2">{detail.kind}</Text>
      <Text size="body1">{detail.date}</Text>
      <Img width="100%" objectFit="cover" src={Back} />
      <Text size="body1" margin="0 0 70px">
        {detail.content}
      </Text>
      <LabelText label="장소">
        <Text size="body1">{detail.location}</Text>
      </LabelText>
      <LabelText label="일정">
        <Text size="body1">{detail.schedule}</Text>
      </LabelText>
      <LabelText label="인원">
        <Text size="body1">{detail.person}</Text>
      </LabelText>
      <LabelText label="조건">
        <ColumnGap gap="20px">
          {detail.condition.map((e) => (
            <Text as="li" size="body1">
              {e}
            </Text>
          ))}
        </ColumnGap>
      </LabelText>
      <LabelText label="설명">
        <Text size="body1">{detail.explanation}</Text>
      </LabelText>
      <LabelText label="연락">
        <Text size="body1">{detail.communication}</Text>
      </LabelText>
      <LabelText label="링크">
        <ColumnGap gap="20px">
          {detail.link.map((e) => (
            <Text as="li" size="body1">
              {e}
            </Text>
          ))}
        </ColumnGap>
      </LabelText>
    </ColumnGap>
  </LoungeLayout>
);
