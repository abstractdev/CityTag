import styled from "styled-components";
import { Link } from "react-router-dom";
import { Timer } from "./Timer";
import { HeaderProps } from "../Interfaces";
import { LeaderboardDropdown } from "./LeaderboardDropdown";

export function Header(props: HeaderProps) {
  return (
    <StyledHeaderContainer>
      <StyledHeaderTextContainer>
        <StyledHeaderText to="/city-tag">CITY TAG</StyledHeaderText>
      </StyledHeaderTextContainer>
      {props.isActive ? (
        <Timer time={props.time} isActive={props.isActive} />
      ) : null}
      <LeaderboardDropdown />
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  padding: 1rem 4rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  @media screen and (max-width: 670px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
const StyledHeaderTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeaderText = styled(Link)`
  font-family: "city";
  color: #fff;
  font-size: 4rem;
  text-decoration: none;

  @media screen and (max-width: 670px) {
    font-size: 2rem;
  }
`;
