import { FC } from "react";
import { ButtonProps } from "../types/Button.type";
import IInformationOutline from "/src/assets/image/icon/information-outline.svg";


const BtnPrimary: FC<ButtonProps> = ({ label, type = "button", onClick }) => {
    return (
        <button
            className="flex justify-center items-center gap-2 text-white px-4 py-2 rounded-full bg-primary cursor-pointer text-sm font-medium font-myfont"
            type={type}
            onClick={onClick}
        >

            <img src={IInformationOutline} />
            {label}
        </button>
    );
};

export default BtnPrimary;
