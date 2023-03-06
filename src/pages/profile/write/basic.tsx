import { useEffect } from 'react';
import { ProfileTapbarLayout } from '@/layouts/ProfileTapbar';
import { Input } from '@/components/common/input';
import { useProfileUpdate } from '@/hooks/useProfile';

const basic = 'basic';

const BasicPage = () => {
  const basicUpdate = useProfileUpdate(basic);
  useEffect(() => () => basicUpdate(), [basicUpdate]);
  return (
    <ProfileTapbarLayout title="기본 정보">
      <Input name="gas" label="직군" placeholder="" />
    </ProfileTapbarLayout>
  );
};

export default BasicPage;
