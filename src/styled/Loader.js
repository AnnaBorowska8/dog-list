import { Paw } from '@styled-icons/ionicons-outline/Paw';
import styled, { keyframes } from 'styled-components';

const Grow = keyframes `
  from {
    transform: scale(0.7) rotate(90deg)
  }
  to {
    transform: scale(1) rotate(90deg)
  }
`;

export const LoaderPaw = styled(Paw) `
  height: 50px;
  color: #CAAAA9;
  top: 0;
  position: absolute;
  transform: scale(0.7) rotate(90deg);
  &:first-child{
    left:0;
    animation: ${Grow} 700ms linear 0s infinite;
  }
  &:nth-child(2){
    animation: ${Grow} 700ms linear 200ms infinite;
    left: 78px;
  }
  &:last-child{
    right: 0;
    margin-right: 0;
    animation: ${Grow} 700ms linear 400ms infinite;
  }
`
export const LoaderBox = styled.div `
  height: 50px;
  width: 200px;
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoaderContainer = styled.div `
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
