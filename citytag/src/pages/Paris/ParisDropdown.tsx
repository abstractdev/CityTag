import styled from "styled-components";
import { DropdownProps } from "../../Interfaces";
import { TargetBox } from "../../styles/Dropdown.styles";
import { DropdownContainer } from "../../styles/Dropdown.styles";
import { DropdownLi } from "../../styles/Dropdown.styles";
import { AudioFunctions } from "../../UtlityFunctions";

export function ParisDropdown(props: DropdownProps) {
  const {
    mouseX,
    mouseY,
    imageIsClicked,
    clickHistory,
    setClickHistory,
    brieText,
    fleurdelisText,
    monalisaText,
    tophatText,
    setBrieIsFound,
    setFleurdelisIsFound,
    setMonalisaIsFound,
    setTophatIsFound,
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
        case "brie":
          setBrieIsFound(true);
          AudioFunctions().right.play();
          break;
        case "fleurdelis":
          setFleurdelisIsFound(true);
          AudioFunctions().right.play();
          break;
        case "monalisa":
          setMonalisaIsFound(true);
          AudioFunctions().right.play();
          break;
        case "tophat":
          setTophatIsFound(true);
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
          <TargetBoxParis
            style={{
              top: `${adjBoxY.toString()}px`,
              left: `${adjBoxX.toString()}px`,
            }}
          />
          <DropdownContainerParis
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
              <DropdownLiParis
                data-id="brie"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {brieText}
              </DropdownLiParis>
              <DropdownLiParis
                data-id="fleurdelis"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {fleurdelisText}
              </DropdownLiParis>
              <DropdownLiParis
                data-id="monalisa"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {monalisaText}
              </DropdownLiParis>
              <DropdownLiParis
                data-id="tophat"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {tophatText}
              </DropdownLiParis>
            </ul>
          </DropdownContainerParis>
        </>
      )}
    </>
  );
}

//STYLED COMPONENTS//
const TargetBoxParis = styled(TargetBox)`
  border: 8px solid ${({ theme }) => theme.colors.paris};
`;

const DropdownContainerParis = styled(DropdownContainer)`
  /* border: 5px dotted ${({ theme }) => theme.colors.paris}; */
  background-color: ${({ theme }) => theme.colors.paris};
  width: 118px;
`;

const DropdownLiParis = styled(DropdownLi)`
  background-color: ${({ theme }) => theme.colors.paris};
`;
