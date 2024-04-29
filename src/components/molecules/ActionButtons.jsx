import styled from "@emotion/styled";
import { Button } from "../atoms/Button";
import { memo } from "react";

export const ActionButtons =memo(({handleStart, handleStop, handleReset, disabled})=>{
  // console.log(disabled);
  return (
    <SWrapper>
      <SButton backgroundColor="#5ced73" onClick={handleStart} disabled={disabled}>START</SButton>
      <SButton backgroundColor="#ff8f8f" onClick={handleStop} disabled={!disabled}>STOP</SButton>
      <SButton backgroundColor="#a3a3ff" onClick={handleReset} disabled={disabled}>RESET</SButton>
    </SWrapper>
  );
})

const SWrapper = styled.div`
  display:flex;
  gap: 8px;
  margin-top: 8px;
`;

const SButton = styled(Button)`
  flex: 1;
`;