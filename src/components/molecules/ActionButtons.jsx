import styled from "@emotion/styled";
import { Button } from "../atoms/Button";

export const ActionButtons =({handleStart, handleStop, handleReset})=>{
  return (
    <SWrapper>
      <Button backgroundColor="#5ced73" onClick={handleStart}>START</Button>
      <Button backgroundColor="#ff8f8f" onClick={handleStop}>STOP</Button>
      <Button backgroundColor="#a3a3ff" onClick={handleReset}>RESET</Button>
    </SWrapper>
  );
}

const SWrapper = styled.div`
  display:flex;
`;