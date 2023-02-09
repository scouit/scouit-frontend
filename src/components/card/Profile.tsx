import styled from 'styled-components';

interface PropsType {
  name: string;
  url?: string;
  onClick: () => void;
}

/* 탭 키로 이동안되는 이슈 !! */
export const ProfileCard = ({ name, url, onClick }: PropsType) => {
  return (
    <_Wrapper onClick={onClick}>
      <img src={url} />
      <div>{name}</div>
    </_Wrapper>
  );
};

const _Wrapper = styled.article`
  cursor: pointer;
  width: 340px;
  height: 388px;
  border: 2px solid ${({ theme }) => theme.color.gray4};
  border-radius: 2px;
  box-shadow: ${({ theme }) => theme.shadow.surface};
`;
