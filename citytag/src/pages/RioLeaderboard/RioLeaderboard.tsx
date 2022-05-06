import { RioLeaderboardTable } from "./RioLeaderboardTable";
import { LeaderboardProps } from "../../Interfaces";
import { LeaderboardContainer } from "../../styles/Leaderboard.styles";
import { StyledH1 } from "../../styles/Leaderboard.styles";

export function RioLeaderboard(props: LeaderboardProps) {
  const { cityFont, cityColor, rioUserData } = props;
  return (
    <LeaderboardContainer cityColor={cityColor}>
      <StyledH1 cityFont={cityFont}>Rio De Janeiro</StyledH1>
      <RioLeaderboardTable rioUserData={rioUserData} />
    </LeaderboardContainer>
  );
}
