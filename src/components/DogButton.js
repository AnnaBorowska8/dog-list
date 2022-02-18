import React, { useContext } from 'react';
import { StoreContext } from '../context';
import { DogButtonBox, StyledButton } from '../styled/Button'

const DogButton = ({ dog }) => {

  const { setChosenDog } = useContext(StoreContext);

  const chooseYourDog = (dog) => {
    setChosenDog(dog);
  }

  return (
    <DogButtonBox>
      <StyledButton onClick={() => chooseYourDog(dog)}>
        {dog.breed}&nbsp;
        {dog.subBreed}
      </StyledButton>
    </DogButtonBox>
  )
}
export default DogButton;
