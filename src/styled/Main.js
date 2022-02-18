import styled from 'styled-components';
import { Paw } from '@styled-icons/ionicons-outline/Paw';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
    @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
    font-family: 'Oxygen', sans-serif;
  }
`
export const Wrapper = styled.section`
  padding: 40px 60px;
  height: calc(100vh - 180px);
  overflow-y: auto;
`;

export const Container = styled.section`
  min-height: 100vh;
  width: 100%; 
  background: #EDEAE4;
`;

export const Header = styled.header`
  height: 100px;
  background: #D9BC9F;
  display: flex;
  justify-content: center;
  align-items: center
`;

export const StyledPaw = styled(Paw) `
  height: 50px;
  color: #2D3E52;
`

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #2D3E52;
  margin: 0 20px;
`;
