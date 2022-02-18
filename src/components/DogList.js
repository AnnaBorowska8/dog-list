import React from 'react';
import { useEffect, useState } from 'react';
import api from '../api/Api';
import DogButton from './DogButton';
import Loader from './Loader';
import { Error } from '../styled/Error';
import { ButtonsList } from '../styled/List';

const DogList = () => {
  const [dogList, setDogList] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('breeds/list/all')
    .then((response) => {
      const data = response.data.message;
      const breadsList = [];
      Object.keys(data).forEach(breed => {
        if (data[breed].length === 0) {
          breadsList.push({ breed: breed })
        } else {
          data[breed].forEach(subBreed => {
            breadsList.push({ breed: breed, subBreed: subBreed })
          })
        }
      })
      setDogList(breadsList);
      setLoaded(true);
    })
    .catch(error => {
      setError(error.message);
      setLoaded(true);
    })
  }, []);

  return (
    <>
    {loaded ? (<ButtonsList>
      {dogList.length && dogList.map((dog) => (
        <DogButton dog={dog} />
      ))}
      {error && <Error>{error}</Error>}
      </ButtonsList>) : <Loader />}
    </>
  )
}
export default DogList;
