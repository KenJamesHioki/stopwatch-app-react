import styled from "@emotion/styled";
import { Button } from "../atoms/Button";

export const ActionButtons =({onClick,children})=>{
  return (
    <SWrapper>
      <Button backgroundColor="#5ced73">START</Button>
      <Button backgroundColor="#ff8f8f">STOP</Button>
      <Button backgroundColor="#a3a3ff">RESET</Button>
    </SWrapper>
  );
}

const SWrapper = styled.div`
  display:flex;
`;