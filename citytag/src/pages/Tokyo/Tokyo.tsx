import tokyo from "../../assets/images/tokyo/tokyo.jpg";
import { TokyoFind } from "../../components/Find";
import { VFlexContainer } from "../../styles/VFlexContainer.styles";
import { CityImageContainer } from "../../styles/CityImage.styles";
import { CityImage } from "../../styles/CityImage.styles";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { TokyoDropdown } from "./TokyoDropdown";
import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "../../components/Firebase";
import { CityProps } from "../../Interfaces";
import { AudioFunctions } from "../../UtlityFunctions";
import { convertMsToDisplayTime } from "../../UtlityFunctions";
import { DivProps } from "../../Interfaces";
import { ErrorSpan } from "../../components/ErrorSpan";
import { UserModal } from "../../components/UserModal";
import { useNavigate } from "react-router-dom";

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
    modalIsVisible,
    setModalIsVisible,
  } = props;

  const geishaText = "Geisha";
  const parasolText = "Parasol";
  const sushiText = "Sushi";
  const sumoText = "Sumo Wrestler";

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive) {
      const docRef = doc(collection(db, "tokyoUsers"));
      setDoc(docRef, { id: docRef.id });
      console.log("Document written");
      setUserId(docRef.id);

      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!isActive) {
      clearInterval(interval);
      const userRef = doc(db, "tokyoUsers", userId);
      setDoc(
        userRef,
        { time: time, displayTime: `${convertMsToDisplayTime(time)}` },
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
        setModalIsVisible(true);
      }, 2000);
    }
  }, [geishaIsFound, parasolIsFound, sushiIsFound, sumoIsFound, setIsActive]);

  function navigateBack() {
    navigate(-1);
    setTimeout(() => {
      navigate(0);
    }, 50);
  }
  function handleFormSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    setModalIsVisible(false);
    const userRef = doc(db, "tokyoUsers", userId);
    setDoc(userRef, { name: name }, { merge: true });
    navigateBack();
  }

  function handleOnChange(event: any) {
    setName(event.target.value);
  }

  return (
    <>
      <UserModal
        name={name}
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
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
        >
          <CityImage src={tokyo} />
          {errorSpanIsVisible && <ErrorSpan />}
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
  width: 4.5%;
  height: 11%;
  position: absolute;
  left: 61.1%;
  bottom: 59.2%;
  border: ${(props) => (props.geishaIsFound ? "5px solid #d78ebf" : "none")};
  outline: ${(props) => (props.geishaIsFound ? "3px solid #121212" : "none")};
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
  border-radius: 5px;
`;
