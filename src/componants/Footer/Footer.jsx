import React from "react";
import { footerLinks } from "../../constants";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray-300 text-xs">
                        {t("footer.f-t1")} {" "}
                        <span className="underline text-blue-600">
                            {t("footer.f-t2")} {" "}
                        </span>
                        or <span className="underline text-blue-600">{t("footer.f-t3")}</span>{" "}
                        {t("footer.f-t4")}
                    </p>
                    <p className="font-semibold text-gray-300 text-xs">
                        {t("footer.f-t5")}
                    </p>
                </div>

                {/* boarder */}
                <div className="bg-neutral-700 my-5 h-[1px] w-full" />

                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-gray-300 text-xs">
                        {t("footer.f-t6")} {" "}
                        <a
                            href="https://madyelshshaht.github.io/Mohamed-Elshahat/"
                            target="_blank"
                            className="underline text-blue-600"
                        >
                            {t("footer.f-t7")}
                        </a> {" "}
                        .
                    </p>
                    <div className="flex flex-wrap gap-3 sm:mt-0 mt-3">
                        {footerLinks.map((link, i) => (
                            <p key={link} className="sm:font-semibold text-gray-300 text-xs ">
                                {t(link)} {" "}
                                {i !== footerLinks.length - 1 && (
                                    <span className="mx-2 max-sm:hidden "> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
