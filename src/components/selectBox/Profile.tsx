import ReactOutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { profileSelectBox } from '@/store/modal';
import { Profile } from '@/assets';
import { Button } from '../common/button';
import { Text } from '../common/text';

export const ProfileSelectBox = () => {
  const [, setProfile] = useRecoilState(profileSelectBox);
  // const logoutMutate = useLogout();
  return (
    <div>
      <ReactOutsideClickHandler onOutsideClick={() => setProfile(false)}>
        <_Content>
          <Text padding="15px 24px">내 프로필</Text>
          <ul>
            <_Item>
              <_Profile>
                <img
                  width={85}
                  height={85}
                  src={Profile}
                  alt="내 프로필 사진"
                />
                <Text size="title2">조상현</Text>
                <Link to="/profile/write/basic">
                  <Button>프로필 수정</Button>
                </Link>
              </_Profile>
            </_Item>
            <_Item>
              <Link to="/my-page">마이페이지</Link>
            </_Item>
            <_Item>
              {/* <button onClick={() => logoutMutate.mutate()}>로그아웃</button> */}
            </_Item>
          </ul>
        </_Content>
      </ReactOutsideClickHandler>
    </div>
  );
};

const _Profile = styled.div`
  width: 131px;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const _Content = styled.div`
  position: fixed;
  top: 75px;
  right: 200px;
  width: 330px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.xs};
  background-color: ${({ theme }) => theme.color.gray100};
`;

const _Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.font.title2};

  border-top: 1px solid ${({ theme }) => theme.color.gray400};
  min-height: 63px;
`;
