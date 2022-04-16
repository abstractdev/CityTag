import React from "react";
import tokyo from "../assets/images/tokyo/tokyo.jpg";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { ImageContainer } from "../styles/ImageContainer.style";
import { FindTokyo } from "../components/Find";

export function Tokyo() {
  return (
    <>
      <VFlexContainer>
        <FindTokyo />
        <ImageContainer src={tokyo} />
      </VFlexContainer>
    </>
  );
}
