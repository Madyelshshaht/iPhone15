import { appleImg, bagImg, searchImg } from "../../utils";
import { navLists } from "../../constants";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { useTranslation } from "react-i18next";
import Select from "../Select";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { t } = useTranslation();
    const lang = localStorage.getItem('i18nextLng')

    return (
        <header className=" w-full py-5 sm:px-10 px-5 flex justify-between items-center relative">
            <nav className="flex w-full screen-max-width ">
                <img src={appleImg} alt="Apple" width={20} height={20} />

                {/* Desktop Menu */}
                <div className="flex flex-1 justify-center items-center max-sm:hidden gap-8">
                    {navLists.map((nav, i) => (
                        <div
                            key={i}
                            className="text-sm cursor-pointer text-gray-400 hover:text-white transition-all"
                        >
                            {/* {nav} */}
                            {t(nav)}
                        </div>
                    ))}
                    <Select />
                </div>

                {/* Mobile Menu */}
                {show && (
                    <>
                        {/* overlay */}
                        <div
                            onClick={() => setShow(false)}
                            className="fixed inset-0 sm:hidden bg-black/50 z-40"
                        ></div>

                        <div className={`  z-50 bottom-100 p-5 sm:hidden h-fit  w-[200px] rounded-sm bg-black shadow-lg
                            shadow-cyan-200 flex flex-col items-center justify-center gap-5 fixed top-15 
                        ${lang === 'en'? 'right-2' : 'left-2'}`}>
                            {navLists.map((nav, i) => (
                                <div
                                    key={i}
                                    className="text-sm cursor-pointer text-gray-400 hover:text-white"
                                >
                                    {/* {nav} */}
                                    {t(nav)}
                                </div>
                            ))}
                            <Select />
                        </div>
                    </>
                )}

                <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search" width={18} height={18} />
                    <img src={bagImg} alt="bag" width={18} height={18} />

                    <div
                        className="sm:hidden cursor-pointer transition-all duration-300"
                        onClick={() => setShow(!show)}
                    >
                        {!show ? <FaBars size={20} /> : <IoClose size={20} />}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
