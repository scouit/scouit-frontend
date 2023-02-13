import styled from 'styled-components';
import { ModalWrapper } from '../../layouts/Modal';
import { Back, Profile } from '@/assets';
import { Text } from '../common/text';
import { Button } from '../common/button';
import { Columns } from '../../layouts/Columns';
import { CareerItem } from '../common/item/Career';
import { Link, useNavigate } from 'react-router-dom';

interface PropsType {
  closeModal: () => void;
}

export const SimplyModal = ({ closeModal }: PropsType) => {
  const navigate = useNavigate();
  return (
    <ModalWrapper closeModal={closeModal}>
      <_Content>
        <_Backgroudn />
        <_BackgroundImg src={Back} />
        <_Profile src={Profile} />
        <Columns gutter={5}>
          <Text align="center" margin="60px 0 12px 0" size="title1">
            조상현
          </Text>
          <Text align="center" size="body2" color="gray6">
            안녕하세요 저는 최고의 프로덕트로 최고가 되고싶습니다. 제가 뭐라는
            지 몰겠습니다. 응애 살려줘세요
          </Text>
          <Text size="title2">career</Text>
          <CareerItem />
          <div>
            <Text size="title2">technology</Text>
          </div>
          <Button
            onClick={() =>
              navigate(
                '/developers/resume/ec561255-9600-4524-f657-bfc66c73f4b3'
              )
            }
            kind="round"
          >
            자세히 보기
          </Button>
        </Columns>
      </_Content>
    </ModalWrapper>
  );
};

const _BackgroundImg = styled.img`
  width: 100%;
  height: 165px;
  object-fit: cover;
`;

const _Backgroudn = styled.div`
  position: absolute;
  width: 100%;
  height: 165px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const _Profile = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 115px;
  left: calc(50% - 50px);
`;

const _Content = styled.div`
  position: relative;
  width: 620px;
  min-height: 825px;
  background-color: ${({ theme }) => theme.color.gray1};
`;
