import styled from "styled-components";

export function LeaderboardTable() {
  return (
    <>
      <StyledTable>
        <tbody>
          <tr>
            <td></td>
            <td>Name</td>
            <td>Time</td>
          </tr>
          <tr>
            <td>1</td>
            <td>abstractdev</td>
            <td>999</td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
}

const StyledTable = styled.table`
  width: 100%;
  border: red;
  margin-top: 2rem;
`;
