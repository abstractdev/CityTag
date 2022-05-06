import { Icon } from "@iconify/react";
import { CloseContainer } from "../styles/Modal.styles";
import { LeaderboardModalCloseButtonProps } from "../Interfaces";
import { useNavigate } from "react-router-dom";

export function LeaderboardModalCloseButton(props: LeaderboardModalCloseButtonProps) {
  const { setLeaderboardIsVisible } = props;
  const navigate = useNavigate();
  function handleSetLeaderboardIsVisible() {
    setLeaderboardIsVisible(false)
    navigate(-1);
    setTimeout(() => {
      navigate(0);
    }, 500);
}
  return (
    <>
      <CloseContainer onClick={handleSetLeaderboardIsVisible}>
        <Icon icon="fa:close" style={{ display: "block", margin: "auto" }} />
      </CloseContainer>
    </>
  );
}
