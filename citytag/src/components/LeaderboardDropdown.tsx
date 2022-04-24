import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";
import { clickOutsideFunction } from "../UtlityFunctions";

export function LeaderboardDropdown() {
  const containerRef = useRef<HTMLDivElement>();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  useEffect(() => {
    clickOutsideFunction(
      dropdownIsOpen,
      setDropdownIsOpen,
      containerRef,
    );
  }, [dropdownIsOpen]);

  function handleSetDropdownIsOpen(event: any) {
    setDropdownIsOpen((prev) => !prev);
  }

  return (
    <>
      <LeaderboardLinkContainer ref={containerRef}>
        <LeaderboardLink
          href="#"
          onClick={(event) => handleSetDropdownIsOpen(event)}
        >
          Leaderboard
        </LeaderboardLink>
        <IconContainer onClick={(event) => handleSetDropdownIsOpen(event)}>
          <Icon icon="bi:caret-down-fill" />
        </IconContainer>
        {dropdownIsOpen && (
          <LeaderboardDropdownContainer>
            <ul>
              <StyledLink to="newyorkleaderboard" onClick={() => setDropdownIsOpen(false)}>
                <StyledLi>New York</StyledLi>
              </StyledLink>
              <StyledLink to="rioleaderboard" onClick={() => setDropdownIsOpen(false)}>
                <StyledLi>Rio De Janeiro</StyledLi>
              </StyledLink>
              <StyledLink to="tokyoleaderboard" onClick={() => setDropdownIsOpen(false)}>
                <StyledLi>Tokyo</StyledLi>
              </StyledLink>
              <StyledLink to="parisleaderboard" onClick={() => setDropdownIsOpen(false)}>
                <StyledLi>Paris</StyledLi>
              </StyledLink>
            </ul>
          </LeaderboardDropdownContainer>
        )}
      </LeaderboardLinkContainer>
    </>
  );
}

const LeaderboardLinkContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const LeaderboardLink = styled.a`
  font-size: 2rem;
  text-decoration: none;
  font-family: "sky";
  color: #fff;

  @media screen and (max-width: 644px) {
    font-size: 1rem;
  }
`;

const IconContainer = styled.div`
  color: #fff;
  cursor: pointer;
`;

const LeaderboardDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  color: #121212;
  top: 90%;
  width: 100%;
  background-color: #fff;
  margin: 0.4em 0;
  border-radius: 5px;
  z-index: 1;
`;

const StyledLi = styled.li`
  padding: 0.7em;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #121212;
`;
