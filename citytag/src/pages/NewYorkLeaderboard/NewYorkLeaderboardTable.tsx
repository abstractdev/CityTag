import {
  StyledTable,
  StyledTr,
  StyledTd,
  StyledTdHeader,
  StyledTimeTd,
} from "../../styles/LeaderboardTable.styles";
import { LeaderboardProps } from "../../Interfaces";
import { trimData } from "../../UtlityFunctions";
export function NewYorkLeaderboardTable(props: LeaderboardProps) {
  const { newyorkUserData } = props;
  const sortedNewYorkUserData = newyorkUserData.sort((a, b) => {
    return a.time - b.time;
  });
  const userItems = sortedNewYorkUserData.map((e, i) => {
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
