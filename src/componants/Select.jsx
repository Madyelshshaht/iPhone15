import i18n from "i18next";
// import { useTranslation } from "react-i18next";
// import cookies from "js-cookie";
import "../I18/I18"; // Ensure this imports the i18n configuration
import { MdOutlineLanguage } from "react-icons/md";
import { useEffect, useState } from "react";

const Select = () => {


    // const lang = localStorage.getItem("i18nextLng") || "en";

    // // selecet Menu
    // const handleLanguageChange = (e) => {
    //     const selectedLang = e.target.value;
    //     i18n.changeLanguage(selectedLang);
    //     localStorage.setItem("i18nextLng", selectedLang);
    // };

    const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en");

    const toggleLanguage = () => {
        const newLang = lang === "en" ? "ar" : "en";
        setLang(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem("i18nextLng", newLang);
    };

    useEffect(() => {
        window.document.dir = i18n.dir();
    }, [lang]);

    // const { t } = useTranslation();

    return (
        <>
            {/* <select
                value={lang}
                onChange={handleLanguageChange}
                className="px-2 py-1 rounded cursor-pointer bg-black text-white"
                aria-label="Select language"
            >
                <option value="en">English</option>
                <option value="ar">Arabic</option>
            </select> */}
            <button
                onClick={toggleLanguage}
                className="rounded bg-transparent text-gray-300 hover:text-white cursor-pointer hover:scale-110 transition flex items-center gap-1 px-2"
            >
                <span><MdOutlineLanguage /></span>
                {lang === "en" ? "AR" : "EN"}
            </button>
        </>
    )
}

export default Select