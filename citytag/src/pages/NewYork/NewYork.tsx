import ny from "../../assets/images/ny/ny.jpg";
import styled from "styled-components";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImage } from "../../styles/CityImage.styles";
import { NewYorkFind } from "../../components/Find";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { NewYorkDropdown } from "./NewYorkDropdown";
import { useEffect } from "react";
// import { setDoc, doc } from "firebase/firestore";
// import { db } from "../../components/Firebase";
import { CityProps } from "../../Interfaces";

export function NewYork(props: CityProps) {
  const {
    mouseX,
    mouseY,
    imageIsClicked,
    clickHistory,
    broadwayIsFound,
    hotdogIsFound,
    ilovenyIsFound,
    policeIsFound,
    isActive,
    time,
    setTime,
    setIsActive,
    setBroadwayIsFound,
    setHotdogIsFound,
    setIlovenyIsFound,
    setPoliceIsFound,
    setClickHistory,
    handleMouseClickPosition,
    checkFirebaseForMatch,
  } = props;
  const broadwayText = "Broadway Sign";
  const hotdogText = "Hot Dog Vendor";
  const ilovenyText = "I Love NY Shirt";
  const policeText = "NYPD Officer";

  // useEffect(() => {
  //   let interval: NodeJS.Timer;
  //   if (isActive) {

  //     const docRef = doc(db, "nyUsers", id);
  //     setDoc(docRef,{id: id})
  //     console.log("Document written");

  //     interval = setInterval(() => {
  //       setTime((prev) => prev + 10);
  //     }, 10);
  //   } else if (!isActive) {
  //     clearInterval(interval);
  //     const userRef = doc(db, 'nyUsers', id);
  //     setDoc(userRef, { time: time }, { merge: true });
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive]);

  useEffect(() => {
    if (broadwayIsFound && hotdogIsFound && ilovenyIsFound && policeIsFound) {
      setIsActive(false);
    }
  }, [
    broadwayIsFound,
    hotdogIsFound,
    ilovenyIsFound,
    policeIsFound,
    setIsActive,
  ]);

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
            onClick={(event) => checkFirebaseForMatch(event, "nyFindImages")}
          ></BroadwayDiv>
          <HotdogDiv
            hotdogIsFound={hotdogIsFound}
            data-id="hotdogDiv"
            onClick={(event) => checkFirebaseForMatch(event, "nyFindImages")}
          ></HotdogDiv>
          <IlovenyDiv
            ilovenyIsFound={ilovenyIsFound}
            data-id="ilovenyDiv"
            onClick={(event) => checkFirebaseForMatch(event, "nyFindImages")}
          ></IlovenyDiv>
          <PoliceDiv
            policeIsFound={policeIsFound}
            data-id="policeDiv"
            onClick={(event) => checkFirebaseForMatch(event, "nyFindImages")}
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
  border: ${(props) => (props.broadwayIsFound ? "5px solid #f2c205" : "none")};
  border-radius: 5px;
`;
const HotdogDiv = styled.div<DivProps>`
  width: 3%;
  height: 9%;
  position: absolute;
  left: 15.5%;
  bottom: 32%;
  border: ${(props) => (props.hotdogIsFound ? "5px solid #f2c205" : "none")};
  border-radius: 5px;
`;
const IlovenyDiv = styled.div<DivProps>`
  width: 2.7%;
  height: 9%;
  position: absolute;
  left: 46%;
  bottom: 42%;
  border: ${(props) => (props.ilovenyIsFound ? "5px solid #f2c205" : "none")};
  border-radius: 5px;
`;
const PoliceDiv = styled.div<DivProps>`
  width: 3%;
  height: 8%;
  position: absolute;
  left: 52%;
  bottom: 61%;
  border: ${(props) => (props.policeIsFound ? "5px solid #f2c205" : "none")};
  border-radius: 5px;
`;
