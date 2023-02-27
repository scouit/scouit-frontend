import { useEffect } from 'react';
import { ProfileTapbarLayout } from '@/layouts/ProfileTapbar';
import { useProfileUpdate } from '@/hooks/useProfile';
import { Input } from '@/components/common/input';

export const BasicPage = () => {
  const { basicUpdate } = useProfileUpdate();
  useEffect(() => () => basicUpdate.mutate(), [basicUpdate]);
  return (
    <ProfileTapbarLayout title="기본 정보">
      <Input name="gas" label="직군" placeholder="" />
    </ProfileTapbarLayout>
  );
};
