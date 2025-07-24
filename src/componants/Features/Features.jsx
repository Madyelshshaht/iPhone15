import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { animateWithGsap } from "../../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../../utils";
import { useTranslation } from "react-i18next";

const Features = () => {
    const videoRef = useRef();

    const { t } = useTranslation();

    useGSAP(() => {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: "-10% bottom"
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })
        animateWithGsap("#features_title", { y: 0, opacity: 1 });
        animateWithGsap(".g_grow",
            { opacity: 1, scale: 1, ease: "power1" },
            // Make animation scroll Async متزامن with scroll taker { True or False or Seconds to Async }
            { scrub: 5.5 }
        );
        animateWithGsap(".g_text", { y: 0, opacity: 1, ease: "Power2.inOut", duration: 1 });
    }, []);

    //  pause 2s then restart play video
    // useEffect(() => {
    //     const video = videoRef.current;

    //     const handleEnded = () => {
    //         setTimeout(() => {
    //             // tom make video start from beginning
    //             video.currentTime = 0;
    //             // then play again
    //             video.play();
    //         }, 2000);
    //     }

    //     // link with Event Ended
    //     video.addEventListener("ended", handleEnded)

    //     // Clear Func
    //     return () => {
    //         video.removeEventListener("ended", handleEnded)
    //     }
    // }, [])

    return (
        <section className="h-full common-padding bg-zinc-950 overflow-hidden relative">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h1 id="features_title" className="section-heading">
                        {t("Features.f-title")}
                    </h1>
                </div>

                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 sm:text-start text-center">
                        <h2 className="text-5xl lg:text-7xl font-semibold">{t("Features.f-text1")}</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">
                            {t("Features.f-text2")}
                        </h2>
                    </div>
                </div>

                <div className="felx-center flex-col sm:px-10">
                    <div className="relative h-[50vh] w-full flex items-center">
                        <video
                            playsInline
                            id="exploreVideo"
                            className="w-full h-full object-cover object-center"
                            preload="none"
                            muted
                            autoPlay
                            // loop
                            ref={videoRef}
                        >
                            <source src={exploreVideo} type="video/mp4" />
                        </video>
                    </div>

                    <div className="flex flex-col w-full relative py-5">
                        <div className="feature-video-container">
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img
                                    src={explore1Img}
                                    alt="titanuim"
                                    className="feature-video g_grow"
                                />
                            </div>
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img
                                    src={explore2Img}
                                    alt="titanuim"
                                    className="feature-video g_grow"
                                />
                            </div>
                        </div>

                        <div className="feature-text-container">
                            <div className="flex-center  flex-1">
                                <p className="feature-text g_text">
                                    {t("Features.f-p1_t1")} {" "}
                                    <span className="text-white">
                                        {t("Features.f-p1_t2")}
                                    </span>,
                                    {t("Features.f-p1_t3")}
                                </p>
                            </div>

                            <div className="flex-center flex-1">
                                <p className="feature-text g_text">
                                    {t("Features.f-p2_t1")} {" "}
                                    <span className="text-white">
                                        {t("Features.f-p2_t2")}
                                    </span>,
                                    {t("Features.f-p2_t3")}
                                </p>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
