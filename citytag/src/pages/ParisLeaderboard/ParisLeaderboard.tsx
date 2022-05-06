import { ParisLeaderboardTable } from "./ParisLeaderboardTable";
import { LeaderboardProps } from "../../Interfaces";
import { LeaderboardContainer } from "../../styles/Leaderboard.styles";
import { StyledH1 } from "../../styles/Leaderboard.styles";

export function ParisLeaderboard(props: LeaderboardProps) {
  const { cityFont, cityColor, parisUserData } = props;
  return (
    <LeaderboardContainer cityColor={cityColor}>
      <StyledH1 cityFont={cityFont}>Paris</StyledH1>
      <ParisLeaderboardTable parisUserData={parisUserData} />
    </LeaderboardContainer>
  );
}
