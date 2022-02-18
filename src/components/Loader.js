import React from 'react';
import { LoaderPaw, LoaderBox, LoaderContainer } from '../styled/Loader';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderBox>
        <LoaderPaw />
        <LoaderPaw />
        <LoaderPaw />
      </LoaderBox>
    </LoaderContainer>
  )
}

export default Loader;
