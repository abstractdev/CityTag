import rio from "../../assets/images/rio/rio.jpg";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { CityImage } from "../../styles/CityImage.styles";
import { RioFind } from "./RioFind";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { RioDropdown } from "./RioDropdown";
import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "../../components/Firebase";
import { CityProps } from "../../Interfaces";
import { AudioFunctions } from "../../UtlityFunctions";
import { convertMsToDisplayTime } from "../../UtlityFunctions";
import { DivProps } from "../../Interfaces";
import { ErrorSpan } from "../../components/ErrorSpan";
import { UserModal } from "../../components/UserModal";
import { LeaderboardModal } from "../../components/LeaderboardModal";

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
    dropdownIsShifted,
    errorSpanIsVisible,
    handleErrorSpan,
    userModalIsVisible,
    setUserModalIsVisible,
    leaderboardIsVisible,
    setLeaderboardIsVisible,
  } = props;
  const dancerText = "Dancer";
  const flagText = "Flag";
  const soccerText = "Soccer Ball";
  const tambourineText = "Tambourine";
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");

  // useEffect(() => {
  //   let interval: NodeJS.Timer;
  //   if (isActive) {
  //     const docRef = doc(collection(db, "rioUsers"));
  //     setDoc(docRef, { id: docRef.id });
  //     console.log("Document written");
  //     setUserId(docRef.id);

  //     interval = setInterval(() => {
  //       setTime((prev) => prev + 10);
  //     }, 10);
  //   } else if (!isActive) {
  //     clearInterval(interval);
  //     const userRef = doc(db, "rioUsers", userId);
  //     setDoc(
  //       userRef,
  //       { time: time, displayTime: `${convertMsToDisplayTime(time)}` },
  //       { merge: true }
  //     );
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive]);

  useEffect(() => {
    if (dancerIsFound && flagIsFound && soccerIsFound && tambourineIsFound) {
      setIsActive(false);
      setTimeout(() => {
        AudioFunctions().end.play();
      }, 600);
      setTimeout(() => {
        setUserModalIsVisible(true);
      }, 2000);
    }
  }, [
    dancerIsFound,
    flagIsFound,
    soccerIsFound,
    tambourineIsFound,
    setIsActive,
  ]);

  function handleFormSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    setUserModalIsVisible(false);
    const userRef = doc(db, "rioUsers", userId);
    setDoc(userRef, { name: name }, { merge: true });
  }

  function handleOnChange(event: any) {
    setName(event.target.value);
  }
  return (
    <>
      <LeaderboardModal
        cityColor="#00ad73"
        cityFont="rio"
        cityText="Rio De Janeiro"
      />
      <UserModal
        name={name}
        userModalIsVisible={userModalIsVisible}
        setUserModalIsVisible={setUserModalIsVisible}
        handleFormSubmit={handleFormSubmit}
        handleOnChange={handleOnChange}
      />
      <VFlexContainer>
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
          style={{ pointerEvents: !isActive ? "none" : "auto" }}
        >
          <CityImage src={rio} />
          {errorSpanIsVisible && <ErrorSpan />}
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
            dropdownIsShifted={dropdownIsShifted}
            errorSpanIsVisible={errorSpanIsVisible}
            handleErrorSpan={handleErrorSpan}
          />
        </CityImageContainer>
      </VFlexContainer>
    </>
  );
}

//STYLED COMPONENTS//

const DancerDiv = styled.div<DivProps>`
  width: 5%;
  height: 12%;
  position: absolute;
  left: 77.3%;
  bottom: 52%;
  border: ${(props) => (props.dancerIsFound ? "5px solid #00ad73" : "none")};
  outline: ${(props) => (props.dancerIsFound ? "3px solid #121212" : "none")};
  border-radius: 5px;
`;
const FlagDiv = styled.div<DivProps>`
  width: 5%;
  height: 7%;
  position: absolute;
  border: 5px solid #00ad73;
  outline: 3px solid #121212;
  left: 13.8%;
  bottom: 32%;
  border: ${(props) => (props.flagIsFound ? "5px solid #00ad73" : "none")};
  outline: ${(props) => (props.flagIsFound ? "3px solid #121212" : "none")};
  border-radius: 5px;
`;
const SoccerDiv = styled.div<DivProps>`
  width: 2.3%;
  height: 4%;
  position: absolute;
  border: 5px solid #00ad73;
  outline: 3px solid #121212;
  left: 57.2%;
  bottom: 10%;
  border: ${(props) => (props.soccerIsFound ? "5px solid #00ad73" : "none")};
  outline: ${(props) => (props.soccerIsFound ? "3px solid #121212" : "none")};
  border-radius: 5px;
`;
const TambourineDiv = styled.div<DivProps>`
  width: 4%;
  height: 7.3%;
  position: absolute;
  border: 5px solid #00ad73;
  outline: 3px solid #121212;
  left: 52.5%;
  bottom: 71.8%;
  border: ${(props) =>
    props.tambourineIsFound ? "5px solid #00ad73" : "none"};
  outline: ${(props) =>
    props.tambourineIsFound ? "3px solid #121212" : "none"};
  border-radius: 5px;
`;
