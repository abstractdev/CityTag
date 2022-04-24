import styled from "styled-components";
import { VFlexContainer } from "./VFlexContainer.styles";

export const FindContainer = styled.div`
  margin: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
  color: #fff;
  font-family: "metropolis";
`;

export const FindImageContainer = styled(VFlexContainer)`
  height: 100px;
  width: 200px;
  gap: 0.3rem;
  @media screen and (max-width: 600px) {
    font-size: 0;
    height: 60px;
  }
`;

export const FindImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
