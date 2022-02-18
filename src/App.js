import React, { useContext } from 'react';
import styled from "styled-components";
import { Paw } from '@styled-icons/ionicons-outline/Paw';
import DogList from './components/DogList';
import Modal from './components/Modal';
import { StoreContext } from './context';

const StyledPaw = styled(Paw) `
  height: 50px;
  color: #2D3E52;
`

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: #2D3E52;
  margin: 0 20px;
`;

const Wrapper = styled.section`
  padding: 40px 60px;
  height: calc(100vh - 180px);
  overflow-y: auto;
`;

const Container = styled.section`
  min-height: 100vh;
  width: 100%; 
  background: #EDEAE4;
`;

const Header = styled.header`
  height: 100px;
  background: #D9BC9F;
  display: flex;
  justify-content: center;
  align-items: center
`;

function App() {
  const { chosenDog } = useContext(StoreContext);

  return (
    <Container>
      <Header>
        <StyledPaw />
        <Title>DogApp</Title>
      </Header>
      <Wrapper>
        <DogList />
      </Wrapper>
      {chosenDog && Object.keys(chosenDog).length !== 0  && <Modal />}
    </Container>
  );
}

export default App;
