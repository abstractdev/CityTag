import React from "react";
import ny from '../assets/images/ny/ny.jpg'
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { ImageContainer } from "../styles/ImageContainer.style";
import { Find } from "../components/Find";


export function NewYork() {
  return (
    <>
        <VFlexContainer>
          <Find/>
          <ImageContainer src={ny}/>  
        </VFlexContainer>
    </>
  );
}