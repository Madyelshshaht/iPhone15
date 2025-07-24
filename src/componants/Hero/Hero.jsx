import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo, smallHeroVideo } from "../../utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";



const Hero = () => {

    const { t } = useTranslation();


    const [srcVideo, setSrcVideo] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleResize = () => {
        if (window.innerWidth < 760) {
            setSrcVideo(smallHeroVideo);
        } else {
            setSrcVideo(heroVideo);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])


    useGSAP(() => {
        gsap.to("#hero", { opacity: 1, delay: 2 });
        gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
    }, [])

    return (
        <section className="w-full nav-height bg-black relative text-white">
            <div className="h-5/6 w-full flex-center flex-col ">
                <p id="hero" className="hero-title py-4"> {t("h-title")} </p>
                <div className="md:w-10/12 w-9/12 flex-center">
                    <video autoPlay muted  playsInline={true} key={srcVideo} className="pointer-events-none">
                        <source src={srcVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div
                id="cta"
                className="flex flex-col items-center opacity-0 translate-y-20"
            >
                <a href="#highlights" className="btn">{t("h-btn")}</a>
                <p className="font-normal text-xl">{t("h-price")}</p>
            </div>

        </section>
    )
}

export default Hero