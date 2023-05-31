import { useForm } from '@/hooks/useForm';
import { ColumnGap } from '@/layouts/DirectionGap';
import { Text, TextList, Input, Textarea } from '@scouit/design-system';
import styled from 'styled-components';

interface StudyType {
  title: string;
  kind: string;
  location: string;
  schedule: string;
  person: string;
  condition: string[];
  explanation: string;
  communication: string;
  link: string[];
}

const WriteStudy = () => {
  const { text, handleOnChange, onTextListChange } = useForm<StudyType>({
    title: '',
    kind: '',
    location: '',
    schedule: '',
    person: '',
    condition: [],
    explanation: '',
    communication: '',
    link: [],
  });
  return (
    <>
      <Input
        name="title"
        value={text.title}
        onChange={() => {}}
        label="제목"
        placeholder="제목을 입력해 주세요"
      />
      <Input
        name="kind"
        value={text.kind}
        onChange={() => {}}
        label="주제"
        placeholder="주제를 입력해 주세요"
      />
      <Input
        name="location"
        value={text.location}
        onChange={() => {}}
        label="장소"
        placeholder="장소를 입력해 주세요"
      />
      <Input
        name="schedule"
        value={text.schedule}
        onChange={() => {}}
        label="일정"
        placeholder="일정을 정해 주세요"
      />
      <Input
        name="person"
        value={text.person}
        onChange={() => {}}
        label="인원"
        placeholder="인원을 정해 주세요"
      />
      <ColumnGap gap="10px">
        <Text size="title2">조건</Text>
        <TextList
          name="condition"
          textList={text.condition}
          onChange={(value) => onTextListChange('condition', value)}
          placeholder="조건을 입력해 주세요"
        />
      </ColumnGap>

      <Textarea
        name="explanation"
        label="추가 설명"
        placeholder="추가 설명할 내용을 적어주세요"
        value={text.explanation}
        onChange={handleOnChange}
      />
      <Input
        name="communication"
        value={text.communication}
        onChange={() => {}}
        label="연락 방법"
        placeholder="연락할 방법을 정해주세요"
      />
      <ColumnGap gap="10px">
        <Text size="title2">링크</Text>
        <TextList
          name="link"
          textList={text.link}
          onChange={(value) => onTextListChange('link', value)}
          placeholder="추가 링크를 정해 주세요"
        />
      </ColumnGap>
    </>
  );
};

export default WriteStudy;
