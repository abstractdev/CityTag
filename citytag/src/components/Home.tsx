import React from 'react';
import { HomeContainer } from '../styles/HomeContainer.styles';
import { HomeText } from '../styles/HomeText';
import { HomeContent } from '../styles/HomeContent';
// export interface IAppProps {
// }

export function Home () {
  return (
    <>
      <HomeContainer>
        <HomeText>Choose your city</HomeText>
        <HomeContent />
      </HomeContainer>
    </>
  );
}