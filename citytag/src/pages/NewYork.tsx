import ny from "../assets/images/ny/ny.jpg";
import styled from "styled-components";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { CityImage } from "../styles/CityImage.styles";
import { NewYorkFind } from "../components/Find";
import { CityImageContainer } from "../styles/CityImage.styles";
import { NewYorkDropdown } from "../components/NewYorkDropdown";

interface nyProps {
  mouseX: number;
  mouseY: number;
  imageIsClicked: boolean;
  clickHistory: string[];
  broadwayIsFound: boolean;
  hotdogIsFound: boolean;
  ilovenyIsFound: boolean;
  policeIsFound: boolean;
  setBroadwayIsFound: (broadwayIsFound: boolean) => void;
  setHotdogIsFound: (hotdogIsFound: boolean) => void;
  setIlovenyIsFound: (ilovenyIsFound: boolean) => void;
  setPoliceIsFound: (policeIsFound: boolean) => void;
  setClickHistory: (clickHistory: string[]) => void;
  handleMouseClickPosition: (event: React.MouseEvent) => void;
  checkFirebaseForMatch: (event: any, cityName: string) => void;
}

export function NewYork(props: nyProps) {
  const broadwayText = "Broadway Sign";
  const hotdogText = "Hot Dog Vendor";
  const ilovenyText = "I Love NY Shirt";
  const policeText = "NYPD Officer";

  return (
    <>
      <VFlexContainer>
        <NewYorkFind
          broadwayText={broadwayText}
          hotdogText={hotdogText}
          ilovenyText={ilovenyText}
          policeText={policeText}
          broadwayIsFound={props.broadwayIsFound}
          hotdogIsFound={props.hotdogIsFound}
          ilovenyIsFound={props.ilovenyIsFound}
          policeIsFound={props.policeIsFound}
        />
        <CityImageContainer
          onClick={(event) => props.handleMouseClickPosition(event)}
        >
          <CityImage src={ny} />
          <BroadwayDiv
            broadwayIsFound={props.broadwayIsFound}
            data-id="broadwayDiv"
            onClick={(event) => props.checkFirebaseForMatch(event, "ny")}
          ></BroadwayDiv>
          <HotdogDiv
            hotdogIsFound={props.hotdogIsFound}
            data-id="hotdogDiv"
            onClick={(event) => props.checkFirebaseForMatch(event, "ny")}
          ></HotdogDiv>
          <IlovenyDiv
            ilovenyIsFound={props.ilovenyIsFound}
            data-id="ilovenyDiv"
            onClick={(event) => props.checkFirebaseForMatch(event, "ny")}
          ></IlovenyDiv>
          <PoliceDiv
            policeIsFound={props.policeIsFound}
            data-id="policeDiv"
            onClick={(event) => props.checkFirebaseForMatch(event, "ny")}
          ></PoliceDiv>
          <NewYorkDropdown
            mouseX={props.mouseX}
            mouseY={props.mouseY}
            broadwayText={broadwayText}
            hotdogText={hotdogText}
            ilovenyText={ilovenyText}
            policeText={policeText}
            imageIsClicked={props.imageIsClicked}
            clickHistory={props.clickHistory}
            setClickHistory={props.setClickHistory}
            // broadwayIsFound={broadwayIsFound}
            // hotdogIsFound={hotdogIsFound}
            // ilovenyIsFound={ilovenyIsFound}
            // policeIsFound={policeIsFound}
            setBroadwayIsFound={props.setBroadwayIsFound}
            setHotdogIsFound={props.setHotdogIsFound}
            setIlovenyIsFound={props.setIlovenyIsFound}
            setPoliceIsFound={props.setPoliceIsFound}
          />
        </CityImageContainer>
      </VFlexContainer>
    </>
  );
}


//STYLED COMPONENTS//
interface DivProps {
  broadwayIsFound?: boolean;
  hotdogIsFound?: boolean;
  ilovenyIsFound?: boolean;
  policeIsFound?: boolean;
}
const BroadwayDiv = styled.div<DivProps>`
  width: 7%;
  height: 6.2%;
  position: absolute;
  left: 53.5%;
  bottom: 84.2%;
  border: ${(props) => (props.broadwayIsFound ? "3px solid red" : "none")};
  border-radius: 5px;
`;
const HotdogDiv = styled.div<DivProps>`
  width: 3%;
  height: 9%;
  position: absolute;
  left: 15.5%;
  bottom: 32%;
  border: ${(props) => (props.hotdogIsFound ? "3px solid red" : "none")};
  border-radius: 5px;
`;
const IlovenyDiv = styled.div<DivProps>`
  width: 2.7%;
  height: 9%;
  position: absolute;
  left: 46%;
  bottom: 42%;
  border: ${(props) => (props.ilovenyIsFound ? "3px solid red" : "none")};
  border-radius: 5px;
`;
const PoliceDiv = styled.div<DivProps>`
  width: 3%;
  height: 8%;
  position: absolute;
  left: 52%;
  bottom: 61%;
  border: ${(props) => (props.policeIsFound ? "3px solid red" : "none")};
  border-radius: 5px;
`;
