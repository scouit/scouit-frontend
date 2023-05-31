import {
  DateInput,
  Text,
  TextList,
  Input,
  ImageInput,
  Textarea,
} from '@scouit/design-system';
import { useForm } from '@/hooks/useForm';
import styled from 'styled-components';
import { ColumnGap } from '@/layouts/DirectionGap';

interface ProjectType {
  title: string;
  content: string;
  image: string;
  date: { start: ''; end: '' };
  person: string;
  condition: string[];
  explanation: string;
  communication: string;
  link: string[];
}

const WriteProject = () => {
  const { text, handleOnChange, onTextListChange } = useForm<ProjectType>({
    title: '',
    content: '',
    image: '',
    date: { start: '', end: '' },
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
        label="제목"
        onChange={() => {}}
        placeholder="프로젝트의 이름을 정해주세요"
      />
      <Textarea
        name="content"
        label="내용"
        placeholder="내용을 입력해 주세요"
        value={text.content}
        onChange={handleOnChange}
      />
      <ImageInput
        name="imgs"
        label="이미지"
        isLoading
        imageList={[]}
        imgToUrl={() => new Promise(() => '')}
        onChange={() => {}}
      />
      <_labelAbsoluteWrapper>
        <DateInput
          label="날짜"
          name="startDay"
          onSubmitAtInput={() => {}}
          isDayInclude
          value={undefined}
          placeholder="날짜를 입력해 주세요"
        />
      </_labelAbsoluteWrapper>

      <Input
        label="인원"
        name=""
        placeholder="모집할 인원을 정해주세요"
        value=""
        onChange={() => {}}
      />
      <ColumnGap gap="10px">
        <Text size="title2">조건</Text>
        <TextList
          name="condition"
          textList={text.condition}
          onChange={(value) => onTextListChange('link', value)}
          placeholder="프로젝트의 조건을 작성해주세요"
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

const _labelAbsoluteWrapper = styled.div`
  margin-top: 27px;
`;

export default WriteProject;
