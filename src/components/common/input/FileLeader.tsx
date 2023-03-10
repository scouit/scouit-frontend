import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { Back, Close, FileLeader } from '@/assets';
import { Text } from '@/components/common/text';
import { ColumnStartGap } from '@/layouts/DirectionGap';

interface PropsType {
  name: string;
  listArrayChange: (name: string, value: string | File) => void;
}

export const ImgLeader = ({ name, listArrayChange }: PropsType) => {
  const FileImgChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return;

    const Filer = new FileReader();
    const IMG = e.target.files[0];
    Filer.onloadend = () => {
      listArrayChange(name, IMG);
    };
  };
  return (
    <ColumnStartGap gap="8px">
      <Text size="body2" color="gray600">
        이미지 (최대 10개)
      </Text>
      <_ImgWrapper>
        <_LeaderInput type="file" id="LeadToInput" onChange={FileImgChange} />
        <_ImgLeader htmlFor="LeadToInput">
          <_Img src={FileLeader} />
        </_ImgLeader>
        {Array(1)
          .fill(1)
          .map(() => (
            <_ListWrapper>
              <_CloseWrapper>
                <Close />
                <_CloseBackground />
              </_CloseWrapper>
              <_Img src={Back} />
            </_ListWrapper>
          ))}
      </_ImgWrapper>
    </ColumnStartGap>
  );
};

const _LeaderInput = styled.input`
  display: none;
`;

const _ImgLeader = styled.label`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const _ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const _Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
`;

const _ListWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const _CloseWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s;
  opacity: 0;

  :hover {
    opacity: 1;
  }
`;

const _CloseBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: 100%;
  background-color: ${({ theme }) => theme.color.gray900};
  opacity: 0.6;
  border-radius: 0.5rem;
`;
