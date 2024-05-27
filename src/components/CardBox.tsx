import styled from "@emotion/styled";
import React, { FC, ReactNode } from "react";

interface CardBoxProp {
  width?: string | number;
  height?: string | number;
  children: ReactNode;
}

const RootContainer = styled.div<{
  width: string | number | undefined;
  height: string | number | undefined;
}>(({ width, height }) => ({
  background: "linear-gradient(145deg, #1e2024, #23272b)",
  border: "1px solid rgba(0, 0, 0, 0.25)",
  borderRadius: 10,
  width: width ? width : "auto",
  height: height ? height : "auto",
  transition: "background 1s ease-in-out", 
  "&:hover": {
    background: "linear-gradient(to right bottom, #212428, #16181c)",
  },
}));

const CardBox: FC<CardBoxProp> = ({ children, width, height }) => {
  return (
    <RootContainer height={height} width={width}>
      {children}
    </RootContainer>
  );
};

export default CardBox;
