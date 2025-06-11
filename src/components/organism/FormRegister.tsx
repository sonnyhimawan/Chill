import React, { useState } from "react";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import FormInputWithicon from "../atoms/form/FormInputTextWithIcon";
import ForminputWithouticon from "../atoms/form/FormInputTextWithoutIcon";
import BtnSecondaryWithouticon from "../atoms/button/BtnSecondaryWithoutIcon";
import BtnTertiaryWithicon from "../atoms/button/BtnTertiaryWithIcon";


const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorKonfirmasiPassword, setErrorKonfirmasiPassword] = useState("");



    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            username,
            password,
            konfirmasiPassword
        }

        const user = JSON.parse(localStorage.getItem("user") || "[]");


        if (!username && !password && !konfirmasiPassword) {
            setErrorUsername("Silahkan isi username.");
            setErrorPassword("Silahkan isi password.");
            setErrorKonfirmasiPassword("Silahkan isi konfirmasi password.");
            return;
        } else if (user.some((user: { username: string }) => user.username === username)) {
            return setErrorUsername("Username sudah digunakan.");

        } else if (!password) {
            return setErrorPassword("Silahkan isi password.");

        } else if (password.length < 6) {
            return setErrorPassword("Password kurang dari 6 karakter.")

        } else if (password !== konfirmasiPassword || konfirmasiPassword !== password) {
            return setErrorKonfirmasiPassword("Konfirmasi password dan password harus sama.");
        } else {
            user.push(userData)
            localStorage.setItem("user", JSON.stringify(user));
            toast.success ("Pendaftaran Berhasil");
        }

        setUsername("")
        setPassword("")
        setKonfirmasiPassword("")
        setErrorUsername("")
        setErrorPassword("")
        setErrorKonfirmasiPassword("")

    };


    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto m-4">
            <ToastContainer
            theme="dark"
            />
            <div className="flex flex-col items-center gap-2 mb-4">
                <Link to="/">
                    <img src="assets/Logo-Horizon.png" alt="Chill Movie" className="mb-4"></img>
                </Link>
                <h1 className="text-white text-4xl font-medium font-myfont">Daftar</h1>
                <span className="text-white text-lg font-normal font-myfont">Selamat Datang!</span>
            </div>
            <div className="mb-4">
                <ForminputWithouticon
                    label="Username"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Masukan Username"
                    value={username}
                    onChange={setUsername}
                />
                {errorUsername && (
                    <small className="text-red-500 text-sm font-normal">{errorUsername}</small>
                )}
            </div>
            <div className="mb-4">
                <FormInputWithicon

                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Masukan Password"
                    value={password}
                    onChange={setPassword}
                />
                {(errorPassword) && (
                    <small className="text-red-500 text-sm font-normal"> {errorPassword}</small>
                )}
            </div>

            <div className="mb-4">
                <FormInputWithicon

                    label="Konfirmasi Password"
                    id="konfirmasi-password"
                    name="konfirmasi-password"
                    type="password"
                    placeholder="Konfirmasi Password"
                    value={konfirmasiPassword}
                    onChange={setKonfirmasiPassword}
                />
                {errorKonfirmasiPassword && (
                    <small className="text-red-500 text-sm font-normal">{errorKonfirmasiPassword}</small>
                )}
            </div>


            <div className="flex items-center">
                <span className="text-gray-400 text-base font-normal font-myfont">
                    Sudah Punya Akun?
                    <Link to="/Login" className="text-white text-base font-bold font-myfont">
                        Masuk
                    </Link>
                </span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <BtnSecondaryWithouticon
                    className="flex w-full justify-center items-center gap-2 text-white px-4 py-3 rounded-full bg-secondary cursor-pointer text-sm font-medium font-myfont mt-4"
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
