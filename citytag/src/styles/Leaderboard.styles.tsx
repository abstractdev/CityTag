import styled from "styled-components";

export const LeaderboardContainer = styled.div<{ cityColor: string }>`
  background-color: ${({ cityColor }) => cityColor};
  height: 100vh;
  padding-top: 2rem;
`;
export const StyledH1 = styled.h1<{ cityFont: string }>`
  font-family: ${({ cityFont }) => cityFont};
  font-size: 4rem;
  text-align: center;
  cursor: default;
`;
