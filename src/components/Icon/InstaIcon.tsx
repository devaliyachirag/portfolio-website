import { FC } from "react";
import { ReactComponent as InstaGramIcon } from "./../../assets/Icon/instagram.svg";
import { IconProps } from "./type";

const InstaIcon: FC<IconProps> = ({ size, color }) => {
  return <InstaGramIcon width={size} height={size} color={color} />;
};
export default InstaIcon;