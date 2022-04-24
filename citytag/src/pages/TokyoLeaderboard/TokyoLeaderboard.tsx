import { LeaderboardTable } from "../../components/LeaderboardTable";
import { LeaderboardProps } from "../../Interfaces";
import { LeaderboardContainer } from "../../styles/Leaderboard.styles";
import { StyledH1 } from "../../styles/Leaderboard.styles";

export function TokyoLeaderboard(props: LeaderboardProps) {
  const { cityFont, cityColor } = props;
  return (
    <LeaderboardContainer cityColor={cityColor}>
      <StyledH1 cityFont={cityFont}>Tokyo</StyledH1>
      <LeaderboardTable />
    </LeaderboardContainer>
  );
}
