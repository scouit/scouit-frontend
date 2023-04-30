import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { TextListInput } from '@/components/common/input/TextList';
import { TextArea } from '@/components/textarea';
import { useForm } from '@/hooks/useForm';

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
  const { text, handleOnChange, addTextList, removeTextList } =
    useForm<StudyType>({
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
        onChange={handleOnChange}
        label="제목"
        placeholder="제목을 입력해 주세요"
      />
      <Input
        name="kind"
        value={text.kind}
        onChange={handleOnChange}
        label="주제"
        placeholder="주제를 입력해 주세요"
      />
      <Input
        name="location"
        value={text.location}
        onChange={handleOnChange}
        label="장소"
        placeholder="장소를 입력해 주세요"
      />
      <Input
        name="schedule"
        value={text.schedule}
        onChange={handleOnChange}
        label="일정"
        placeholder="일정을 정해 주세요"
      />
      <Input
        name="person"
        value={text.person}
        onChange={handleOnChange}
        label="인원"
        placeholder="인원을 정해 주세요"
      />
      <TextListInput
        name="condition"
        value={text.condition}
        onSubmit={addTextList}
        onListClick={removeTextList}
        label="조건"
        placeholder="조건을 입력해 주세요"
      />
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
      <TextListInput
        name="link"
        label="추가 링크"
        value={text.link}
        onSubmit={addTextList}
        onListClick={removeTextList}
        placeholder="추가 링크를 정해 주세요"
      />
    </>
  );
};

export default WriteStudy;
