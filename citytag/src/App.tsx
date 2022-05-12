import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { NewYorkLeaderboard } from "./pages/NewYorkLeaderboard/NewYorkLeaderboard";
import { ParisLeaderboard } from "./pages/ParisLeaderboard/ParisLeaderboard";
import { RioLeaderboard } from "./pages/RioLeaderboard/RioLeaderboard";
import { TokyoLeaderboard } from "./pages/TokyoLeaderboard/TokyoLeaderboard";

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
  const [scoreErrorSpanIsVisible, setScoreErrorSpanIsVisible] = useState(false);
  const [userModalIsVisible, setUserModalIsVisible] = useState(false);
  const [leaderboardIsVisible, setLeaderboardIsVisible] = useState(false);
  const [newyorkUserData, setNewyorkUserData] = useState([]);
  const [parisUserData, setParisUserData] = useState([]);
  const [rioUserData, setRioUserData] = useState([]);
  const [tokyoUserData, setTokyoUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDataFromFirebase = (async () => {
      let temp: any[] = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        temp.push(doc.data());
      });
      const newyorkFiltered = temp.filter((e) => e.city === "newyork");
      setNewyorkUserData([...newyorkFiltered]);
      const parisFiltered = temp.filter((e) => e.city === "paris");
      setParisUserData([...parisFiltered]);
      const rioFiltered = temp.filter((e) => e.city === "rio");
      setRioUserData([...rioFiltered]);
      const tokyoFiltered = temp.filter((e) => e.city === "tokyo");
      setTokyoUserData([...tokyoFiltered]);
    })();
  }, []);

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
  function handleScoreErrorSpan() {
    setScoreErrorSpanIsVisible(true);
    setTimeout(() => {
      navigate(-1);
      setTimeout(() => {
        navigate(0);
      }, 200);
    }, 7000);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header time={time} isActive={isActive} />
        <Routes>
          <Route
            path="/city-tag"
            element={<Home isActive={isActive} setIsActive={setIsActive} />}
          />
          <Route
            path="newyorkleaderboard"
            element={
              <NewYorkLeaderboard
                cityFont={"newyork"}
                cityColor={"#f2c205"}
                newyorkUserData={newyorkUserData}
              />
            }
          />
          <Route
            path="parisleaderboard"
            element={
              <ParisLeaderboard
                cityFont={"paris"}
                cityColor={"#f94910"}
                parisUserData={parisUserData}
              />
            }
          />
          <Route
            path="rioleaderboard"
            element={
              <RioLeaderboard
                cityFont={"rio"}
                cityColor={"#00ad73"}
                rioUserData={rioUserData}
              />
            }
          />
          <Route
            path="tokyoleaderboard"
            element={
              <TokyoLeaderboard
                cityFont={"tokyo"}
                cityColor={"#d78ebf"}
                tokyoUserData={tokyoUserData}
              />
            }
          />
          <Route
            path="city-tag/newyork"
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
                newyorkUserData={newyorkUserData}
                setNewyorkUserData={setNewyorkUserData}
                handleScoreErrorSpan={handleScoreErrorSpan}
                scoreErrorSpanIsVisible={scoreErrorSpanIsVisible}
              />
            }
          />
          <Route
            path="city-tag/rio"
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
                rioUserData={rioUserData}
                setRioUserData={setRioUserData}
                handleScoreErrorSpan={handleScoreErrorSpan}
                scoreErrorSpanIsVisible={scoreErrorSpanIsVisible}
              />
            }
          />
          <Route
            path="city-tag/tokyo"
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
                tokyoUserData={tokyoUserData}
                setTokyoUserData={setTokyoUserData}
                handleScoreErrorSpan={handleScoreErrorSpan}
                scoreErrorSpanIsVisible={scoreErrorSpanIsVisible}
              />
            }
          />
          <Route
            path="city-tag/paris"
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
                parisUserData={parisUserData}
                setParisUserData={setParisUserData}
                handleScoreErrorSpan={handleScoreErrorSpan}
                scoreErrorSpanIsVisible={scoreErrorSpanIsVisible}
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
