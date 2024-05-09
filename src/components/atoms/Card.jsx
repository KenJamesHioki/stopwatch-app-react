import styled from "@emotion/styled";

export const Card =({backgroundColor, border, children, ...rest})=>{
  
  return (
    <SCard {...rest} backgroundColor={backgroundColor} border={border}>
      {children}
    </SCard>
  );
}

const SCard = styled.div`
 background-color: ${props=>props.backgroundColor};
 border:${props=>props.border};
 border-radius:8px;
 padding: 32px;
 font-size: 64px;
 font-weight:bold;
 color: #333;
`
