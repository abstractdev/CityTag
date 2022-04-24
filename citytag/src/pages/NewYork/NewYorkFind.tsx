import {
  FindContainer,
  FindImageContainer,
  FindImage,
} from "../../styles/Find.styles";
import { FindProps } from "../../Interfaces";
import broadway from "../../assets/images/ny/broadway.jpg";
import hotdog from "../../assets/images/ny/hotdog.jpg";
import iloveny from "../../assets/images/ny/iloveny.jpg";
import police from "../../assets/images/ny/police.jpg";

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
