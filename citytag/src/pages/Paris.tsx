import React from "react";
import paris from '../assets/images/paris/paris.jpg'
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { ImageContainer } from "../styles/ImageContainer.style";
import { Find } from "../components/Find";


export function Paris() {
  return (
    <>
        <VFlexContainer>
          <Find/>
          <ImageContainer src={paris}/>  
        </VFlexContainer>
    </>
  );
}