import { FC } from "react";
import { ButtonProps } from "../types/Button.type";



const BtnTertiaryWithouticon: FC<ButtonProps> = ({ label, type = "button", onClick }) => {
    return (
        <button
            className="flex justify-center items-center gap-2 text-white px-4 py-2 rounded-full outline-1 outline-gray-600 cursor-pointer text-sm font-medium font-myfont"
            type={type}
            onClick={onClick}
        >

            {label}
        </button>
    );
};

export default BtnTertiaryWithouticon;
