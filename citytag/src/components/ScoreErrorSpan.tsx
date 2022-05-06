import { StyledErrorSpan } from "./ErrorSpan";

export function ScoreErrorSpan() {
  return (
    <>
      <StyledErrorSpan>
        Your score did not qualify for the leaderboard.
        <br />
        Please try again
      </StyledErrorSpan>
    </>
  );
}
