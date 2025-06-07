import { FC } from "react";
import { ButtonProps } from "../types/Button.type";


const BtnPrimary: FC<ButtonProps> = ({ label, type = "button", onClick, icon: Icon , className, children  }) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {Icon && <Icon className="absolute top-3 right-3 w-5 h-5 " />}
            {label}
            {children}
        </button>
      
    );
};

export default BtnPrimary;
