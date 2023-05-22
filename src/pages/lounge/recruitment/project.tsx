import { DateInput, Text, TextList } from '@scouit/design-system';
import { Input } from '@/components/common/input';
import { ImgLeader } from '@/components/common/input/FileLeader';
import { TextListInput } from '@/components/common/input/TextList';
import { TextArea } from '@/components/textarea';
import { useForm } from '@/hooks/useForm';
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
        placeholder="프로젝트의 이름을 정해주세요"
      />
      <TextArea
        name="content"
        label="내용"
        placeholder="내용을 입력해 주세요"
        value={text.content}
        onChange={handleOnChange}
      />
      <ImgLeader name="imgs" listArrayChange={() => {}} />
      <DateInput
        label="앙기모띠"
        name="startDay"
        onSubmitAtInput={() => {}}
        isDayInclude
        value={undefined}
        placeholder="날짜를 입력해 주세요"
      />
      <Input label="인원" placeholder="모집할 인원을 정해주세요" value="" />
      <ColumnGap gap="10px">
        <Text size="body2">조건</Text>
        <TextList
          name="condition"
          textList={text.condition}
          onChange={(value) => onTextListChange('link', value)}
          placeholder="프로젝트의 조건을 작성해주세요"
        />
      </ColumnGap>

      <TextArea
        name="explanation"
        label="추가 설명"
        placeholder="추가 설명할 내용을 적어주세요"
        value={text.explanation}
        onChange={handleOnChange}
      />
      <Input
        name="communication"
        value={text.communication}
        onChange={handleOnChange}
        label="연락 방법"
        placeholder="연락할 방법을 정해주세요"
      />
      <ColumnGap gap="10px">
        <Text size="body2">링크</Text>
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

export default WriteProject;
