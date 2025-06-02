
import { SVGProps } from "react";
export interface FormProps {

    label: string;
    id : string;
    name : string;
    placeholder : string;
    type: "password" | "date" | "text";
    value : string;
    onChange : (value: string) => void;
    icon?: React.FC<SVGProps<SVGSVGElement>>;
}