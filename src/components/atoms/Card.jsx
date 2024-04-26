import styled from "@emotion/styled";

export const Card =({backgroundColor, border, children})=>{
  const SCard = styled.div`
   background-color: ${backgroundColor};
   border:${border};
   border-radius:8px;
   padding: 32px;
   font-size: 64px;
   font-weight:bold;
   color: #333;
  `

  return (
    <SCard>
      {children}
    </SCard>
  );
}

