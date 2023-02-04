import ReactOutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  closeModal: () => void;
}

export const ModalWrapper = ({ children, closeModal }: Props) => {
  return (
    <_Background>
      <ReactOutsideClickHandler onOutsideClick={closeModal}>
        {children}
      </ReactOutsideClickHandler>
    </_Background>
  );
};

export const _Background = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
`;
