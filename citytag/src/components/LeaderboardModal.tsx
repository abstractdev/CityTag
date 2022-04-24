import styled from "styled-components";
import { ModalContainer, Modal } from "../styles/Modal.styles";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { LeaderboardTable } from "./LeaderboardTable";
import { LeaderboardModalCloseButton } from "./LeaderboardModalCloseButton";
import { LeaderboardModalProps } from "../Interfaces";
import { useEffect, useRef } from "react";
import { clickOutsideFunction } from "../UtlityFunctions";
import { StyledH1 } from "../styles/Leaderboard.styles";

export function LeaderboardModal(props: LeaderboardModalProps) {
  const {
    cityColor,
    cityFont,
    cityText,
    leaderboardIsVisible,
    setLeaderboardIsVisible,
  } = props;
  const mainModalRef = useRef();
  useEffect(() => {
    clickOutsideFunction(
      leaderboardIsVisible,
      setLeaderboardIsVisible,
      mainModalRef,
    );
  }, [leaderboardIsVisible]);
  return (
    <>
      {leaderboardIsVisible && <ModalContainer>
        <MainModal cityColor={cityColor} ref={mainModalRef}>
          <LeaderboardModalCloseButton setLeaderboardIsVisible={setLeaderboardIsVisible}/>
          <VFlexContainer>
            <StyledH1 cityFont={cityFont}>{cityText}</StyledH1>
          </VFlexContainer>
          <LeaderboardTable />
        </MainModal>
      </ModalContainer>}
    </>
  );
}

const MainModal = styled(Modal)<{ cityColor: string }>`
  height: 100vh;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${({ cityColor }) => cityColor};
  border: 5px solid #FFF;
  @media screen and (max-width: 644px) {
    width: 100%
  }
`;