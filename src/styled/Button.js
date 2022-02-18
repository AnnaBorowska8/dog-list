import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid/Close';

export const StyledButton = styled.button`
  border: solid 2px #AC5D33;
  height: 90px;
  width: 100%;
  border-radius: 10px;
  font-size: 28px;
  text-transform: uppercase;
  color: #2D3E52;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #CAAAA9;
    border-color: #2D3E52
  }
`;

export const ImageButton = styled(StyledButton)`
  height: 60px;
  width: 250px;
  font-size: 20px;
`;

export const DogButtonBox = styled.div`
  width: 30%;
  position: relative;
  margin-bottom: 20px;
`;

export const ButtonClose = styled(Close)`
  height: 40px;
  cursor: pointer;
  color: #2D3E52;
  margin-right: 10px;
  transition: ease-in-out 300ms;
  &:hover {
    color: #AC5D33;
    transform: rotate(90deg)
  }
`;

