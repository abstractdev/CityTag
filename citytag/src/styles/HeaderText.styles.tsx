import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderText = styled(Link)`
  display: inline-block;
  font-family: "polka";
  color: #fff;
  font-size: 4rem;
  text-decoration: none;

  @media screen and (max-width: 600px){
    font-size: 2rem;
  }
`;
