import styled from "styled-components";
import { Link } from "react-router-dom";
import { Timer } from "./Timer";

interface headerProps {
  time: number;
  isActive: boolean;
}

export function Header(props: headerProps) {
  return (
    <StyledHeaderContainer>
      <StyledHeaderText to="/">City Tag</StyledHeaderText>
      <Timer time={props.time} isActive={props.isActive}/>
      <LeaderboardLinkContainer>
        <LeaderboardLink to={"/leaderboard"}>Leaderboard</LeaderboardLink>
      </LeaderboardLinkContainer>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  padding: 1rem 4rem;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  @media screen and (max-width: 600px){
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const StyledHeaderText = styled(Link)`
  display: inline-block;
  font-family: "polka";
  color: #fff;
  font-size: 4rem;
  text-decoration: none;

  @media screen and (max-width: 600px){
    font-size: 2rem;
  }
`;

const LeaderboardLinkContainer = styled.div`
  display: inline-block;
`;

const LeaderboardLink = styled(Link)`
  display: inline-block;
  font-size: 2rem;
  text-decoration: none;
  font-family: "sky";
  color: #fff;

  @media screen and (max-width: 600px){
    font-size: 1rem;
  }
`;
