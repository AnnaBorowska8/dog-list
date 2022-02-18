import styled, { keyframes, css } from 'styled-components';
import { ifProp } from "styled-tools";

export const ModalContainer = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .7);
`;

export const ModalHeader = styled.header`
  position: relative;
  background: #D9BC9F;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0  ;
`;

export const ModalTitle = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  width: calc(100% - 50px);
  color: #2D3E52;
  margin-left: 60px;
`;

export const ModalBox = styled.div`
  width: 50%;
  height: 550px;
  background-color: #EDEAE4;
  transform: translate(50%, 30%);
  border-radius: 10px;
`;

const Show = keyframes `
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const ModalImage = styled.img`
  max-height: 350px;
  width: auto;
  animation: ${ifProp(
    "isVisible",
    css`${Show} 500ms linear`
)}
`;

export const ModalContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 30px 0;
  height: 350px;
  align-items: center;
`;

export const ModalFooter = styled.div`
  border-top: solid 1px #D9BC9F;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
