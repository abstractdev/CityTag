import styled from "styled-components";

interface TimerProps {
  time: number;
  isActive: boolean;
}

export function Timer(props: TimerProps) {
  return (
    <>
      <TimerDiv isActive={props.isActive}>
        <TimerSpan>
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-1)}
          <span style={{ fontSize: "70%" }}>min</span>
        </TimerSpan>
        <TimerSpan>
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
          <span style={{ fontSize: "70%" }}>.</span>
        </TimerSpan>
        <TimerSpan>
          {("0" + (props.time % 1000)).slice(-2)}
          <span style={{ fontSize: "70%" }}>s</span>
        </TimerSpan>
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
  @media screen and (max-width: 644px) {
    font-size: 0.6rem;
  }
`;
const TimerSpan = styled.span`
  color: #fff;
  font-weight: 900;
`;
