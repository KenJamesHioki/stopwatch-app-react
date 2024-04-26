import styled from "@emotion/styled";
import { Card } from "../atoms/Card";
import { Title } from "../atoms/Title";
import { ActionButtons } from "../molecules/ActionButtons";
import { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [accumulatedTime, setAccumulatedTime] = useState("00:00.000");
  const [startTime, setStartTime] = useState(null);
  const intervalIdRef = useRef(null);

  useEffect(()=>{
    if (!isRunning) return;
    intervalIdRef.current = setInterval(() => {
      alert('stopwatch')
    }, 1000);

    return ()=>clearInterval(intervalIdRef.current);

  },[isRunning])

  const handleStart =()=>{
    setIsRunning(true);
    setStartTime(Date.now());
  }

  const handleStop =()=>{
    setIsRunning(false);
  }

  const handleReset =()=>{
    setAccumulatedTime("reset!");
  }

  return (
    <SWrapper>
      <Card backgroundColor="#eee" border="1px #ddd solid">
        <Title>STOPWATCH</Title>
        <Card backgroundColor="#fff" border="1px #ddd solid">
          {accumulatedTime}
        </Card>
        <ActionButtons handleStart={handleStart} handleStop={handleStop} handleReset={handleReset}/>
      </Card>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;
