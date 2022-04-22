import styled from "styled-components";
import { DropdownProps } from "../../Interfaces";
import { TargetBox } from "../../styles/Dropdown.styles";
import { DropdownContainer } from "../../styles/Dropdown.styles";
import { DropdownLi } from "../../styles/Dropdown.styles";
import { AudioFunctions } from "../../UtlityFunctions";

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
    handleErrorSpan,
  } = props;
  const adjBoxY = mouseY - 22;
  const adjBoxX = mouseX - 22;
  const adjDropdownY = mouseY + 20;
  const adjDropdownX = mouseX + 20;
  const shiftedDropdownY = mouseY - 120;
  const shiftedDropdownX = mouseX - 120;

  function checkIfDivAndDropdownMatch(event: any) {
    if (clickHistory.includes(`${event.target.dataset.id}Div`)) {
      switch (event.target.dataset.id) {
        case "geisha":
          setGeishaIsFound(true);
          AudioFunctions().right.play();
          break;
        case "parasol":
          setParasolIsFound(true);
          AudioFunctions().right.play();
          break;
        case "sushi":
          setSushiIsFound(true);
          AudioFunctions().right.play();
          break;
        case "sumo":
          setSumoIsFound(true);
          AudioFunctions().right.play();
          break;
        default:
          break;
      }
      handleSetClickHistory(event);
    } else {
      AudioFunctions().wrong.play();
      handleErrorSpan();
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
  border: 8px solid ${({ theme }) => theme.colors.tokyo};
`;

const DropdownContainerTokyo = styled(DropdownContainer)`
  /* border: 5px dotted ${({ theme }) => theme.colors.tokyo}; */
  background-color: ${({ theme }) => theme.colors.tokyo};
  width: 118px;
`;

const DropdownLiTokyo = styled(DropdownLi)`
  background-color: ${({ theme }) => theme.colors.tokyo};
`;
