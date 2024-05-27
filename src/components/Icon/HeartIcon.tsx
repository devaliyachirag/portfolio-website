import { FC } from "react";
import { ReactComponent as HeartIconSVG } from "./../../assets/Icon/heart.svg";
import { IconProps } from "./type";

const HeartIcon: FC<IconProps> = ({ size, color }) => {
  return <HeartIconSVG width={size} height={size} color={color} />;
};
export default HeartIcon;
