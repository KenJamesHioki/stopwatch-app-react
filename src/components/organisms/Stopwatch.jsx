import styled from "@emotion/styled";
import { Card } from "../atoms/Card";
import { Title } from "../atoms/Title";
import { ActionButtons } from "../molecules/ActionButtons";
import { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  //TODO:stateが無駄に多い気がする。減らせないかを検討。
  const [isRunning, setIsRunning] = useState(false);
  const [accumulatedTime, setAccumulatedTime] = useState(0);
  const [displayedTime, setDisplayedTime] = useState("00:00.000");
  const [startTime, setStartTime] = useState(null);
  const intervalIdRef = useRef(null);

  const convertToDisplayedTime = elapseTimeMs => {
    const minutes = Math.floor(elapseTimeMs / (1000 * 60));
    const seconds = Math.floor((elapseTimeMs % (1000 * 60)) / 1000);
    const milliseconds = elapseTimeMs % 1000;
    return `
    ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}
    `;
  }

  useEffect(() => {
    if (!isRunning) return;
    let elapseTimeMs = 0;
    intervalIdRef.current = setInterval(() => {
      elapseTimeMs = Date.now() - startTime + accumulatedTime;
      const nextDisplayedTime = convertToDisplayedTime(elapseTimeMs);
      setDisplayedTime(nextDisplayedTime);
    }, 10);

    return () => {
      clearInterval(intervalIdRef.current);
      setAccumulatedTime(elapseTimeMs);
    };

  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setAccumulatedTime(0);
    setDisplayedTime("00:00.000");
  };

  return (
    <SWrapper>
      <Card backgroundColor="#eee" border="1px #ddd solid">
        <Title>STOPWATCH</Title>
        <Card backgroundColor="#fff" border="1px #ddd solid">
          {displayedTime}
        </Card>
        <ActionButtons
          handleStart={handleStart}
          handleStop={handleStop}
          handleReset={handleReset}
        />
      </Card>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;
