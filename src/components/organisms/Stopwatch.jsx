import styled from "@emotion/styled";
import { Card } from "../atoms/Card";
import { Title } from "../atoms/Title";
import { ActionButtons } from "../molecules/ActionButtons";

export const Stopwatch = () => {
  return (
    <SWrapper>
      <Card backgroundColor="#eee" border="1px #ddd solid">
        <Title>STOPWATCH</Title>
        <Card backgroundColor="#fff" border="1px #ddd solid">00:00.000</Card>
        <ActionButtons />
      </Card>
    </SWrapper>
  );
};

const SWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;
