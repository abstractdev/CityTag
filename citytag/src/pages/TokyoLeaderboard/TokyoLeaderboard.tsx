import { TokyoLeaderboardTable } from "./TokyoLeaderboardTable";
import { LeaderboardProps } from "../../Interfaces";
import { LeaderboardContainer } from "../../styles/Leaderboard.styles";
import { StyledH1 } from "../../styles/Leaderboard.styles";

export function TokyoLeaderboard(props: LeaderboardProps) {
  const { cityFont, cityColor, tokyoUserData } = props;
  return (
    <LeaderboardContainer cityColor={cityColor}>
      <StyledH1 cityFont={cityFont}>Tokyo</StyledH1>
      <TokyoLeaderboardTable tokyoUserData={tokyoUserData} />
    </LeaderboardContainer>
  );
}
