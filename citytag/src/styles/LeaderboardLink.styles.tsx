import styled from "styled-components";
import { Link } from "react-router-dom";

export const LeaderboardLink = styled(Link)`
  display: inline-block;
  font-size: 2rem;
  text-decoration: none;
  font-family: "sky";
  color: #fff;

  @media screen and (max-width: 600px){
    font-size: 1rem;
  }
`;
