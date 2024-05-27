import styled from "@emotion/styled";
import { FC, ReactNode } from "react";
interface ButtonProps {
  width: string | number;
  height: string | number;
  children: ReactNode;
}
const ButtonStyle = styled.button<{ width: any; height: any }>(
  ({ width, height }) => ({
    background: "linear-gradient(to right bottom, #212428, #16181c);",
    boxShadow: "10px 10px 19px #1c1e22, -10px -10px 19px #2a2929;",
    border: "none",
    padding: 15,
    color: "white",
    borderRadius: 6,
    transition: "all .3s ease-in-out",
    cursor: "pointer",
    width: width,
    height: height,
    "&:hover": {
      background: "linear-gradient(to right bottom, #16181c, #212428);",
      transform: "translateY(-5px)",
      boxShadow: "10px 10px 19px #2a2929, -10px -10px 19px #1c1e22;",
    },
  })
);
const ButtonComponent: FC<ButtonProps> = ({ width, height, children }) => {
  return (
    <ButtonStyle width={width} height={height}>
      {children}
    </ButtonStyle>
  );
};

export default ButtonComponent;
