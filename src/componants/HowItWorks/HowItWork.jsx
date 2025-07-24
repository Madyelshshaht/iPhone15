import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../../utils/animations'
import { useTranslation } from 'react-i18next'

const HowItWork = () => {
    const videoRef = useRef()

    const { t } = useTranslation();

    useGSAP(() => {
        gsap.from('#chip',
            {
                scrollTrigger: {
                    trigger: '#chip',
                    toggleActions: 'play reverse play reverse',
                    start: "20% bottom"
                },
                opacity: 0,
                scale: 2,
                duration: 2,
                ease: "power2.inOut",
            },
        );
        animateWithGsap(".g_fadeIn", { y: 0, opacity: 1, ease: "Power2.inOut", duration: 1 });
    })

    return (
        <section className='common-padding overflow-hidden'>
            <div className='screen-max-width '>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>

                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        {t("htw.hrw-t1")}
                        <br />
                        {t("htw.hrw-t2")}
                    </h2>

                    <p className='hiw-subtitle'>
                        {t("htw.hrw-t3")}
                    </p>
                </div>

                <div className="mt-10 md:mt-20 mb-14">
                    <div className="relative h-full flex-center">
                        <div className="overflow-hidden">
                            <img
                                src={frameImg}
                                alt="frame"
                                className="bg-transparent relative z-10"
                            />
                        </div>
                        <div className="hiw-video">
                            <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                    <p className="text-gray font-semibold text-center mt-3">{t("htw.hrw-t4")}</p>
                </div>

                <div className="hiw-text-container">

                    <div className="flex flex-1 justify-center flex-col">
                        <p className="hiw-text g_fadeIn">
                            {t("htw.hrw-t5")} {' '}
                            <span className="text-white">
                                {t("htw.hrw-t6")}
                            </span>.
                        </p>

                        <p className="hiw-text g_fadeIn">
                            {t("htw.hrw-t7")} {' '}
                            <span className="text-white">
                                {t("htw.hrw-t8")}
                            </span>,
                            {t("htw.hrw-t9")}
                        </p>
                    </div>


                    <div className="flex-1 flex justify-center flex-col g_fadeIn">
                        <p className="hiw-text">{t("htw.hrw-t10")}</p>
                        <p className="hiw-bigtext">{t("htw.hrw-t11")}</p>
                        <p className="hiw-text">{t("htw.hrw-t12")}</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HowItWork