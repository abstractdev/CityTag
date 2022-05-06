import {
  StyledTable,
  StyledTr,
  StyledTd,
  StyledTdHeader,
  StyledTimeTd,
} from "../../styles/LeaderboardTable.styles";
import { LeaderboardProps } from "../../Interfaces";
import { trimData } from "../../UtlityFunctions";
export function RioLeaderboardTable(props: LeaderboardProps) {
  const { rioUserData } = props;
  const sortedRioUserData = rioUserData.sort((a, b) => {
    return a.time - b.time;
  });
  const userItems = sortedRioUserData.map((e, i) => {
    return (
      <tr key={e.id}>
        <StyledTd>{i + 1}</StyledTd>
        <StyledTd>{e.name}</StyledTd>
        <StyledTimeTd>{trimData(e.displayTime)}</StyledTimeTd>
      </tr>
    );
  });
  return (
    <>
      <StyledTable>
        <thead>
          <StyledTr>
            <StyledTd></StyledTd>
            <StyledTdHeader>Name</StyledTdHeader>
            <StyledTdHeader>Time</StyledTdHeader>
          </StyledTr>
        </thead>
        <tbody>{userItems}</tbody>
      </StyledTable>
    </>
  );
}
