import styled from "@emotion/styled";
import { Button } from "../atoms/Button";
import { memo } from "react";

export const ActionButtons =memo(({handleStart, handleStop, handleReset, disabled})=>{
  // console.log(disabled);
  return (
    <SWrapper>
      <Button backgroundColor="#5ced73" onClick={handleStart} disabled={disabled}>START</Button>
      <Button backgroundColor="#ff8f8f" onClick={handleStop} disabled={!disabled}>STOP</Button>
      <Button backgroundColor="#a3a3ff" onClick={handleReset} disabled={disabled}>RESET</Button>
    </SWrapper>
  );
})

const SWrapper = styled.div`
  display:flex;
`;