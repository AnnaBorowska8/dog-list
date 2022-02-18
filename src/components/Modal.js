import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context';
import api from '../api/Api';
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalBox,
  ModalImage,
  ModalContent,
  ModalFooter
} from '../styled/Modal';
import { ButtonClose, ImageButton } from '../styled/Button';
import { Error } from '../styled/Error';
import Loader from './Loader';

const Modal = () => {
  const [dogImage, setDogImage] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  const { chosenDog, setChosenDog } = useContext(StoreContext);

  const getDogImage = () => {
    setLoaded(false);
    const subBreed = chosenDog.subBreed ? `${chosenDog.subBreed}/` : '';
    api.get(`breed/${chosenDog.breed}/${subBreed}images/random`)
    .then((response) => {
      const data = response.data.message;
      setDogImage(data);
      setLoaded(true);
    })
    .catch(error => {
      setError(error.message);
      setLoaded(true);
    })
  }
  useEffect(() => {
    getDogImage();
  }, []);

  return (
    <ModalContainer>
      <ModalBox>
        <ModalHeader>
          <ModalTitle>
            {chosenDog.breed}&nbsp;
            {chosenDog.subBreed}
          </ModalTitle>
          <ButtonClose onClick={() => setChosenDog('')}/>
        </ModalHeader>
        <ModalContent>
          {loaded ? (
            <>
            <ModalImage src={dogImage} isVisible={loaded && !error}/>
            {error && <Error>{error}</Error>}
            </>
            ) : <Loader />}
        </ModalContent>
        <ModalFooter>
          <ImageButton onClick={getDogImage}>
            Get Another Image
          </ImageButton>
        </ModalFooter>
      </ModalBox>
    </ModalContainer>
  )
}
export default Modal;
