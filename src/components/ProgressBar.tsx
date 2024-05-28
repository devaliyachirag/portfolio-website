import styled from "@emotion/styled";
import React, { FC, ReactNode } from "react";
import AnimationContent from "./AnimationContent";
interface BarProps {
  width: string;
  children: ReactNode;
}
const RootContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});
const BarTitle = styled.div({
  color: "#c3cedd",
  fontSize: "12px",
  letterSpacing: 2,
  fontWeight: 400,
  textTransform: "uppercase",
});
const ProgressBg = styled.div({
  height: 13,
  overflow: "visible",
  fontSize: 14,
  borderRadius: 10,
  padding: 3,
  backgroundColor: "#212428",
  boxShadow:
    "inset 8px 8px 16px rgba(0, 0, 0, 0.4588235294), inset -8px -8px 16px rgba(56, 62, 69, 0.4588235294)",
});
const Bar = styled.div<{ width: string }>(({ width }) => ({
  maxWidth: width,
  height: 7,
  overflow: "visible",
  position: "relative",
  borderRadius: 14,
  background: "linear-gradient(145deg, #f02981 0%, #c81901 100%)",
  animation: " load 3s normal forwards;",
  animationDuration: ".6s",
  animationDelay: ".3s",
  "@keyframes load": {
    from: { width: 0 },
    to: width && width,
  },
}));
const Span = styled.span({
  position: "absolute",
  right: "-7px",
  top: "-22px",
  fontWeight: 400,
  color: "#c3cedd",
  fontSize: 14,
  textTransform: "uppercase",
  letterSpacing: 2,
});
const ProgressBar: FC<BarProps> = ({ children, width }) => {
  return (
    <RootContainer>
      <BarTitle>{children}</BarTitle>
      <ProgressBg>
        <Bar width={width}>
          <Span>{width}</Span>
        </Bar>
      </ProgressBg>
    </RootContainer>
  );
};

export default ProgressBar;
