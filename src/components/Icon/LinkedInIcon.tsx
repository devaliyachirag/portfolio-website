import { FC } from "react";
import { ReactComponent as LinkedInIcon } from "../../assets/Icon/linkedin.svg";
import { IconProps } from "./type";

const LinkedIn: FC<IconProps> = ({ size, color }) => {
  return <LinkedInIcon width={size} height={size} color={color} />;
};
export default LinkedIn;