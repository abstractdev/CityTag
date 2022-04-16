import React from "react";
import tokyo from '../assets/images/tokyo/tokyo.jpg'
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { ImageContainer } from "../styles/ImageContainer.style";
import { Find } from "../components/Find";


export function Tokyo() {
  return (
    <>
        <VFlexContainer>
          <Find/>
          <ImageContainer src={tokyo}/>  
        </VFlexContainer>
    </>
  );
}