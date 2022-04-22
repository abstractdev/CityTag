import styled from "styled-components";
import { DropdownProps } from "../../Interfaces";
import { TargetBox } from "../../styles/Dropdown.styles";
import { DropdownContainer } from "../../styles/Dropdown.styles";
import { DropdownLi } from "../../styles/Dropdown.styles";
import { AudioFunctions } from "../../UtlityFunctions";

export function RioDropdown(props: DropdownProps) {
  const {
    mouseX,
    mouseY,
    imageIsClicked,
    clickHistory,
    setClickHistory,
    dancerText,
    flagText,
    soccerText,
    tambourineText,
    setDancerIsFound,
    setFlagIsFound,
    setSoccerIsFound,
    setTambourineIsFound,
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
        case "dancer":
          setDancerIsFound(true);
          AudioFunctions().right.play();
          break;
        case "flag":
          setFlagIsFound(true);
          AudioFunctions().right.play();
          break;
        case "soccer":
          setSoccerIsFound(true);
          AudioFunctions().right.play();
          break;
        case "tambourine":
          setTambourineIsFound(true);
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
          <TargetBoxRio
            style={{
              top: `${adjBoxY.toString()}px`,
              left: `${adjBoxX.toString()}px`,
            }}
          />
          <DropdownContainerRio
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
              <DropdownLiRio
                data-id="dancer"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {dancerText}
              </DropdownLiRio>
              <DropdownLiRio
                data-id="flag"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {flagText}
              </DropdownLiRio>
              <DropdownLiRio
                data-id="soccer"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {soccerText}
              </DropdownLiRio>
              <DropdownLiRio
                data-id="tambourine"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {tambourineText}
              </DropdownLiRio>
            </ul>
          </DropdownContainerRio>
        </>
      )}
    </>
  );
}

//STYLED COMPONENTS//
const TargetBoxRio = styled(TargetBox)`
  border: 8px solid ${({ theme }) => theme.colors.rio};
`;

const DropdownContainerRio = styled(DropdownContainer)`
  /* border: 5px dotted ${({ theme }) => theme.colors.rio}; */
  background-color: ${({ theme }) => theme.colors.rio};
  width: 96px;
`;

const DropdownLiRio = styled(DropdownLi)`
  background-color: ${({ theme }) => theme.colors.rio};
`;
