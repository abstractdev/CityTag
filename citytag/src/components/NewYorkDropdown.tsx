import styled from "styled-components";
import { VFlexContainer } from "../styles/VFlexContainer.styles";

interface dropdownProps {
  mouseX: number;
  mouseY: number;
  broadwayText: string;
  hotdogText: string;
  ilovenyText: string;
  policeText: string;
  imageIsClicked: boolean;
  clickHistory: string[];
  // broadwayIsFound: boolean;
  // hotdogIsFound: boolean;
  // ilovenyIsFound: boolean;
  // policeIsFound: boolean;
  setClickHistory: (clickHistory: string[]) => void;
  setBroadwayIsFound: (broadwayIsFound: boolean) => void;
  setHotdogIsFound: (hotdogIsFound: boolean) => void;
  setIlovenyIsFound: (ilovenyIsFound: boolean) => void;
  setPoliceIsFound: (policeIsFound: boolean) => void;
}

export function NewYorkDropdown(props: dropdownProps) {
  const adjBoxY = props.mouseY - 22;
  const adjBoxX = props.mouseX - 22;
  const adjDropdownY = props.mouseY + 17;
  const adjDropdownX = props.mouseX + 17;

  function checkIfDivAndDropdownMatch(event: any) {
    if (props.clickHistory.includes(`${event.target.dataset.id}Div`)) {
      alert(`${event.target.dataset.id} has been found!`);
      switch (event.target.dataset.id) {
        case "broadway":
          props.setBroadwayIsFound(true);
          break;
        case "hotdog":
          props.setHotdogIsFound(true);
          break;
        case "iloveny":
          props.setIlovenyIsFound(true);
          break;
        case "police":
          props.setPoliceIsFound(true);
          break;
        default:
          break;
      }
      handleSetClickHistory(event);
    }
  }

  function handleSetClickHistory(event: any) {
    const filtered = props.clickHistory.filter(
      (e: string) => e !== `${event.target.dataset.id}Div`
    );
    props.setClickHistory([...filtered, `${event.target.dataset.id}Found`]);
  }

  return (
    <>
      {props.imageIsClicked && (
        <>
          <TargetBox
            style={{
              top: `${adjBoxY.toString()}px`,
              left: `${adjBoxX.toString()}px`,
            }}
          />
          <DropdownContainer
            style={{
              top: `${adjDropdownY.toString()}px`,
              left: `${adjDropdownX.toString()}px`,
            }}
          >
            <ul>
              <DropdownLi
                data-id="broadway"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {props.broadwayText}
              </DropdownLi>
              <DropdownLi
                data-id="hotdog"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {props.hotdogText}
              </DropdownLi>
              <DropdownLi
                data-id="iloveny"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {props.ilovenyText}
              </DropdownLi>
              <DropdownLi
                data-id="police"
                onClick={(event) => checkIfDivAndDropdownMatch(event)}
              >
                {props.policeText}
              </DropdownLi>
            </ul>
          </DropdownContainer>
        </>
      )}
    </>
  );
}

//STYLED COMPONENTS//
const TargetBox = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  border: 5px solid black;
`;

const DropdownContainer = styled(VFlexContainer)`
  width: 132px;
  height: 100px;
  border: 5px solid black;
  position: absolute;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: black;
  font-size: 0.8rem;
`;

const DropdownLi = styled.li`
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: black;
  margin: 0.5rem;
  &:hover {
    opacity: 0.5;
  }
`;
