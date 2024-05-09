import styled from "@emotion/styled";

export const Title =({children, ...rest})=>{
  return (
    <STitle {...rest}>
      {children}
    </STitle>
  );
}

const STitle = styled.h1`
 color: #333;
 font-size: 64px;
 margin: 0;
 padding: 0;
`
