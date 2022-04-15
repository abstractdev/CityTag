import React from 'react';
import { HomeContainer } from '../styles/HomeContainer.styles';
import { HomeText } from '../styles/HomeText';
import { HomeContent } from '../styles/HomeContent';
import { HomeNy, HomeRio, HomeTokyo, HomeParis } from '../styles/HomeImages.styles';
import { Link } from 'react-router-dom';

// interface Props {
// }

export function Home () {
  return (
    <>
      <HomeContainer>
        <HomeText>Choose your city</HomeText>
        <HomeContent>
          <Link to="newyork">
            <HomeNy />
          </Link>
          <Link to="rio">
            <HomeRio />
          </Link>
          <Link to="tokyo">
            <HomeTokyo />
          </Link>
          <Link to="paris">
            <HomeParis />
          </Link>
         
        </HomeContent>
      </HomeContainer>
    </>
  );
}

// import * as React from 'react';

// export interface IAppProps {
// }

// export default function App (props: IAppProps) {
//   return (
//     <div>
      
//     </div>
//   );
// }
