import styled from "styled-components";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
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

interface nyProps {
  broadwayText: string,
  hotdogText: string,
  ilovenyText: string,
  policeText: string,
  broadwayIsFound: boolean,
  hotdogIsFound: boolean,
  ilovenyIsFound: boolean,
  policeIsFound: boolean,
}

export function NewYorkFind(props: nyProps) {
  return (
    <>
      <FindContainer>
        <FindImageContainer style={ props.broadwayIsFound ? { opacity:'30%'} : {}}>
          <FindImage src={broadway} />
          {props.broadwayText}
        </FindImageContainer>
        <FindImageContainer style={ props.hotdogIsFound ? { opacity:'30%'} : {}}>
          <FindImage src={hotdog} />
          {props.hotdogText}
        </FindImageContainer>
        <FindImageContainer style={ props.ilovenyIsFound ? { opacity:'30%'} : {}}>
          <FindImage src={iloveny} />{props.ilovenyText}
        </FindImageContainer>
        <FindImageContainer style={ props.policeIsFound ? { opacity:'30%'} : {}}>
          <FindImage src={police} />
          {props.policeText}
        </FindImageContainer>
      </FindContainer>
    </>
  );
}
export function RioFind() {
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
export function TokyoFind() {
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
export function ParisFind() {
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
  color: #FFF;
`;

const FindImageContainer = styled(VFlexContainer)`
  height: 100px;
  width: 200px;
  gap: .3rem;
@media screen and (max-width: 600px){
  font-size: 0;
  height: 60px;
}
`

const FindImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;