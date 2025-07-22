// import i18n from "i18next";
// // import { useTranslation } from "react-i18next";
// // import cookies from "js-cookie";
// import "../I18/I18"; // Ensure this imports the i18n configuration

// import { useEffect } from "react";

// const Select = () => {


//     const lang = localStorage.getItem("i18nextLng") || "en";

//     // selecet Menu
//     const handleLanguageChange = (e) => {
//         const selectedLang = e.target.value;
//         i18n.changeLanguage(selectedLang);
//         localStorage.setItem("i18nextLng", selectedLang);
//     };

//     useEffect(() => {
//         window.document.dir = i18n.dir();
//     }, [lang]);

//     // const { t } = useTranslation();


//     return (
//         <>
//             <select
//                 value={lang}
//                 onChange={handleLanguageChange}
//                 className="px-2 py-1 rounded cursor-pointer hover:bg-gray-800 bg-gray-800 text-white"
//                 aria-label="Select language"
//             >
//                 <option value="en">English</option>
//                 <option value="ar">Arabic</option>
//             </select>
//         </>
//     )
// }

// export default Select