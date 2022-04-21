import styled from "styled-components";

export function Footer() {
  return (
    <>
      <StyledFooterContainer>
        <a href="http://www.behance.net/gusmorais">All images by Gus Morais</a>
      </StyledFooterContainer>
    </>
  );
}

const StyledFooterContainer = styled.div`
  display: flex;
  align-content: center;
  background-color: #FFF;
  padding: .5rem .75rem;
  font-size: 70%;
  @media screen and (max-width: 644px) {
    font-size: .6rem;
  }
`;