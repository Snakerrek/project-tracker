import { useState, useRef } from "react";

import { convertNumberToTimeString } from "../../helpers";

import { Wrapper, Content, Button } from "./Timer.styles";

const Timer = ({ time }) => {
  const [timerIsGoing, setTimerIsGoing] = useState(false);
  const [timerValue, setTimerValue] = useState(time);
  const increment = useRef(null);

  const handleStart = () => {
    setTimerIsGoing(true);
    increment.current = setInterval(() => {
      setTimerValue((timerValue) => timerValue + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(increment.current);
    setTimerIsGoing(false);
    // TODO: Set current timerValue to cookies.
  };

  return (
    <Wrapper>
      <Content>
        <h2>{convertNumberToTimeString(timerValue)}</h2>
        {timerIsGoing ? (
          <Button onClick={handleStop}>Stop</Button>
        ) : (
          <Button onClick={handleStart}>Start</Button>
        )}
      </Content>
    </Wrapper>
  );
};

export default Timer;
