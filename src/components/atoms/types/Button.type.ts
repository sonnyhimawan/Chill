import { SVGProps } from "react";

export interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  className : string;
}
