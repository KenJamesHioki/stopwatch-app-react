import styled from "@emotion/styled";
import { memo } from "react";

export const Button = memo(({ backgroundColor, onClick, children, disabled }) => {
  console.log('button');
  return <SButton backgroundColor={backgroundColor} onClick={onClick} disabled={disabled}>{children}</SButton>;
});


const SButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  padding: 20px 32px;
  font-size: 28px;
  border: none;
  border-radius: 8px;
  color: #333;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:active {
    opacity: 1;
  }
  &:disabled{
    opacity:0.5;
    cursor: default;
  }
`;