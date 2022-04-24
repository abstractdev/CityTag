import {
  FindContainer,
  FindImageContainer,
  FindImage,
} from "../../styles/Find.styles";
import { FindProps } from "../../Interfaces";
import dancer from "../../assets/images/rio/dancer.jpg";
import flag from "../../assets/images/rio/flag.jpg";
import soccer from "../../assets/images/rio/soccer.jpg";
import tambourine from "../../assets/images/rio/tambourine.jpg";

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
