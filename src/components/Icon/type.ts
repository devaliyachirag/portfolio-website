import { StyledFC } from "../../type/styledFC";

export interface IconProps {
  color: string;
  size?: number | undefined;
}
export type IconComponent = StyledFC<IconProps>;
