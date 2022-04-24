import { LeaderboardTable } from "../../components/LeaderboardTable";
import { LeaderboardProps } from "../../Interfaces";
import { LeaderboardContainer } from "../../styles/Leaderboard.styles";
import { StyledH1 } from "../../styles/Leaderboard.styles";

export function ParisLeaderboard(props: LeaderboardProps) {
  const { cityFont, cityColor } = props;
  return (
    <LeaderboardContainer cityColor={cityColor}>
      <StyledH1 cityFont={cityFont}>Paris</StyledH1>
      <LeaderboardTable />
    </LeaderboardContainer>
  );
}
