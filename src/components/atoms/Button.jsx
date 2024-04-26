import styled from "@emotion/styled";

export const Button = ({ backgroundColor, onClick, children }) => {
  const SButton = styled.button`
    background-color: ${backgroundColor};
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
  `;

  return <SButton onClick={onClick}>{children}</SButton>;
};

