import { FC } from "react";
import { ReactComponent as EyeIconSVG } from "./../../assets/Icon/eye.svg";
import { IconProps } from "./type";

const EyeIcon: FC<IconProps> = ({ size, color }) => {
  return <EyeIconSVG width={size} height={size} color={color} />;
};
export default EyeIcon;