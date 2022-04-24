import {
  FindContainer,
  FindImageContainer,
  FindImage,
} from "../../styles/Find.styles";
import { FindProps } from "../../Interfaces";
import brie from "../../assets/images/paris/brie.jpg";
import fleurdelis from "../../assets/images/paris/fleurdelis.jpg";
import monalisa from "../../assets/images/paris/monalisa.jpg";
import tophat from "../../assets/images/paris/tophat.jpg";

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
