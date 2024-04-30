import styled from "@emotion/styled";
import { Card } from "../atoms/Card";
import { Title } from "../atoms/Title";
import { ActionButtons } from "../molecules/ActionButtons";
import { useCallback, useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapseTime, setElapseTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(null);

  const convertToDisplayedTime = (elapseTime) => {
    const minutes = Math.floor(elapseTime / (1000 * 60));
    const seconds = Math.floor((elapseTime % (1000 * 60)) / 1000);
    const milliseconds = elapseTime % 1000;
    return `
    ${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}
    `;
  };

  useEffect(() => {
    if (!isRunning) return;
    intervalIdRef.current = setInterval(() => {
      setElapseTime(Date.now() - startTimeRef.current + elapseTime);
    }, 10);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const handleStart = useCallback(() => {
    setIsRunning(true);
    startTimeRef.current = Date.now();
  }, []);

  const handleStop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const handleReset = useCallback(() => {
    setElapseTime(0);
  }, []);

  return (
    <SWrapper>
      <SAppCard backgroundColor="#eee" border="1px #ddd solid">
        <STitle>STOPWATCH</STitle>
        <SStopwatchCard backgroundColor="#fff" border="1px #ddd solid">
          {convertToDisplayedTime(elapseTime)}
        </SStopwatchCard>
        <ActionButtons
          handleStart={handleStart}
          handleStop={handleStop}
          handleReset={handleReset}
          disabled={isRunning}
        />
      </SAppCard>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const STitle = styled(Title)`
  text-align: center;
`;

const SAppCard = styled(Card)`
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SStopwatchCard = styled(Card)`
  text-align: center;
`;
