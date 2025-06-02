import { FC } from "react";
import { FormProps } from "../types/Form.type";
import { useState } from "react";
import FormLabel from "./FormLabel";
import EyeIcon from "/src/assets/image/icon/eye.svg?react";
import EyeOffIcon from "/src/assets/image/icon/eye-off.svg?react";





const FormInputWithicon: FC<FormProps> = ({ label, id, name, placeholder, value,type, onChange }) => {

    const [showPassword, setShowPassword] = useState(false);

    const isPasswordType = type === "password";
    const inputType = isPasswordType ? (showPassword ? "text" : "password") : type;

    return (
        <div className="mb-4">
        <FormLabel label={label}>
            <div className="relative mt-2">
                <input
                    id={id}
                    name={name}
                    type={inputType}
                    value={value}
                    placeholder={placeholder}
                    onChange={e => onChange(e.target.value)}
                    className="border border-secondary outline-0 focus:border-primary rounded-full px-3 py-2 w-full text-base font-normal font-myfont"
                />
              {isPasswordType && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-3 right-3 w-5 h-5 text-gray-500"
                    >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </button>

              )}
            </div>
        </FormLabel>
        </div>

    );


}

export default FormInputWithicon;