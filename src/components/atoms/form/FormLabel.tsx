import { FC } from "react";
import { LabelProps } from "../types/label.type";




const FormLabel:FC<LabelProps> = ({label = "Form Label", children}) => {

    return (

        <label className="text-white font-normal text-lg">
            {label}
            {children}
        </label>
 
    )



}

export default FormLabel;