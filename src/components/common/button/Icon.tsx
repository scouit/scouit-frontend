import styled from 'styled-components';

interface PropsType {
  Icon: JSX.Element;
}

export const IconButton = ({ Icon }: PropsType) => {
  return <_Wrapper>{Icon}</_Wrapper>;
};

const _Wrapper = styled.button`
  cursor: pointer;
  /* width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center; */
  padding: 10px;
  > svg {
    display: block;
  }
  background: none;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }
  :active {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;
