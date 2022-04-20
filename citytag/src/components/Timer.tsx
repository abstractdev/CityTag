import styled from "styled-components";

interface TimerProps {
  time: number;
  isActive: boolean;
}

export function Timer(props: TimerProps) {
  
  return (
    <>
      <TimerDiv isActive={props.isActive}>
        <MinutesSpan>{("0" + Math.floor((props.time / 60000) % 60)).slice(-1)}<span style={{fontSize: '70%'}}>m</span>
        </MinutesSpan>
        <SecondsSpan>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}<span style={{fontSize: '70%'}}>s</span> 
        </SecondsSpan>
        <MillisecondsSpan>{("0" + (props.time % 1000)).slice(-2)}<span style={{fontSize: '70%'}}>ms</span>
        </MillisecondsSpan>
      </TimerDiv>
    </>
  );
}

interface TimerDivProps {
  isActive: boolean;
}

const TimerDiv = styled.div<TimerDivProps>`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: .2em;
  border: ${(props) => (!props.isActive ? "3px solid #FFF" : "none")};
  border-radius: ${(props) => (!props.isActive ? "5px" : "none")};
  @media screen and (max-width: 630px){
    font-size: .6rem;
  }
`
const MillisecondsSpan = styled.span`
color: #FFF;
`
const SecondsSpan = styled.span`
color: #FFF;
`
const MinutesSpan = styled.span`
color: #FFF;
`