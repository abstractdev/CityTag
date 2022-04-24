import { Icon } from "@iconify/react";
import { CloseContainer } from "../styles/Modal.styles";
import { LeaderboardModalCloseButtonProps } from "../Interfaces";

export function LeaderboardModalCloseButton(
  props: LeaderboardModalCloseButtonProps
) {
  const { setLeaderboardIsVisible } = props;
  return (
    <>
      <CloseContainer onClick={() => setLeaderboardIsVisible(false)}>
        <Icon icon="fa:close" style={{ display: "block", margin: "auto" }} />
      </CloseContainer>
    </>
  );
}
