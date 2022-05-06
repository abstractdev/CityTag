import styled from "styled-components";
import { convertMsToDisplayTime } from "../UtlityFunctions";
import { TimerProps } from "../Interfaces";

export function Timer(props: TimerProps) {
  return (
    <>
      <TimerDiv isActive={props.isActive}>
        <TimerSpan>{convertMsToDisplayTime(props.time)}</TimerSpan>
      </TimerDiv>
    </>
  );
}

interface TimerDivProps {
  isActive: boolean;
}

const TimerDiv = styled.div<TimerDivProps>`
  font-family: "metropolis";
  padding: 0.2em;
  border: ${(props) => (!props.isActive ? "1px solid #FFF" : "none")};
  border-radius: ${(props) => (!props.isActive ? "5px" : "none")};
  @media screen and (max-width: 670px) {
    font-size: 0.6rem;
  }
`;
const TimerSpan = styled.span`
  color: #fff;
  font-weight: 900;
`;
