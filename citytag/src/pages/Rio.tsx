import React from "react";
import rio from '../assets/images/rio/rio.jpg'
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { ImageContainer } from "../styles/ImageContainer.style";
import { Find } from "../components/Find";


export function Rio() {
  return (
    <>
        <VFlexContainer>
          <Find/>
          <ImageContainer src={rio}/>  
        </VFlexContainer>
    </>
  );
}