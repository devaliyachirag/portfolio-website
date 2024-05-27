import { FC } from "react";
import { ReactComponent as FacebookIconSVG } from "./../../assets/Icon/facebook.svg";
import { IconProps } from "./type";

const FaceBookIcon: FC<IconProps> = ({ size, color }) => {
  return <FacebookIconSVG width={size} height={size} color={color} />;
};
export default FaceBookIcon;
