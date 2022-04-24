import styled from "styled-components";
export function LeaderboardTable() {
  return (
    <>
      <StyledTable>
        <tbody>
          <StyledTr>
            <StyledTd></StyledTd>
            <StyledTdHeader>Name</StyledTdHeader>
            <StyledTdHeader>Time</StyledTdHeader>
          </StyledTr>
          <tr>
            <StyledTd>1</StyledTd>
            <StyledTd>abstractdev</StyledTd>
            <StyledTd>9991</StyledTd>
          </tr>
          <tr>
            <StyledTd>2</StyledTd>
            <StyledTd>WWWWWWWWWWWWWWWWWWWWWWWWW</StyledTd>
            <StyledTd>00.00s</StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
}

const StyledTable = styled.table`
  width: 80%;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 644px) {
    width: 100%
  }
`;
const StyledTr = styled.tr`
  border-bottom: 1px solid #121212;
`

const StyledTd = styled.td`
  padding: .5rem;
  max-width: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
`
const StyledTdHeader = styled(StyledTd)`
  font-size: 1.5rem;
`
