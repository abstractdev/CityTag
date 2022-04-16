import React from "react";
import styled from "styled-components";
import { FindImageContainer } from "../styles/VFlexContainer.styles";
import broadway from "../assets/images/ny/broadway.jpg";
import hotdog from "../assets/images/ny/hotdog.jpg";
import iloveny from "../assets/images/ny/iloveny.jpg";
import police from "../assets/images/ny/police.jpg";
import dancer from "../assets/images/rio/dancer.jpg";
import flag from "../assets/images/rio/flag.jpg";
import soccer from "../assets/images/rio/soccer.jpg";
import tambourine from "../assets/images/rio/tambourine.jpg";
import geisha from "../assets/images/tokyo/geisha.jpg";
import parasol from "../assets/images/tokyo/parasol.jpg";
import sumo from "../assets/images/tokyo/sumo.jpg";
import sushi from "../assets/images/tokyo/sushi.jpg";
import brie from "../assets/images/paris/brie.jpg";
import fleurdelis from "../assets/images/paris/fleurdelis.jpg";
import monalisa from "../assets/images/paris/monalisa.jpg";
import tophat from "../assets/images/paris/tophat.jpg";

export function FindNy() {
  return (
    <>
      <FindContainer>
        <FindImageContainer>
          <FindImage src={broadway} />
          Broadway Sign
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={hotdog} />
          Hot Dog Vendor
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={iloveny} />I Love NY Shirt
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={police} />
          NYPD Officer
        </FindImageContainer>
      </FindContainer>
    </>
  );
}
export function FindRio() {
  return (
    <>
      <FindContainer>
        <FindImageContainer>
          <FindImage src={dancer} />
          Dancer
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={flag} />
          Flag
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={soccer} />
          Soccer Ball
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={tambourine} />
          Tambourine
        </FindImageContainer>
      </FindContainer>
    </>
  );
}
export function FindTokyo() {
  return (
    <>
      <FindContainer>
        <FindImageContainer>
          <FindImage src={geisha} />
          Geisha
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={parasol} />
          Parasol
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={sushi} />
          Sushi
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={sumo} />
          Sumo Wrestler
        </FindImageContainer>
      </FindContainer>
    </>
  );
}
export function FindParis() {
  return (
    <>
      <FindContainer>
        <FindImageContainer>
          <FindImage src={brie} />
          Brie
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={fleurdelis} />
          Fleur De Lis
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={monalisa} />
          Mona Lisa
        </FindImageContainer>
        <FindImageContainer>
          <FindImage src={tophat} />
          Tophat
        </FindImageContainer>
      </FindContainer>
    </>
  );
}

const FindContainer = styled.div`
  margin: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
`;

const FindImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
