import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { NewYork } from "./pages/NewYork/NewYork";
import { Rio } from "./pages/Rio/Rio";
import { Tokyo } from "./pages/Tokyo/Tokyo";
import { Paris } from "./pages/Paris/Paris";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./components/Firebase";

const theme = {
  colors: {
    header: "#121212",
    footer: "#FFF",
    main: "#121212",
    newyork: "#f2c205",
    paris: "#f94910",
    rio: "#00ad73",
    tokyo: "#d78ebf",
  },
};
function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [imageIsClicked, setImageIsClicked] = useState(false);
  const [clickHistory, setClickHistory] = useState([]);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [broadwayIsFound, setBroadwayIsFound] = useState(false);
  const [hotdogIsFound, setHotdogIsFound] = useState(false);
  const [ilovenyIsFound, setIlovenyIsFound] = useState(false);
  const [policeIsFound, setPoliceIsFound] = useState(false);
  const [dancerIsFound, setDancerIsFound] = useState(false);
  const [flagIsFound, setFlagIsFound] = useState(false);
  const [soccerIsFound, setSoccerIsFound] = useState(false);
  const [tambourineIsFound, setTambourineIsFound] = useState(false);
  const [geishaIsFound, setGeishaIsFound] = useState(false);
  const [parasolIsFound, setParasolIsFound] = useState(false);
  const [sushiIsFound, setSushiIsFound] = useState(false);
  const [sumoIsFound, setSumoIsFound] = useState(false);
  const [brieIsFound, setBrieIsFound] = useState(false);
  const [fleurdelisIsFound, setFleurdelisIsFound] = useState(false);
  const [monalisaIsFound, setMonalisaIsFound] = useState(false);
  const [tophatIsFound, setTophatIsFound] = useState(false);
  const [dropdownIsShifted, setDropdownIsShifted] = useState(false);
  const [errorSpanIsVisible, setErrorSpanIsVisible] = useState(false);
  const [userModalIsVisible, setUserModalIsVisible] = useState(false);
  const [leaderboardIsVisible, setLeaderboardIsVisible] = useState(false);

  function handleMouseClickPosition(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouseX(event.nativeEvent.clientX - rect.left);
    setMouseY(event.nativeEvent.clientY - rect.top);
    setImageIsClicked(!imageIsClicked);
    shiftDropdown(event);
  }
  async function checkFirebaseForMatch(event: any, cityFindImages: string) {
    let temp: any[] = [];
    let divId: string;
    const querySnapshot = await getDocs(collection(db, `${cityFindImages}`));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    temp.forEach((e: { id: string }) => {
      if (event.target.dataset.id === e.id) {
        divId = e.id;
        handleSetClickHistory(divId);
      }
    });
  }

  function handleSetClickHistory(divId: string) {
    if (clickHistory.includes(divId)) {
      return;
    }
    setClickHistory([...clickHistory, divId]);
  }

  function shiftDropdown(event: any) {
    if (
      event.target.dataset.id === "tophatDiv" ||
      event.target.dataset.id === "sumoDiv" ||
      event.target.dataset.id === "soccerDiv"
    ) {
      setDropdownIsShifted(true);
    } else {
      setDropdownIsShifted(false);
    }
  }

  function handleErrorSpan() {
    setErrorSpanIsVisible(true);
    setTimeout(() => {
      setErrorSpanIsVisible(false);
    }, 2000);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header time={time} isActive={isActive} />
        <Routes>
          <Route path="/" element={<Home setIsActive={setIsActive} />} />
          <Route
            path="/newyork"
            element={
              <NewYork
                mouseX={mouseX}
                mouseY={mouseY}
                imageIsClicked={imageIsClicked}
                clickHistory={clickHistory}
                isActive={isActive}
                time={time}
                setTime={setTime}
                setIsActive={setIsActive}
                handleMouseClickPosition={handleMouseClickPosition}
                checkFirebaseForMatch={checkFirebaseForMatch}
                setClickHistory={setClickHistory}
                broadwayIsFound={broadwayIsFound}
                hotdogIsFound={hotdogIsFound}
                ilovenyIsFound={ilovenyIsFound}
                policeIsFound={policeIsFound}
                setBroadwayIsFound={setBroadwayIsFound}
                setHotdogIsFound={setHotdogIsFound}
                setIlovenyIsFound={setIlovenyIsFound}
                setPoliceIsFound={setPoliceIsFound}
                dropdownIsShifted={dropdownIsShifted}
                errorSpanIsVisible={errorSpanIsVisible}
                handleErrorSpan={handleErrorSpan}
                userModalIsVisible={userModalIsVisible}
                setUserModalIsVisible={setUserModalIsVisible}
                leaderboardIsVisible={leaderboardIsVisible}
                setLeaderboardIsVisible={setLeaderboardIsVisible}
              />
            }
          />
          <Route
            path="/rio"
            element={
              <Rio
                mouseX={mouseX}
                mouseY={mouseY}
                imageIsClicked={imageIsClicked}
                clickHistory={clickHistory}
                isActive={isActive}
                time={time}
                setTime={setTime}
                setIsActive={setIsActive}
                handleMouseClickPosition={handleMouseClickPosition}
                checkFirebaseForMatch={checkFirebaseForMatch}
                setClickHistory={setClickHistory}
                dancerIsFound={dancerIsFound}
                flagIsFound={flagIsFound}
                soccerIsFound={soccerIsFound}
                tambourineIsFound={tambourineIsFound}
                setDancerIsFound={setDancerIsFound}
                setFlagIsFound={setFlagIsFound}
                setSoccerIsFound={setSoccerIsFound}
                setTambourineIsFound={setTambourineIsFound}
                dropdownIsShifted={dropdownIsShifted}
                errorSpanIsVisible={errorSpanIsVisible}
                handleErrorSpan={handleErrorSpan}
                userModalIsVisible={userModalIsVisible}
                setUserModalIsVisible={setUserModalIsVisible}
                leaderboardIsVisible={leaderboardIsVisible}
                setLeaderboardIsVisible={setLeaderboardIsVisible}
              />
            }
          />
          <Route
            path="/tokyo"
            element={
              <Tokyo
                mouseX={mouseX}
                mouseY={mouseY}
                imageIsClicked={imageIsClicked}
                clickHistory={clickHistory}
                isActive={isActive}
                time={time}
                setTime={setTime}
                setIsActive={setIsActive}
                handleMouseClickPosition={handleMouseClickPosition}
                checkFirebaseForMatch={checkFirebaseForMatch}
                setClickHistory={setClickHistory}
                geishaIsFound={geishaIsFound}
                parasolIsFound={parasolIsFound}
                sushiIsFound={sushiIsFound}
                sumoIsFound={sumoIsFound}
                setGeishaIsFound={setGeishaIsFound}
                setParasolIsFound={setParasolIsFound}
                setSushiIsFound={setSushiIsFound}
                setSumoIsFound={setSumoIsFound}
                dropdownIsShifted={dropdownIsShifted}
                errorSpanIsVisible={errorSpanIsVisible}
                handleErrorSpan={handleErrorSpan}
                userModalIsVisible={userModalIsVisible}
                setUserModalIsVisible={setUserModalIsVisible}
                leaderboardIsVisible={leaderboardIsVisible}
                setLeaderboardIsVisible={setLeaderboardIsVisible}
              />
            }
          />
          <Route
            path="/paris"
            element={
              <Paris
                mouseX={mouseX}
                mouseY={mouseY}
                imageIsClicked={imageIsClicked}
                clickHistory={clickHistory}
                isActive={isActive}
                time={time}
                setTime={setTime}
                setIsActive={setIsActive}
                handleMouseClickPosition={handleMouseClickPosition}
                checkFirebaseForMatch={checkFirebaseForMatch}
                setClickHistory={setClickHistory}
                brieIsFound={brieIsFound}
                fleurdelisIsFound={fleurdelisIsFound}
                monalisaIsFound={monalisaIsFound}
                tophatIsFound={tophatIsFound}
                setBrieIsFound={setBrieIsFound}
                setFleurdelisIsFound={setFleurdelisIsFound}
                setMonalisaIsFound={setMonalisaIsFound}
                setTophatIsFound={setTophatIsFound}
                dropdownIsShifted={dropdownIsShifted}
                errorSpanIsVisible={errorSpanIsVisible}
                handleErrorSpan={handleErrorSpan}
                userModalIsVisible={userModalIsVisible}
                setUserModalIsVisible={setUserModalIsVisible}
                leaderboardIsVisible={leaderboardIsVisible}
                setLeaderboardIsVisible={setLeaderboardIsVisible}
              />
            }
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
