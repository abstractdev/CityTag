import styled from "styled-components";
import { useState, useEffect } from "react";

export function Timer() {

  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <>
      <TimerDiv>
        <MinutesSpan>{("0" + Math.floor((time / 60000) % 60)).slice(-1)}<span style={{fontSize: '70%'}}>min</span>
        </MinutesSpan>
        <SecondsSpan>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}<span style={{fontSize: '70%'}}>s</span> 
        </SecondsSpan>
        <MillisecondsSpan>{("0" + (time % 1000)).slice(-2)}<span style={{fontSize: '70%'}}>ms</span>
        </MillisecondsSpan>
      </TimerDiv>
    </>
  );
}

const TimerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
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