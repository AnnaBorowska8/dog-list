import React, { useContext } from 'react';
import DogList from './components/DogList';
import Modal from './components/Modal';
import { StoreContext } from './context';
import {
  Container, GlobalStyle,
  Header,
  StyledPaw,
  Title,
  Wrapper,
} from './styled/Main';

function App() {
  const { chosenDog } = useContext(StoreContext);

  return (
    <>
      <GlobalStyle />
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
      </>
  );
}

export default App;
