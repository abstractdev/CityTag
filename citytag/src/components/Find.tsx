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
import { FindProps } from "../Interfaces";

export function NewYorkFind(props: FindProps) {
  return (
    <>
      <FindContainer>
        <FindImageContainer
          style={props.broadwayIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={broadway} />
          {props.broadwayText}
        </FindImageContainer>
        <FindImageContainer
          style={props.hotdogIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={hotdog} />
          {props.hotdogText}
        </FindImageContainer>
        <FindImageContainer
          style={props.ilovenyIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={iloveny} />
          {props.ilovenyText}
        </FindImageContainer>
        <FindImageContainer
          style={props.policeIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={police} />
          {props.policeText}
        </FindImageContainer>
      </FindContainer>
    </>
  );
}
export function RioFind(props: FindProps) {
  return (
    <>
      <FindContainer>
        <FindImageContainer
          style={props.dancerIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={dancer} />
          {props.dancerText}
        </FindImageContainer>
        <FindImageContainer style={props.flagIsFound ? { opacity: "30%" } : {}}>
          <FindImage src={flag} />
          {props.flagText}
        </FindImageContainer>
        <FindImageContainer
          style={props.soccerIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={soccer} />
          {props.soccerText}
        </FindImageContainer>
        <FindImageContainer
          style={props.tambourineIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={tambourine} />
          {props.tambourineText}
        </FindImageContainer>
      </FindContainer>
    </>
  );
}
export function TokyoFind(props: FindProps) {
  return (
    <>
      <FindContainer>
        <FindImageContainer
          style={props.geishaIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={geisha} />
          {props.geishaText}
        </FindImageContainer>
        <FindImageContainer
          style={props.parasolIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={parasol} />
          {props.parasolText}
        </FindImageContainer>
        <FindImageContainer
          style={props.sushiIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={sushi} />
          {props.sushiText}
        </FindImageContainer>
        <FindImageContainer style={props.sumoIsFound ? { opacity: "30%" } : {}}>
          <FindImage src={sumo} />
          {props.sumoText}
        </FindImageContainer>
      </FindContainer>
    </>
  );
}
export function ParisFind(props: FindProps) {
  return (
    <>
      <FindContainer>
        <FindImageContainer style={props.brieIsFound ? { opacity: "30%" } : {}}>
          <FindImage src={brie} />
          {props.brieText}
        </FindImageContainer>
        <FindImageContainer
          style={props.fleurdelisIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={fleurdelis} />
          {props.fleurdelisText}
        </FindImageContainer>
        <FindImageContainer
          style={props.monalisaIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={monalisa} />
          {props.monalisaText}
        </FindImageContainer>
        <FindImageContainer
          style={props.tophatIsFound ? { opacity: "30%" } : {}}
        >
          <FindImage src={tophat} />
          {props.tophatText}
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
  color: #fff;
  font-family: "metropolis";
`;

const FindImageContainer = styled(VFlexContainer)`
  height: 100px;
  width: 200px;
  gap: 0.3rem;
  @media screen and (max-width: 600px) {
    font-size: 0;
    height: 60px;
  }
`;

const FindImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
