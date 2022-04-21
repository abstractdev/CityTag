import rio from "../../assets/images/rio/rio.jpg";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { CityImage } from "../../styles/CityImage.styles";
import { RioFind } from "../../components/Find";
import styled from "styled-components";
import { useEffect } from "react";
import { RioDropdown } from "./RioDropdown";
// import { setDoc, doc } from "firebase/firestore";
// import { db } from "../../components/Firebase";
import { CityProps } from "../../Interfaces";

export function Rio(props: CityProps) {
  const {
    mouseX,
    mouseY,
    imageIsClicked,
    clickHistory,
    dancerIsFound,
    flagIsFound,
    soccerIsFound,
    tambourineIsFound,
    isActive,
    time,
    setTime,
    setIsActive,
    setDancerIsFound,
    setFlagIsFound,
    setSoccerIsFound,
    setTambourineIsFound,
    setClickHistory,
    handleMouseClickPosition,
    checkFirebaseForMatch,
  } = props;
  const dancerText = "Dancer";
  const flagText = "Flag";
  const soccerText = "Soccer Ball";
  const tambourineText = "Tambourine";
  return (
    <>
      <RioContainer>
        <RioFind
          dancerText={dancerText}
          flagText={flagText}
          soccerText={soccerText}
          tambourineText={tambourineText}
          dancerIsFound={dancerIsFound}
          flagIsFound={flagIsFound}
          soccerIsFound={soccerIsFound}
          tambourineIsFound={tambourineIsFound}
        />
        <CityImageContainer
          onClick={(event) => handleMouseClickPosition(event)}
        >
          <CityImage src={rio} />
          <DancerDiv
            dancerIsFound={dancerIsFound}
            data-id="dancerDiv"
            onClick={(event) => checkFirebaseForMatch(event, "rioFindImages")}
          ></DancerDiv>
          <FlagDiv
            flagIsFound={flagIsFound}
            data-id="flagDiv"
            onClick={(event) => checkFirebaseForMatch(event, "rioFindImages")}
          ></FlagDiv>
          <SoccerDiv
            soccerIsFound={soccerIsFound}
            data-id="soccerDiv"
            onClick={(event) => checkFirebaseForMatch(event, "rioFindImages")}
          ></SoccerDiv>
          <TambourineDiv
            tambourineIsFound={tambourineIsFound}
            data-id="tambourineDiv"
            onClick={(event) => checkFirebaseForMatch(event, "rioFindImages")}
          ></TambourineDiv>
          <RioDropdown
            mouseX={mouseX}
            mouseY={mouseY}
            imageIsClicked={imageIsClicked}
            clickHistory={clickHistory}
            setClickHistory={setClickHistory}
            dancerText={dancerText}
            flagText={flagText}
            soccerText={soccerText}
            tambourineText={tambourineText}
            setDancerIsFound={setDancerIsFound}
            setFlagIsFound={setFlagIsFound}
            setSoccerIsFound={setSoccerIsFound}
            setTambourineIsFound={setTambourineIsFound}
          />
        </CityImageContainer>
      </RioContainer>
    </>
  );
}

//STYLED COMPONENTS//
interface DivProps {
  dancerIsFound?: boolean;
  flagIsFound?: boolean;
  soccerIsFound?: boolean;
  tambourineIsFound?: boolean;
}
const RioContainer = styled(VFlexContainer)`
  background-color: #00ad73;
`;
const DancerDiv = styled.div<DivProps>`
  width: 5%;
  height: 12%;
  position: absolute;
  border: 5px solid #00ad73;
  left: 77.3%;
  bottom: 52%;
  /* border: ${(props) =>
    props.dancerIsFound ? "5px solid #00ad73" : "none"}; */
  border-radius: 5px;
`;
const FlagDiv = styled.div<DivProps>`
  width: 5%;
  height: 7%;
  position: absolute;
  border: 5px solid #00ad73;
  left: 13.8%;
  bottom: 32%;
  /* border: ${(props) =>
    props.flagIsFound ? "5px solid #00ad73" : "none"}; */
  border-radius: 5px;
`;
const SoccerDiv = styled.div<DivProps>`
  width: 2.3%;
  height: 4%;
  position: absolute;
  border: 5px solid #00ad73;
  left: 57.2%;
  bottom: 10%;
  /* border: ${(props) =>
    props.soccerIsFound ? "5px solid #00ad73" : "none"}; */
  border-radius: 5px;
`;
const TambourineDiv = styled.div<DivProps>`
  width: 4%;
  height: 7.3%;
  position: absolute;
  border: 5px solid #00ad73;
  left: 52.5%;
  bottom: 71.8%;
  /* border: ${(props) =>
    props.tambourineIsFound ? "5px solid #00ad73" : "none"}; */
  border-radius: 5px;
`;
