import React from "react";
import { StyledHeaderContainer } from "../styles/HeaderContainer.styles";
import { StyledHeaderText } from "../styles/HeaderText.styles";
import { LeaderboardLink } from "../styles/LeaderboardLink.styles";
import { LeaderboardLinkContainer } from "../styles/LeaderboardLinkContainer.styles";

// export interface IAppProps {
// }

export function Header() {
  return (
    <StyledHeaderContainer>
      <StyledHeaderText to="/">City Tag</StyledHeaderText>
      <LeaderboardLinkContainer>
        <LeaderboardLink to={"/leaderboard"}>Leaderboard</LeaderboardLink>
      </LeaderboardLinkContainer>
    </StyledHeaderContainer>
  );
}
