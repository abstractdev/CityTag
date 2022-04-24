import styled from "styled-components";
import { ModalContainer, Modal } from "../styles/Modal.styles";
import { VFlexContainer } from "../styles/VFlexContainer.styles";
import { LeaderboardTable } from "./LeaderboardTable";
import { ModalCloseButton } from "./ModalCloseButton";
import { LeaderboardModalProps } from "../Interfaces";
import { useEffect, useRef } from "react";
import { clickOutsideFunction } from "../UtlityFunctions";
import { useNavigate } from "react-router-dom";

export function LeaderboardModal(props: LeaderboardModalProps) {
  const {
    cityColor,
    cityFont,
    cityText,
    leaderboardIsVisible,
    setLeaderboardIsVisible,
  } = props;
  const mainModalRef = useRef();
  const navigate = useNavigate();
  const goHomeAndRefresh = () => {
    navigate(-1);
    setTimeout(() => {
      navigate(0);
    }, 500);
  };
  useEffect(() => {
    clickOutsideFunction(
      leaderboardIsVisible,
      setLeaderboardIsVisible,
      mainModalRef,
      goHomeAndRefresh
    );
  }, [leaderboardIsVisible]);
  return (
    <>
      <ModalContainer>
        <MainModal cityColor={cityColor} ref={mainModalRef}>
          <ModalCloseButton />
          <VFlexContainer>
            <StyledH1 cityFont={cityFont}>{cityText}</StyledH1>
          </VFlexContainer>
          <LeaderboardTable />
        </MainModal>
      </ModalContainer>
    </>
  );
}

const MainModal = styled(Modal)<{ cityColor: string }>`
  height: 100vh;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${({ cityColor }) => cityColor};
`;

const StyledH1 = styled.h1<{ cityFont: string }>`
  text-align: center;
  font-size: 4rem;
  font-family: ${({ cityFont }) => cityFont};
`;
