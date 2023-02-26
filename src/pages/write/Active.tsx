import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { Header } from '@/components/header';
import { ProfileWriteBox } from '@/components/profileWriteForm';
import { TextArea } from '@/components/textarea';
import { Tapbar } from '@/components/writeProfile';
import { lio } from '@/components/writeProfile/constants';
import { useProfileArray } from '@/hooks/useProfile';

export const ActivePage = () => {
  const {
    profile: { active },
    listChange,
  } = useProfileArray('active');
  return (
    <>
      <Header textList={lio} currentPage="활동" gap="17px" isMedia />
      <ProfileWriteBox title="활동" onClick={() => {}}>
        {active.map((e, idx) => (
          <>
            <Input
              name={e.content}
              onChange={listChange(idx)}
              label="이름"
              placeholder="참가한 활동의 이름을 적어주세요"
            />
            <TextArea
              label="내용"
              name="content"
              placeholder="참가한 활동의 내용을 적어주세요"
              value={e.content}
              onChange={listChange(idx)}
            />
            <DateInput value={e.time} gap="46px" />
          </>
        ))}
      </ProfileWriteBox>
      <Tapbar currentPage="활동" />
    </>
  );
};
