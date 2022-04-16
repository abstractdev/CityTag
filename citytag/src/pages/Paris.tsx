import React from "react";
import paris from "../assets/images/paris/paris.jpg";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { ImageContainer } from "../styles/ImageContainer.style";
import { FindParis } from "../components/Find";

export function Paris() {
  return (
    <>
      <VFlexContainer>
        <FindParis />
        <ImageContainer src={paris} />
      </VFlexContainer>
    </>
  );
}
