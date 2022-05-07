import paris from "../../assets/images/paris/paris.jpg";
import { ParisFind } from "./ParisFind";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { CityImage } from "../../styles/CityImage.styles";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ParisDropdown } from "./ParisDropdown";
import {
  setDoc,
  getDocs,
  deleteDoc,
  doc,
  collection,
} from "firebase/firestore";
import { db } from "../../components/Firebase";
import { CityProps } from "../../Interfaces";
import { AudioFunctions } from "../../UtlityFunctions";
import { convertMsToDisplayTime } from "../../UtlityFunctions";
import { DivProps } from "../../Interfaces";
import { ErrorSpan } from "../../components/ErrorSpan";
import { UserModal } from "../../components/UserModal";
import { LeaderboardModal } from "../../components/LeaderboardModal";
import { ScoreErrorSpan } from "../../components/ScoreErrorSpan";

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
    errorSpanIsVisible,
    handleErrorSpan,
    userModalIsVisible,
    setUserModalIsVisible,
    leaderboardIsVisible,
    setLeaderboardIsVisible,
    parisUserData,
    setParisUserData,
    handleScoreErrorSpan,
    scoreErrorSpanIsVisible,
  } = props;

  const brieText = "Brie";
  const fleurdelisText = "Fleur De Lis";
  const monalisaText = "Mona lisa";
  const tophatText = "Tophat";

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive) {
      const docRef = doc(collection(db, "users"));
      setDoc(docRef, { id: docRef.id });
      console.log("Document written");
      setUserId(docRef.id);

      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!isActive) {
      clearInterval(interval);
      const userRef = doc(db, "users", userId);
      setDoc(
        userRef,
        {
          city: "paris",
          time: time,
          displayTime: `${convertMsToDisplayTime(time)}`,
        },
        { merge: true }
      );
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (brieIsFound && fleurdelisIsFound && monalisaIsFound && tophatIsFound) {
      setIsActive(false);
      setTimeout(() => {
        AudioFunctions().end.play();
      }, 600);
      setTimeout(() => {
        setUserModalIsVisible(true);
      }, 2000);
    }
  }, [
    brieIsFound,
    fleurdelisIsFound,
    monalisaIsFound,
    tophatIsFound,
    setIsActive,
  ]);

  function handleFormSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    setUserModalIsVisible(false);
    const userRef = doc(db, "users", userId);
    setDoc(
      userRef,
      { name: name === "" ? "Anonymous" : name },
      { merge: true }
    );
    setTimeout(() => {
      const getUserDataFromFirebase = (async () => {
        let temp: any[] = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        const parisFiltered = temp.filter((e) => e.city === "paris");
        //validate score
        const parisScores = parisUserData.map((e) => e.time);
        const highestTime = Math.max(...parisScores);
        if (time < highestTime) {
          setParisUserData([...parisFiltered]);
          setLeaderboardIsVisible(true);
        } else {
          await deleteDoc(doc(db, "users", userId));
          handleScoreErrorSpan();
        }
      })();
    }, 100);
  }

  function handleOnChange(event: any) {
    setName(event.target.value);
  }

  return (
    <>
      <LeaderboardModal
        cityColor={"#f94910"}
        cityFont={"paris"}
        cityText={"Paris"}
        leaderboardIsVisible={leaderboardIsVisible}
        setLeaderboardIsVisible={setLeaderboardIsVisible}
        parisUserData={parisUserData}
      />
      <UserModal
        name={name}
        userModalIsVisible={userModalIsVisible}
        setUserModalIsVisible={setUserModalIsVisible}
        handleFormSubmit={handleFormSubmit}
        handleOnChange={handleOnChange}
      />
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
          style={{ pointerEvents: !isActive ? "none" : "auto" }}
        >
          <CityImage src={paris} />
          {errorSpanIsVisible && <ErrorSpan />}
          {scoreErrorSpanIsVisible && <ScoreErrorSpan />}
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
            handleErrorSpan={handleErrorSpan}
          />
        </CityImageContainer>
      </VFlexContainer>
    </>
  );
}

//STYLED COMPONENTS//

const BrieDiv = styled.div<DivProps>`
  width: 2.5%;
  height: 4.3%;
  position: absolute;
  left: 53.4%;
  bottom: 60%;
  border: ${(props) => (props.brieIsFound ? "5px solid #f94910" : "none")};
  outline: ${(props) => (props.brieIsFound ? "3px solid #121212" : "none")};
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.brieIsFound ? "2px solid #f94910" : "none")};
    outline: ${(props) => (props.brieIsFound ? "1px solid #121212" : "none")};
  }
  border-radius: 5px;
`;
const FleurdelisDiv = styled.div<DivProps>`
  width: 3%;
  height: 4.8%;
  position: absolute;
  left: 66.4%;
  bottom: 95.2%;
  border: ${(props) =>
    props.fleurdelisIsFound ? "5px solid #f94910" : "none"};
  outline: ${(props) =>
    props.fleurdelisIsFound ? "3px solid #121212" : "none"};
  @media screen and (max-width: 670px) {
    border: ${(props) =>
      props.fleurdelisIsFound ? "2px solid #f94910" : "none"};
    outline: ${(props) =>
      props.fleurdelisIsFound ? "1px solid #121212" : "none"};
  }
  border-radius: 5px;
`;
const MonalisaDiv = styled.div<DivProps>`
  width: 4%;
  height: 8.7%;
  position: absolute;
  left: 77.5%;
  bottom: 54.5%;
  border: ${(props) => (props.monalisaIsFound ? "5px solid #f94910" : "none")};
  outline: ${(props) => (props.monalisaIsFound ? "3px solid #121212" : "none")};
  @media screen and (max-width: 670px) {
    border: ${(props) =>
      props.monalisaIsFound ? "2px solid #f94910" : "none"};
    outline: ${(props) =>
      props.monalisaIsFound ? "1px solid #121212" : "none"};
  }
  border-radius: 5px;
`;
const TophatDiv = styled.div<DivProps>`
  width: 2.7%;
  height: 4.4%;
  position: absolute;
  left: 77.4%;
  bottom: 9.3%;
  border: ${(props) => (props.tophatIsFound ? "5px solid #f94910" : "none")};
  outline: ${(props) => (props.tophatIsFound ? "3px solid #121212" : "none")};
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.tophatIsFound ? "2px solid #f94910" : "none")};
    outline: ${(props) => (props.tophatIsFound ? "1px solid #121212" : "none")};
  }
  border-radius: 5px;
`;
