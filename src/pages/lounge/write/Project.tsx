import { Button } from '@/components/common/button';
import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { ImgLeader } from '@/components/common/input/FileLeader';
import { TextListInput } from '@/components/common/input/TextList';
import { TextArea } from '@/components/textarea';
import { useForm } from '@/hooks/useForm';

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

export const WriteProject = () => {
  const { text, handleOnChange, addTextList, removeTextList } =
    useForm<ProjectType>({
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
      <DateInput value={{ start: '', end: '' }} />
      <Input label="인원" placeholder="모집할 인원을 정해주세요" />
      <TextListInput
        name="condition"
        value={text.condition}
        onSubmit={addTextList}
        onListClick={removeTextList}
        label="조건"
        placeholder="프로젝트의 조건을 작성해주세요"
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
        value={text.link}
        onSubmit={addTextList}
        onListClick={removeTextList}
        label="추가 링크"
        placeholder="추가 링크를 정해 주세요"
      />
      <Button size="large" kind="contained">
        작성하기
      </Button>
    </>
  );
};
