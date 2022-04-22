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
  position: fixed;
  left: 0;
  bottom: 0;
  /* width: 100%; */
  display: flex;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.footer};
  padding: .5rem .75rem;
  font-size: 70%;
  @media screen and (max-width: 644px) {
    font-size: .6rem;
  }
`;