import { useState, useRef, useEffect } from "react";

import { convertNumberToTimeString } from "../../helpers";

import { Wrapper, Content, Button } from "./Timer.styles";

const Timer = ({ index, time, saveTimerValue }) => {
  const [timerIsGoing, setTimerIsGoing] = useState(false);
  const [timerValue, setTimerValue] = useState(time);
  const increment = useRef(null);

  useEffect(() => {
    setTimerValue(time);
    setTimerIsGoing(false);
    clearInterval(increment.current);
  }, [time]);

  const handleStart = () => {
    setTimerIsGoing(true);
    increment.current = setInterval(() => {
      setTimerValue((timerValue) => timerValue + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(increment.current);
    saveTimerValue(index, timerValue);
    setTimerIsGoing(false);
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
