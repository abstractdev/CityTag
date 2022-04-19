import styled from "styled-components";
import { VFlexContainer } from "../styles/VFlexContainer.styles";


interface dropdownProps {
  mouseX: number,
  mouseY: number,
  broadwayText: string,
  hotdogText: string,
  ilovenyText: string,
  policeText: string,
  imageIsClicked: boolean
}

export function Nydropdown (props: dropdownProps) {
  const adjBoxY = (props.mouseY - 22)
  const adjBoxX = (props.mouseX - 22)
  const adjDropdownY = (props.mouseY + 17)
  const adjDropdownX = (props.mouseX + 17)

  return (
    <>
      {props.imageIsClicked &&
      <>
        <TargetBox style={{top: `${adjBoxY.toString()}px`, left: `${adjBoxX.toString()}px`}}/>
        <DropdownContainer style={{top: `${adjDropdownY.toString()}px`, left: `${adjDropdownX.toString()}px`}}>
          <ul>
            <DropdownLi data-id="broadway-div">{props.broadwayText}</DropdownLi>
            <DropdownLi data-id="hotdog-div">{props.hotdogText}</DropdownLi>
            <DropdownLi data-id="iloveny-div">{props.ilovenyText}</DropdownLi>
            <DropdownLi data-id="police-div">{props.policeText}</DropdownLi>
          </ul>
        </DropdownContainer>
      </>}
    </>
    );
}

const TargetBox = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  border: 5px solid black;
`

const DropdownContainer = styled(VFlexContainer)`
  width: 132px;
  height: 100px;
  border: 5px solid black;
  position: absolute;
  display: flex;
  flex-direction: column;
  color: #FFF;
  background-color: black;
  font-size: .8rem;
  `

const DropdownLi = styled.li`
  border: none;
  color: #FFF;
  cursor: pointer;
  background-color: black;
  margin: .5rem;
  &:hover{
    opacity: .5;
  }
`
