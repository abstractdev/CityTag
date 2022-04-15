import styled from "styled-components";

export const HomeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (max-width: 600px){
    grid-template-columns: 1fr;
  }
`;