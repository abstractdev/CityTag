import ny from "../assets/images/ny/ny.jpg";
import styled from "styled-components";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { CityImage } from "../styles/CityImage.styles";
import { NewYorkFind } from "../components/Find";
import { CityImageContainer } from "../styles/CityImage.styles";
import { NewYorkDropdown } from "../components/NewYorkDropdown";
import { useEffect } from "react";

interface nyProps {
  mouseX: number;
  mouseY: number;
  imageIsClicked: boolean;
  clickHistory: string[];
  broadwayIsFound: boolean;
  hotdogIsFound: boolean;
  ilovenyIsFound: boolean;
  policeIsFound: boolean;
  isActive: boolean;
  time: number;
  setTime: (prevstate: (time:number) => number) => void;
  setIsActive:(isActive: boolean) => void;
  setBroadwayIsFound: (broadwayIsFound: boolean) => void;
  setHotdogIsFound: (hotdogIsFound: boolean) => void;
  setIlovenyIsFound: (ilovenyIsFound: boolean) => void;
  setPoliceIsFound: (policeIsFound: boolean) => void;
  setClickHistory: (clickHistory: string[]) => void;
  handleMouseClickPosition: (event: React.MouseEvent) => void;
  checkFirebaseForMatch: (event: any, cityName: string) => void;
}

export function NewYork(props: nyProps) {
  const {mouseX, mouseY, imageIsClicked, clickHistory, broadwayIsFound, hotdogIsFound, ilovenyIsFound, policeIsFound, isActive, setTime, setIsActive, setBroadwayIsFound, setHotdogIsFound, setIlovenyIsFound, setPoliceIsFound, setClickHistory, handleMouseClickPosition, checkFirebaseForMatch} = props;
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, setTime]);

  useEffect(() => {
    if (
      broadwayIsFound && hotdogIsFound && ilovenyIsFound && policeIsFound
    ) {
      setIsActive(false);
    }
  }, [broadwayIsFound, hotdogIsFound, ilovenyIsFound, policeIsFound, setIsActive]);

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
          broadwayIsFound={broadwayIsFound}
          hotdogIsFound={hotdogIsFound}
          ilovenyIsFound={ilovenyIsFound}
          policeIsFound={policeIsFound}
        />
        <CityImageContainer
          onClick={(event) => handleMouseClickPosition(event)}
        >
          <CityImage src={ny} />
          <BroadwayDiv
            broadwayIsFound={broadwayIsFound}
            data-id="broadwayDiv"
            onClick={(event) => checkFirebaseForMatch(event, "ny")}
          ></BroadwayDiv>
          <HotdogDiv
            hotdogIsFound={hotdogIsFound}
            data-id="hotdogDiv"
            onClick={(event) => checkFirebaseForMatch(event, "ny")}
          ></HotdogDiv>
          <IlovenyDiv
            ilovenyIsFound={ilovenyIsFound}
            data-id="ilovenyDiv"
            onClick={(event) => checkFirebaseForMatch(event, "ny")}
          ></IlovenyDiv>
          <PoliceDiv
            policeIsFound={policeIsFound}
            data-id="policeDiv"
            onClick={(event) => checkFirebaseForMatch(event, "ny")}
          ></PoliceDiv>
          <NewYorkDropdown
            mouseX={mouseX}
            mouseY={mouseY}
            broadwayText={broadwayText}
            hotdogText={hotdogText}
            ilovenyText={ilovenyText}
            policeText={policeText}
            imageIsClicked={imageIsClicked}
            clickHistory={clickHistory}
            setClickHistory={setClickHistory}
            setBroadwayIsFound={setBroadwayIsFound}
            setHotdogIsFound={setHotdogIsFound}
            setIlovenyIsFound={setIlovenyIsFound}
            setPoliceIsFound={setPoliceIsFound}
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
  border: ${(props) => (props.broadwayIsFound ? "3px solid black" : "none")};
  border-radius: 5px;
`;
const HotdogDiv = styled.div<DivProps>`
  width: 3%;
  height: 9%;
  position: absolute;
  left: 15.5%;
  bottom: 32%;
  border: ${(props) => (props.hotdogIsFound ? "3px solid black" : "none")};
  border-radius: 5px;
`;
const IlovenyDiv = styled.div<DivProps>`
  width: 2.7%;
  height: 9%;
  position: absolute;
  left: 46%;
  bottom: 42%;
  border: ${(props) => (props.ilovenyIsFound ? "3px solid black" : "none")};
  border-radius: 5px;
`;
const PoliceDiv = styled.div<DivProps>`
  width: 3%;
  height: 8%;
  position: absolute;
  left: 52%;
  bottom: 61%;
  border: ${(props) => (props.policeIsFound ? "3px solid black" : "none")};
  border-radius: 5px;
`;
