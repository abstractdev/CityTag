import styled from "styled-components";
import { ModalContainer, Modal } from "../styles/Modal.styles";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { LeaderboardModalCloseButton } from "./LeaderboardModalCloseButton";
import { LeaderboardModalProps } from "../Interfaces";
import { useEffect, useRef } from "react";
import { clickOutsideFunction } from "../UtlityFunctions";
import { StyledH1 } from "../styles/Leaderboard.styles";
import { NewYorkLeaderboardTable } from "../pages/NewYorkLeaderboard/NewYorkLeaderboardTable";
import { ParisLeaderboardTable } from "../pages/ParisLeaderboard/ParisLeaderboardTable";
import { RioLeaderboardTable } from "../pages/RioLeaderboard/RioLeaderboardTable";
import { TokyoLeaderboardTable } from "../pages/TokyoLeaderboard/TokyoLeaderboardTable";
import { useNavigate } from "react-router-dom";
export function LeaderboardModal(props: LeaderboardModalProps) {
  const {
    cityColor,
    cityFont,
    cityText,
    leaderboardIsVisible,
    setLeaderboardIsVisible,
    newyorkUserData,
    parisUserData,
    rioUserData,
    tokyoUserData,
  } = props;
  const navigate = useNavigate();
  const mainModalRef = useRef();
  useEffect(() => {
    clickOutsideFunction(
      leaderboardIsVisible,
      setLeaderboardIsVisible,
      mainModalRef,
      navigate
    );
  }, [leaderboardIsVisible]);
  return (
    <>
      {leaderboardIsVisible && (
        <ModalContainer>
          <MainModal cityColor={cityColor} ref={mainModalRef}>
            <LeaderboardModalCloseButton
              setLeaderboardIsVisible={setLeaderboardIsVisible}
            />
            <VFlexContainer>
              <StyledH1 cityFont={cityFont}>{cityText}</StyledH1>
            </VFlexContainer>
            {cityFont === "newyork" && (
              <NewYorkLeaderboardTable newyorkUserData={newyorkUserData} />
            )}
            {cityFont === "paris" && (
              <ParisLeaderboardTable parisUserData={parisUserData} />
            )}
            {cityFont === "rio" && (
              <RioLeaderboardTable rioUserData={rioUserData} />
            )}
            {cityFont === "tokyo" && (
              <TokyoLeaderboardTable tokyoUserData={tokyoUserData} />
            )}
          </MainModal>
        </ModalContainer>
      )}
    </>
  );
}

const MainModal = styled(Modal)<{ cityColor: string }>`
  height: 100vh;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${({ cityColor }) => cityColor};
  border: 5px solid #fff;
  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;
