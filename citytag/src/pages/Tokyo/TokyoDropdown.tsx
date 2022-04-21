import styled from "styled-components";
import { DropdownProps } from "../../Interfaces";
import { TargetBox } from "../../styles/Dropdown.styles";
import { DropdownContainer } from "../../styles/Dropdown.styles";
import { DropdownLi } from "../../styles/Dropdown.styles";

export function TokyoDropdown(props: DropdownProps) {
  const {
    mouseX,
    mouseY,
    imageIsClicked,
    clickHistory,
    setClickHistory,
    geishaText,
    parasolText,
    sushiText,
    sumoText,
    setGeishaIsFound,
    setParasolIsFound,
    setSushiIsFound,
    setSumoIsFound,
    dropdownIsShifted,
  } = props;
  const adjBoxY = mouseY - 22;
  const adjBoxX = mouseX - 22;
  const adjDropdownY = mouseY + 17;
  const adjDropdownX = mouseX + 17;
  const shiftedDropdownY = mouseY - 118;
  const shiftedDropdownX = mouseX - 118;

  function checkIfDivAndDropdownMatch(event: any) {
    if (clickHistory.includes(`${event.target.dataset.id}Div`)) {
      switch (event.target.dataset.id) {
        case "geisha":
          setGeishaIsFound(true);
          break;
        case "parasol":
          setParasolIsFound(true);
          break;
        case "sushi":
          setSushiIsFound(true);
          break;
        case "sumo":
          setSumoIsFound(true);
          break;
        default:
          break;
      }
      handleSetClickHistory(event);
    }
  }

  function handleSetClickHistory(event: any) {
    const filtered = clickHistory.filter(
      (e: string) => e !== `${event.target.dataset.id}Div`
    );
    setClickHistory([...filtered, `${event.target.dataset.id}Found`]);
  }

  return (
    <>
      {imageIsClicked && (
        <>
          <TargetBoxTokyo
            style={{
              top: `${adjBoxY.toString()}px`,
              left: `${adjBoxX.toString()}px`,
            }}
          />
          <DropdownContainerTokyo
            style={{
              top: dropdownIsShifted
                ? `${shiftedDropdownY.toString()}px`
                : `${adjDropdownY.toString()}px`,
              left: dropdownIsShifted
                ? `${shiftedDropdownX.toString()}px`
                : `${adjDropdownX.toString()}px`,
            }}
          >
            <ul>
              <DropdownLiTokyo
                data-id="geisha"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {geishaText}
              </DropdownLiTokyo>
              <DropdownLiTokyo
                data-id="parasol"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {parasolText}
              </DropdownLiTokyo>
              <DropdownLiTokyo
                data-id="sushi"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {sushiText}
              </DropdownLiTokyo>
              <DropdownLiTokyo
                data-id="sumo"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {sumoText}
              </DropdownLiTokyo>
            </ul>
          </DropdownContainerTokyo>
        </>
      )}
    </>
  );
}

//STYLED COMPONENTS//
const TargetBoxTokyo = styled(TargetBox)`
  border: 5px solid #d78ebf;
`;

const DropdownContainerTokyo = styled(DropdownContainer)`
  /* border: 5px dotted #d78ebf; */
  background-color: #d78ebf;
  width: 118px;
`;

const DropdownLiTokyo = styled(DropdownLi)`
  background-color: #d78ebf;
`;
