import styled from "styled-components";
import { AiOutlineGithub, AiOutlineBehanceSquare } from "react-icons/ai";

export function Footer() {
  return (
    <>
      <StyledFooterContainer>
        <StyledDiv>
          <StyledLink href="https://github.com/abstractdev">
            <AiOutlineBehanceSquare />
          </StyledLink>
          <StyledLink href="http://www.behance.net/gusmorais">
            {" "}
            All images by Gus Morais
          </StyledLink>
        </StyledDiv>
        <StyledDiv>
          <StyledLink href="https://github.com/abstractdev">
            <AiOutlineGithub />
          </StyledLink>
          <StyledLink href="https://github.com/abstractdev">
            {" "}
            Site by abstractdev
          </StyledLink>
        </StyledDiv>
      </StyledFooterContainer>
    </>
  );
}

const StyledFooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 0.5rem 0.75rem;
  font-size: 70%;
  @media screen and (max-width: 644px) {
    font-size: 0.6rem;
  }
  gap: 2rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.08rem;
`;
