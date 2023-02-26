import { Input } from '@/components/common/input';
import { DateInput } from '@/components/common/input/Date';
import { Line } from '@/components/common/line';
import { Header } from '@/components/header';
import { ProfileWriteBox } from '@/components/profileWriteForm';
import { Tapbar } from '@/components/writeProfile';
import { lio } from '@/components/writeProfile/constants';
import { useProfileArray } from '@/hooks/useProfile';

export const EducatePage = () => {
  const {
    profile: { educate },
    listChange,
    addContent,
  } = useProfileArray('educate');
  return (
    <>
      <Header textList={lio} currentPage="학력" gap="17px" isMedia />
      <ProfileWriteBox title="학력" onClick={addContent}>
        {educate.map((e, idx) => (
          <>
            <Line height="3px" color="gray4" />
            <Input
              name="name"
              label="학교 이름"
              placeholder="학교 이름을 입력해 주세요"
              value={e.name}
              onChange={listChange(idx)}
            />
            <DateInput value={e.time} />
          </>
        ))}
      </ProfileWriteBox>
      <Tapbar currentPage="학력" />
    </>
  );
};
