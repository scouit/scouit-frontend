import { useRecoilState } from 'recoil';
import { Profile } from '@/assets';
import { profileSelectBox } from '@/store/modal';

export const ProfileHeader = () => {
  const [, setProfile] = useRecoilState(profileSelectBox);
  return (
    <img
      role="presentation"
      onClick={() => setProfile(true)}
      width={45}
      height={45}
      src={Profile}
      alt="프로필 헤더 이미지"
    />
  );
};
