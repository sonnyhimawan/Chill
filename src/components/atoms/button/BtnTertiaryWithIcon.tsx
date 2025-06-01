import { FC } from "react";
import { ButtonProps } from "../types/Button.type";
import GoogleIcon from "/src/assets/image/icon/google.svg";


const BtnTertiaryWithicon: FC<ButtonProps> = ({ label, type = "button", onClick }) => {
    return (
        <button
            className="flex justify-center items-center gap-2 text-white px-4 py-2 rounded-full outline-1 outline-gray-600 cursor-pointer text-sm font-medium font-myfont"
            type={type}
            onClick={onClick}
        >

            <img src={GoogleIcon} />
            {label}
        </button>
    );
};

export default BtnTertiaryWithicon;
