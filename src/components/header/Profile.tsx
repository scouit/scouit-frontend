import { useRecoilState } from 'recoil';
import { Profile } from '@/assets';
import { profileSelectBox } from '@/store/modal';

export const ProfileHeader = () => {
  const [profile, setProfile] = useRecoilState(profileSelectBox);
  return (
    <img
      onClick={() => setProfile(true)}
      width={45}
      height={45}
      src={Profile}
    />
  );
};
