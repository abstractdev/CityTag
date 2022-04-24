import { LeaderboardTable } from "../../components/LeaderboardTable";
import { LeaderboardProps } from "../../Interfaces";
import { LeaderboardContainer } from "../../styles/Leaderboard.styles";
import { StyledH1 } from "../../styles/Leaderboard.styles";

export function NewYorkLeaderboard(props: LeaderboardProps) {
  const { cityFont, cityColor } = props;
  return (
    <LeaderboardContainer cityColor={cityColor}>
      <StyledH1 cityFont={cityFont}>New York</StyledH1>
      <LeaderboardTable />
    </LeaderboardContainer>
  );
}
