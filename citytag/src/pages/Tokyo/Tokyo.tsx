import tokyo from "../../assets/images/tokyo/tokyo.jpg";
import { TokyoFind } from "../../components/Find";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { CityImage } from "../../styles/CityImage.styles";
import styled from "styled-components";
// import { useState } from "react";
import { TokyoDropdown } from "./TokyoDropdown";
// import { setDoc, doc } from "firebase/firestore";
// import { db } from "../../components/Firebase";
import { CityProps } from "../../Interfaces";

export function Tokyo(props: CityProps) {
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
    geishaIsFound,
    parasolIsFound,
    sushiIsFound,
    sumoIsFound,
    setGeishaIsFound,
    setParasolIsFound,
    setSushiIsFound,
    setSumoIsFound,
    dropdownIsShifted,
  } = props;

  const geishaText = "Geisha";
  const parasolText = "Parasol";
  const sushiText = "Sushi";
  const sumoText = "Sumo Wrestler";

  return (
    <>
      <VFlexContainer>
        <TokyoFind
          geishaText={geishaText}
          parasolText={parasolText}
          sushiText={sushiText}
          sumoText={sumoText}
          geishaIsFound={geishaIsFound}
          parasolIsFound={parasolIsFound}
          sushiIsFound={sushiIsFound}
          sumoIsFound={sumoIsFound}
        />
        <CityImageContainer
          onClick={(event) => handleMouseClickPosition(event)}
        >
          <CityImage src={tokyo} />
          <GeishaDiv
            geishaIsFound={geishaIsFound}
            data-id="geishaDiv"
            onClick={(event) => checkFirebaseForMatch(event, "tokyoFindImages")}
          ></GeishaDiv>
          <ParasolDiv
            parasolIsFound={parasolIsFound}
            data-id="parasolDiv"
            onClick={(event) => checkFirebaseForMatch(event, "tokyoFindImages")}
          ></ParasolDiv>
          <SushiDiv
            sushiIsFound={sushiIsFound}
            data-id="sushiDiv"
            onClick={(event) => checkFirebaseForMatch(event, "tokyoFindImages")}
          ></SushiDiv>
          <SumoDiv
            sumoIsFound={sumoIsFound}
            data-id="sumoDiv"
            onClick={(event) => checkFirebaseForMatch(event, "tokyoFindImages")}
          ></SumoDiv>
          <TokyoDropdown
            mouseX={mouseX}
            mouseY={mouseY}
            imageIsClicked={imageIsClicked}
            clickHistory={clickHistory}
            setClickHistory={setClickHistory}
            geishaText={geishaText}
            parasolText={parasolText}
            sushiText={sushiText}
            sumoText={sumoText}
            setGeishaIsFound={setGeishaIsFound}
            setParasolIsFound={setParasolIsFound}
            setSushiIsFound={setSushiIsFound}
            setSumoIsFound={setSumoIsFound}
            dropdownIsShifted={dropdownIsShifted}
          />
        </CityImageContainer>
      </VFlexContainer>
    </>
  );
}

//STYLED COMPONENTS//
interface DivProps {
  geishaIsFound?: boolean;
  parasolIsFound?: boolean;
  sushiIsFound?: boolean;
  sumoIsFound?: boolean;
}

const GeishaDiv = styled.div<DivProps>`
  width: 4.5%;
  height: 11%;
  position: absolute;
  border: 5px solid #d78ebf;
  left: 61.1%;
  bottom: 59.2%;
  /* border: ${(props) =>
    props.geishaIsFound ? "5px solid #d78ebf" : "none"}; */
  border-radius: 5px;
`;
const ParasolDiv = styled.div<DivProps>`
  width: 3%;
  height: 6.5%;
  position: absolute;
  border: 5px solid #d78ebf;
  left: 29.2%;
  bottom: 76%;
  /* border: ${(props) =>
    props.parasolIsFound ? "5px solid #d78ebf" : "none"}; */
  border-radius: 5px;
`;
const SushiDiv = styled.div<DivProps>`
  width: 3.2%;
  height: 4%;
  position: absolute;
  border: 5px solid #d78ebf;
  left: 56.3%;
  bottom: 92%;
  /* border: ${(props) =>
    props.sushiIsFound ? "5px solid #d78ebf" : "none"}; */
  border-radius: 5px;
`;
const SumoDiv = styled.div<DivProps>`
  width: 6%;
  height: 11.8%;
  position: absolute;
  border: 5px solid #d78ebf;
  left: 82.4%;
  bottom: 17.5%;
  /* border: ${(props) =>
    props.sumoIsFound ? "5px solid #d78ebf" : "none"}; */
  border-radius: 5px;
`;
