import rio from "../../assets/images/rio/rio.jpg";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { CityImage } from "../../styles/CityImage.styles";
import { RioFind } from "./RioFind";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { RioDropdown } from "./RioDropdown";
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
    rioUserData,
    setRioUserData,
    handleScoreErrorSpan,
    scoreErrorSpanIsVisible,
  } = props;
  const dancerText = "Dancer";
  const flagText = "Flag";
  const soccerText = "Soccer Ball";
  const tambourineText = "Tambourine";
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
          city: "rio",
          time: time,
          displayTime: `${convertMsToDisplayTime(time)}`,
        },
        { merge: true }
      );
    }
    return () => clearInterval(interval);
  }, [isActive]);

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
        let rioFiltered = temp.filter((e) => e.city === "rio");
        //validate score
        const rioScores = rioUserData.map((e) => e.time);
        const highestTime = Math.max(...rioScores);
        //add user score to leaderboard if there is room
        if (time < highestTime && rioFiltered.length <= 19) {
          setRioUserData([...rioFiltered]);
          setLeaderboardIsVisible(true);
        }
        //if there is not enough room but the score qualifies, remove the highest time from array and firebase
        else if (time < highestTime && rioFiltered.length === 20) {
          const removeHighest = (async () => {
            const highestUser = rioFiltered.find((e) => e.time === highestTime);
            await deleteDoc(doc(db, "users", highestUser.id));
            const removeHighestUserFromArray = (() => {
              rioFiltered = rioFiltered.filter((e) => {
                return e.time !== highestTime;
              });
            })();
            setRioUserData([...rioFiltered]);
            setLeaderboardIsVisible(true);
          })();
          //otherwise remove user
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
        cityColor="#00ad73"
        cityFont="rio"
        cityText="Rio De Janeiro"
        leaderboardIsVisible={leaderboardIsVisible}
        setLeaderboardIsVisible={setLeaderboardIsVisible}
        rioUserData={rioUserData}
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
          {scoreErrorSpanIsVisible && <ScoreErrorSpan />}
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
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.dancerIsFound ? "2px solid #00ad73" : "none")};
    outline: ${(props) => (props.dancerIsFound ? "1px solid #121212" : "none")};
  }
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
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.flagIsFound ? "2px solid #00ad73" : "none")};
    outline: ${(props) => (props.flagIsFound ? "1px solid #121212" : "none")};
  }
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
  @media screen and (max-width: 670px) {
    border: ${(props) => (props.soccerIsFound ? "2px solid #00ad73" : "none")};
    outline: ${(props) => (props.soccerIsFound ? "1px solid #121212" : "none")};
  }
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
  @media screen and (max-width: 670px) {
    border: ${(props) =>
      props.tambourineIsFound ? "2px solid #00ad73" : "none"};
    outline: ${(props) =>
      props.tambourineIsFound ? "1px solid #121212" : "none"};
  }
  border-radius: 5px;
`;
