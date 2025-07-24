import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../../utils";
import VidoeCarousel from "../VidoeCarousel/VidoeCarousel";
import { useTranslation } from "react-i18next";


const Highlights = () => {

    const { t } = useTranslation();


    useGSAP(() => {
        gsap.to("#title", { opacity: 1, y: 0 });
        gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    }
        , [])

    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc-900 ">
            <div className="screen-max-width ">

                <div className="mb-12 w-full md:flex items-end justify-between ">
                    <h1 id="title" className="section-heading">{t("highlights.hi-title")}</h1>

                    <div className="flex flex-wrap items-center gap-5">
                        <p className="link gap-1">
                            {t("highlights.hi-link1")}
                            <img src={watchImg} alt="watch" className="ml-2  max-sm:w-[15px]" />
                        </p>
                        <p className="link gap-1">
                            {t("highlights.hi-link2")}
                            <img src={rightImg} alt="right" className="ml-2 max-sm:w-[6px]" />
                        </p>
                    </div>
                </div>

                <div>
                    <VidoeCarousel />
                </div>




            </div>

        </section>
    )
}

export default Highlights