import tokyo from "../../assets/images/tokyo/tokyo.jpg";
import { TokyoFind } from "./TokyoFind";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { CityImage } from "../../styles/CityImage.styles";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { TokyoDropdown } from "./TokyoDropdown";
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
    errorSpanIsVisible,
    handleErrorSpan,
    userModalIsVisible,
    setUserModalIsVisible,
    leaderboardIsVisible,
    setLeaderboardIsVisible,
    tokyoUserData,
    setTokyoUserData,
    handleScoreErrorSpan,
    scoreErrorSpanIsVisible,
  } = props;

  const geishaText = "Geisha";
  const parasolText = "Parasol";
  const sushiText = "Sushi";
  const sumoText = "Sumo Wrestler";

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
          city: "tokyo",
          time: time,
          displayTime: `${convertMsToDisplayTime(time)}`,
        },
        { merge: true }
      );
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (geishaIsFound && parasolIsFound && sushiIsFound && sumoIsFound) {
      setIsActive(false);
      setTimeout(() => {
        AudioFunctions().end.play();
      }, 600);
      setTimeout(() => {
        setUserModalIsVisible(true);
      }, 2000);
    }
  }, [geishaIsFound, parasolIsFound, sushiIsFound, sumoIsFound, setIsActive]);

  function handleFormSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    setUserModalIsVisible(false);
    const userRef = doc(db, "users", userId);
    setDoc(userRef, { name: name }, { merge: true });
    setTimeout(() => {
      const getUserDataFromFirebase = (async () => {
        let temp: any[] = [];
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        const tokyoFiltered = temp.filter((e) => e.city === "tokyo");
        //validate score
        const tokyoScores = tokyoUserData.map((e) => e.time);
        const highestTime = Math.max(...tokyoScores);
        if (time < highestTime) {
          setTokyoUserData([...tokyoFiltered]);
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
        cityColor={"#d78ebf"}
        cityFont={"tokyo"}
        cityText={"Tokyo"}
        leaderboardIsVisible={leaderboardIsVisible}
        setLeaderboardIsVisible={setLeaderboardIsVisible}
        tokyoUserData={tokyoUserData}
      />
      <UserModal
        name={name}
        userModalIsVisible={userModalIsVisible}
        setUserModalIsVisible={setUserModalIsVisible}
        handleFormSubmit={handleFormSubmit}
        handleOnChange={handleOnChange}
      />
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
          style={{ pointerEvents: !isActive ? "none" : "auto" }}
        >
          <CityImage src={tokyo} />
          {errorSpanIsVisible && <ErrorSpan />}
          {scoreErrorSpanIsVisible && <ScoreErrorSpan />}
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
            handleErrorSpan={handleErrorSpan}
          />
        </CityImageContainer>
      </VFlexContainer>
    </>
  );
}

//STYLED COMPONENTS//

const GeishaDiv = styled.div<DivProps>`
  width: 5%;
  height: 11%;
  position: absolute;
  left: 60.8%;
  bottom: 59.2%;
  border: ${(props) => (props.geishaIsFound ? "5px solid #d78ebf" : "none")};
  outline: ${(props) => (props.geishaIsFound ? "3px solid #121212" : "none")};
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.geishaIsFound ? "2px solid #d78ebf" : "none")};
    outline: ${(props) => (props.geishaIsFound ? "1px solid #121212" : "none")};
  }
  border-radius: 5px;
`;
const ParasolDiv = styled.div<DivProps>`
  width: 3%;
  height: 6.5%;
  position: absolute;
  left: 29.2%;
  bottom: 76%;
  border: ${(props) => (props.parasolIsFound ? "5px solid #d78ebf" : "none")};
  outline: ${(props) => (props.parasolIsFound ? "3px solid #121212" : "none")};
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.parasolIsFound ? "2px solid #d78ebf" : "none")};
    outline: ${(props) =>
      props.parasolIsFound ? "1px solid #121212" : "none"};
  }
  border-radius: 5px;
`;
const SushiDiv = styled.div<DivProps>`
  width: 3.2%;
  height: 4%;
  position: absolute;
  left: 56.3%;
  bottom: 92%;
  border: ${(props) => (props.sushiIsFound ? "5px solid #d78ebf" : "none")};
  outline: ${(props) => (props.sushiIsFound ? "3px solid #121212" : "none")};
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.sushiIsFound ? "2px solid #d78ebf" : "none")};
    outline: ${(props) => (props.sushiIsFound ? "1px solid #121212" : "none")};
  }
  border-radius: 5px;
`;
const SumoDiv = styled.div<DivProps>`
  width: 6%;
  height: 11.8%;
  position: absolute;
  left: 82.4%;
  bottom: 17.5%;
  border: ${(props) => (props.sumoIsFound ? "5px solid #d78ebf" : "none")};
  outline: ${(props) => (props.sumoIsFound ? "3px solid #121212" : "none")};
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.sumoIsFound ? "2px solid #d78ebf" : "none")};
    outline: ${(props) => (props.sumoIsFound ? "1px solid #121212" : "none")};
  }
  border-radius: 5px;
`;
