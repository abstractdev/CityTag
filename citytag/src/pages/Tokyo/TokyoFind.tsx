import {
  FindContainer,
  FindImageContainer,
  FindImage,
} from "../../styles/Find.styles";
import { FindProps } from "../../Interfaces";
import geisha from "../../assets/images/tokyo/geisha.jpg";
import parasol from "../../assets/images/tokyo/parasol.jpg";
import sumo from "../../assets/images/tokyo/sumo.jpg";
import sushi from "../../assets/images/tokyo/sushi.jpg";

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
