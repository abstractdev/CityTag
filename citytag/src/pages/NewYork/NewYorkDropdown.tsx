import styled from "styled-components";
import { DropdownProps } from "../../Interfaces";
import { TargetBox } from "../../styles/Dropdown.styles";
import { DropdownContainer } from "../../styles/Dropdown.styles";
import { DropdownLi } from "../../styles/Dropdown.styles";

export function NewYorkDropdown(props: DropdownProps) {
  const {
    mouseX,
    mouseY,
    imageIsClicked,
    clickHistory,
    setClickHistory,
    broadwayText,
    hotdogText,
    ilovenyText,
    policeText,
    setBroadwayIsFound,
    setHotdogIsFound,
    setIlovenyIsFound,
    setPoliceIsFound,
  } = props;
  const adjBoxY = mouseY - 22;
  const adjBoxX = mouseX - 22;
  const adjDropdownY = mouseY + 17;
  const adjDropdownX = mouseX + 17;

  function checkIfDivAndDropdownMatch(event: any) {
    if (clickHistory.includes(`${event.target.dataset.id}Div`)) {
      switch (event.target.dataset.id) {
        case "broadway":
          setBroadwayIsFound(true);
          break;
        case "hotdog":
          setHotdogIsFound(true);
          break;
        case "iloveny":
          setIlovenyIsFound(true);
          break;
        case "police":
          setPoliceIsFound(true);
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
          <TargetBoxNewYork
            style={{
              top: `${adjBoxY.toString()}px`,
              left: `${adjBoxX.toString()}px`,
            }}
          />
          <DropdownContainerNewYork
            style={{
              top: `${adjDropdownY.toString()}px`,
              left: `${adjDropdownX.toString()}px`,
            }}
          >
            <ul>
              <DropdownLiNewYork
                data-id="broadway"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {broadwayText}
              </DropdownLiNewYork>
              <DropdownLiNewYork
                data-id="hotdog"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {hotdogText}
              </DropdownLiNewYork>
              <DropdownLiNewYork
                data-id="iloveny"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {ilovenyText}
              </DropdownLiNewYork>
              <DropdownLiNewYork
                data-id="police"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {policeText}
              </DropdownLiNewYork>
            </ul>
          </DropdownContainerNewYork>
        </>
      )}
    </>
  );
}

//STYLED COMPONENTS//
const TargetBoxNewYork = styled(TargetBox)`
  border: 5px solid #f2c205;
`;

const DropdownContainerNewYork = styled(DropdownContainer)`
  /* border: 5px solid #f2c205; */
  background-color: #f2c205;
  color: #121212;
`;

const DropdownLiNewYork = styled(DropdownLi)`
  background-color: #f2c205;
`;
