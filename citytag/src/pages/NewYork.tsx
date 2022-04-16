import React from "react";
import ny from "../assets/images/ny/ny.jpg";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { ImageContainer } from "../styles/ImageContainer.style";
import { FindNy } from "../components/Find";

export function NewYork() {
  return (
    <>
      <VFlexContainer>
        <FindNy />
        <ImageContainer src={ny} />
      </VFlexContainer>
    </>
  );
}
