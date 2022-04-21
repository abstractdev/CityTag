import styled from "styled-components";
import { VFlexContainer } from "./VFlexContainer.styles";

export const TargetBox = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  outline: 3px solid #121212;
`;

export const DropdownContainer = styled(VFlexContainer)`
  width: 132px;
  height: 100px;
  border: 3px solid #121212;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

export const DropdownLi = styled.li`
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  &:hover {
    opacity: 0.5;
  }
`;
