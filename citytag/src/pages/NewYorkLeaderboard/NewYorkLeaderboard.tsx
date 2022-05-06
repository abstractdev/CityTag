import { NewYorkLeaderboardTable } from "./NewYorkLeaderboardTable";
import { LeaderboardProps } from "../../Interfaces";
import { LeaderboardContainer } from "../../styles/Leaderboard.styles";
import { StyledH1 } from "../../styles/Leaderboard.styles";

export function NewYorkLeaderboard(props: LeaderboardProps) {
  const { cityFont, cityColor, newyorkUserData } = props;
  return (
    <LeaderboardContainer cityColor={cityColor}>
      <StyledH1 cityFont={cityFont}>New York</StyledH1>
      <NewYorkLeaderboardTable newyorkUserData={newyorkUserData} />
    </LeaderboardContainer>
  );
}
