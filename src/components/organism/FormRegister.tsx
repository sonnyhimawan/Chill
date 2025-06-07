import { useState } from "react";
import { Link } from "react-router";
import FormInputWithicon from "../atoms/form/FormInputTextWithIcon";
import ForminputWithouticon from "../atoms/form/FormInputTextWithoutIcon";
import BtnSecondaryWithouticon from "../atoms/button/BtnSecondaryWithoutIcon";
import BtnTertiaryWithicon from "../atoms/button/BtnTertiaryWithIcon";


const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [konfirmasiPassword, setKonfirmasiPassword] = useState("");


    return (
        <form className="max-w-md mx-auto m-6">
            <div className="flex flex-col items-center gap-2 mb-8">
                <Link to="/">
                <img src="/src/assets/Logo-Horizon.png" alt="Chill Movie" className="mb-6"></img>
                </Link>
                <h1 className="text-white text-4xl font-medium font-myfont">Daftar</h1>
                <span className="text-white text-lg font-normal font-myfont">Selamat Datang!</span>
            </div>
            <ForminputWithouticon

                label="Username"
                id="username"
                name="username"
                type="text"
                placeholder="Masukan Username"
                value={username}
                onChange={setUsername}
            />

            <FormInputWithicon

                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Masukan Password"
                value={password}
                onChange={setPassword}
            />

            <FormInputWithicon

                label="Konfirmasi Password"
                id="konfirmasi-password"
                name="konfirmasi-password"
                type="password"
                placeholder="Konfirmasi Password"
                value={konfirmasiPassword}
                onChange={setKonfirmasiPassword}
            />

            <div className="flex justify-between items-center">
                <span className="text-gray-400 text-base font-normal font-myfont">
                    Sudah Punya Akun?
                    <Link to="/Login" className="text-white text-base font-bold font-myfont">
                        Masuk
                    </Link>
                </span>
            </div>
            <div className="flex flex-col items-center gap-6">
            <BtnSecondaryWithouticon
                className="flex w-full justify-center items-center gap-2 text-white px-4 py-3 rounded-full bg-secondary cursor-pointer text-sm font-medium font-myfont mt-12"
                label="Daftar"
                type="submit"
            />
            <span className="text-gray-400 text-base font-normal">Atau</span>
            <BtnTertiaryWithicon
                className="flex w-full justify-center items-center gap-2 text-white px-4 py-3 rounded-full border border-gray-700 cursor-pointer text-sm font-medium font-myfont"
                label="Daftar Dengan Google"
                type="button"
            />
            </div>
        </form>


    );
};

export default RegisterForm;
