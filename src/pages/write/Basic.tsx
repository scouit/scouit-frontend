import { useEffect } from 'react';
import { Tapbar } from '@/components/write-profile';
import { ProfileWriteBox } from '@/components/profileWriteForm';
import { useProfileUpdate } from '@/hooks/useProfile';
import { Input } from '@/components/common/input';
import { Header } from '@/components/header';
import { lio } from '@/components/write-profile/constants';

export const BasicPage = () => {
  const { basicUpdate } = useProfileUpdate();
  useEffect(() => () => basicUpdate.mutate(), [basicUpdate]);
  return (
    <>
      <Header textList={lio} currentPage="기본 정보" gap="17px" isMedia />
      <ProfileWriteBox title="기본 정보">
        <Input name="gas" label="직군" placeholder="" />
      </ProfileWriteBox>
      <Tapbar currentPage="기본 정보" />
    </>
  );
};
