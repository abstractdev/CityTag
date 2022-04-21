import paris from "../../assets/images/paris/paris.jpg";
import { ParisFind } from "../../components/Find";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { CityImage } from "../../styles/CityImage.styles";
import styled from "styled-components";
import { useEffect } from "react";
import { ParisDropdown } from "./ParisDropdown";
// import { setDoc, doc } from "firebase/firestore";
// import { db } from "../../components/Firebase";
import { CityProps } from "../../Interfaces";

export function Paris(props: CityProps) {
  const {
    mouseX,
    mouseY,
    imageIsClicked,
    clickHistory,
    isActive,
    time,
    setTime,
    setIsActive,
    setClickHistory,
    handleMouseClickPosition,
    checkFirebaseForMatch,
    brieIsFound,
    fleurdelisIsFound,
    monalisaIsFound,
    tophatIsFound,
    setBrieIsFound,
    setFleurdelisIsFound,
    setMonalisaIsFound,
    setTophatIsFound,
    dropdownIsShifted,
  } = props;

  const brieText = "Brie";
  const fleurdelisText = "Fleur De Lis";
  const monalisaText = "Mona lisa";
  const tophatText = "Tophat";
  return (
    <>
      <VFlexContainer>
        <ParisFind
          brieText={brieText}
          fleurdelisText={fleurdelisText}
          monalisaText={monalisaText}
          tophatText={tophatText}
          brieIsFound={brieIsFound}
          fleurdelisIsFound={fleurdelisIsFound}
          monalisaIsFound={monalisaIsFound}
          tophatIsFound={tophatIsFound}
        />
        <CityImageContainer
          onClick={(event) => handleMouseClickPosition(event)}
        >
          <CityImage src={paris} />
          <BrieDiv
            brieIsFound={brieIsFound}
            data-id="brieDiv"
            onClick={(event) => checkFirebaseForMatch(event, "parisFindImages")}
          ></BrieDiv>
          <FleurdelisDiv
            fleurdelisIsFound={fleurdelisIsFound}
            data-id="fleurdelisDiv"
            onClick={(event) => checkFirebaseForMatch(event, "parisFindImages")}
          ></FleurdelisDiv>
          <MonalisaDiv
            monalisaIsFound={monalisaIsFound}
            data-id="monalisaDiv"
            onClick={(event) => checkFirebaseForMatch(event, "parisFindImages")}
          ></MonalisaDiv>
          <TophatDiv
            tophatIsFound={tophatIsFound}
            data-id="tophatDiv"
            onClick={(event) => checkFirebaseForMatch(event, "parisFindImages")}
          ></TophatDiv>
          <ParisDropdown
            mouseX={mouseX}
            mouseY={mouseY}
            imageIsClicked={imageIsClicked}
            clickHistory={clickHistory}
            setClickHistory={setClickHistory}
            brieText={brieText}
            fleurdelisText={fleurdelisText}
            monalisaText={monalisaText}
            tophatText={tophatText}
            setBrieIsFound={setBrieIsFound}
            setFleurdelisIsFound={setFleurdelisIsFound}
            setMonalisaIsFound={setMonalisaIsFound}
            setTophatIsFound={setTophatIsFound}
            dropdownIsShifted={dropdownIsShifted}
          />
        </CityImageContainer>
      </VFlexContainer>
    </>
  );
}

//STYLED COMPONENTS//
interface DivProps {
  brieIsFound?: boolean;
  fleurdelisIsFound?: boolean;
  monalisaIsFound?: boolean;
  tophatIsFound?: boolean;
}

const BrieDiv = styled.div<DivProps>`
  width: 2.5%;
  height: 4.3%;
  position: absolute;
  border: 5px solid #f94910;
  left: 53.4%;
  bottom: 60%;
  /* border: ${(props) =>
    props.brieIsFound ? "5px solid #f94910" : "none"}; */
  border-radius: 5px;
`;
const FleurdelisDiv = styled.div<DivProps>`
  width: 3%;
  height: 4.8%;
  position: absolute;
  border: 5px solid #f94910;
  left: 66.4%;
  bottom: 95.2%;
  /* border: ${(props) =>
    props.fleurdelisIsFound ? "5px solid #f94910" : "none"}; */
  border-radius: 5px;
`;
const MonalisaDiv = styled.div<DivProps>`
  width: 4%;
  height: 8.7%;
  position: absolute;
  border: 5px solid #f94910;
  left: 77.5%;
  bottom: 54.5%;
  /* border: ${(props) =>
    props.monalisaIsFound ? "5px solid #f94910" : "none"}; */
  border-radius: 5px;
`;
const TophatDiv = styled.div<DivProps>`
  width: 2.7%;
  height: 4.4%;
  position: absolute;
  border: 5px solid #f94910;
  left: 77.4%;
  bottom: 9.3%;
  /* border: ${(props) =>
    props.tophatIsFound ? "5px solid #f94910" : "none"}; */
  border-radius: 5px;
`;
