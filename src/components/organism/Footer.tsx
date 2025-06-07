import { Link } from "react-router";
import DownIcon from "/src/assets/image/icon/down.svg?react";
import BtnPrimary from "../atoms/button/BtnPrimaryWithIcon";


const Footer = () => {


    return (

        <footer>
            <div
                className="bg-chill grid span-3 gap-y-10 px-8 py-10 border border-t-1 border-t-border sm:px-10 lg:px-16 w-full lg:grid-cols-[0.8fr_2fr] md:grid-cols-[1fr_2.5fr]"
            >
                <div className="flex flex-col lg:justify-center space-y-6 lg:space-y-6">
                    <img
                        src="src/assets/logo/Logo.png"
                        height="24"
                        width="140"
                        alt="Chill Website Logo"
                    />
                    <p className="font-myfont text-gray-500 text-base font-normal">
                        @2023 Chill All Rights Reserved
                    </p>
                </div>


                <div
                    className="hidden lg:grid lg:grid-cols-[2fr_1fr] md:grid md:grid-cols-[1fr_0.5fr]"
                >
                    <div className="lg:space-y-5 md:space-y-5">
                        <h1
                            className="font-myfont text-lg md:text-white md:text-lg md:font-medium lg:text-white lg:text-lg lg:font-medium"
                        >
                            Genre
                        </h1>
                        <div
                            className="md:grid md:gap-y-4 md:grid-cols-2 lg:grid lg:grid-cols-4"
                        >
                            <div>
                                <ul className="space-y-3">
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Aksi</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Anak-Anak</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Anime</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Britania</Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="space-y-3">
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Drama</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Fantasi</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Kejahatan</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">KDrama</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Komedi</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Petualangan</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Perang</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Romantis</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Sains & Alam</Link>
                                    </li>
                                    <li
                                        className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                                    >
                                        <Link to="#">Thriller</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lg:ml-auto lg:space-y-5 md:space-y-5">
                        <h1
                            className="font-myfont text-lg md:text-white md:text-lg md:font-medium lg:text-white lg:text-lg lg:font-medium"
                        >
                            Bantuan
                        </h1>
                        <ul className="space-y-3">
                            <li
                                className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                            >
                                <Link to="#">FAQ</Link>
                            </li>
                            <li
                                className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                            >
                                <Link to="#">Kontak Kami</Link>
                            </li>
                            <li
                                className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                            >
                                <Link to="#">Privasi</Link>
                            </li>
                            <li
                                className="font-myfont md:text-lg md:font-normal md:text-gray-500 lg:text-lg lg:font-normal lg:text-gray-500"
                            >
                                <Link to="#">Syarat & Ketentuan</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-ful flex flex-col gap-y-4 md:hidden lg:hidden">
                    <div>
                        <div className="flex items-center mb-4">
                            <BtnPrimary
                                label="Genre"
                                type="button"
                                className="font-myfont mr-auto text-white text-lg font-medium cursor-pointer"
                                >
                                <DownIcon></DownIcon></BtnPrimary>
                        </div>
                        <div>
                            <ul className="grid grid-rows-8 grid-flow-col gap-y-3 gap-x-3">
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Aksi</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Anak-Anak</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Anime</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Britania</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Drama</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Fantasi</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Kejahatan</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> KDrama</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Komedi</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Petualangan</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Perang</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Romantis</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Sains & Alam</Link>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <Link to="#"> Thriller</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center mb-4">
                            <button
                                className="font-myfont mr-auto text-white text-lg font-medium"
                            >
                                Bantuan</button><ion-icon
                                    name="chevron-forward"
                                    class="font-myfont text-white transition-transform duration-300"
                                ></ion-icon>
                        </div>

                        <div>
                            <ul className="grid grid-cols gap-y-3">
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <a href="#"> FAQ</a>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <a href="#"> Kontak Kami</a>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <a href="#"> Privasi</a>
                                </li>
                                <li className="font-myfont text-gray-500 text-base font-medium">
                                    <a href="#"> Syarat & Ketentuan</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    );




}

export default Footer;