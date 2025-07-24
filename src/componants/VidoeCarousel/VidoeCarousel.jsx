import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../../constants";
import { pauseImg, playImg, replayImg } from "../../utils";



const VidoeCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);



    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isplaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);

    const { isEnd, startPlay, videoId, isLastVideo, isplaying } = video; // Destrucure to dont use video.{isEnd ,startPlay } in the code like this

    const lang = localStorage.getItem('i18nextLng')

    useGSAP(() => {

        gsap.to('#slider', {
            transform: `translateX(${lang === "en" ? -100 * videoId : 100 * videoId}%)`,
            duration: 2,
            ease: "power2.inOut",
        })

        gsap.to('#video', {
            scrollTrigger: {
                trigger: '#video',
                toggleActions: "restart none none none",
            },
            onComplete: () => {
                setVideo((prev) => ({
                    ...prev,
                    startPlay: true,
                    isplaying: true,
                }));
            }
        })
    }, [isEnd, videoId]);

    useEffect(() => {
        if (loadedData.length > 3) {
            const videoEl = videoRef.current[videoId];
            if (videoEl instanceof HTMLVideoElement) {
                if (!isplaying) {
                    videoEl.pause();
                } else {
                    startPlay && videoEl.play();
                }
            }
        }

    }, [startPlay, videoId, isplaying, loadedData]);



    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]) {
            // animation to move the indicator
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    // get the progress of the video
                    const progress = Math.ceil(anim.progress() * 100);
                    if (progress != currentProgress) {
                        currentProgress = progress;

                        // set the width of the progress bar
                        gsap.to(videoDivRef.current[videoId], {
                            width: window.innerWidth < 760 ? '10vw' : window.innerWidth < 1200 ? '10vw' : '4vw',
                        })
                        // set the background color of the progress bar
                        gsap.to(span[videoId], {
                            width: `${currentProgress}%`,
                            backgroundColor: 'white',
                        });
                    }
                },
                // when the video is ended, replace the progress bar with the indicator and change the background color
                onComplete: () => {
                    if (isplaying) {
                        gsap.to(videoDivRef.current[videoId], {
                            width: '12px',
                        })
                        gsap.to(span[videoId], {
                            backgroundColor: '#afafaf',
                        })
                    }
                },
            });
            if (videoId === 0) {
                anim.restart();
            }

            const animUpdate = () => {
                anim.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration);
            }

            if (isplaying) {
                // ticker to update the progress bar
                gsap.ticker.add(animUpdate);
            } else {
                // remove the ticker when the video is paused (progress bar is stopped)
                gsap.ticker.remove(animUpdate);
            }
        }

    }, [videoId, startPlay]);

    const handleProcess = (type, i) => {
        switch (type) {
            case 'video-end':
                setVideo((prev) => ({
                    ...prev,
                    isEnd: true,
                    videoId: i + 1,
                }));
                break;

            case 'video-last':
                setVideo((prev) => ({
                    ...prev,
                    isLastVideo: true,
                }));
                break;

            case 'video-reset':
                setVideo((prev) => ({
                    ...prev,
                    isLastVideo: false,
                    videoId: 0,
                }));
                break;

            case "pause":
                setVideo((prev) => ({ ...prev, isplaying: !prev.isplaying }));
                break;

            case 'play':
                setVideo((prev) => ({
                    ...prev,
                    isplaying: !prev.isplaying,
                }));
                break;

            default:
                return video;
        }

    }

    const handleLoadedData = (e, i) => {
        setLoadedData((prev) => [...prev, e.currentTarget]);
    }

    return (
        <>
            <div className="flex items-center ">
                {hightlightsSlides.map((slide, i) => (
                    <div key={i} id="slider" className="sm:pr-20 pr-10 ">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline={true}
                                    className={`pointer-events-none ${slide.id === 2 && 'translate-x-44'} `}
                                    // autoPlay
                                    preload="auto"
                                    muted
                                    ref={(el) => {
                                        videoRef.current[i] = el;
                                    }}
                                    onEnded={() => {
                                        i !== 3
                                            ? handleProcess('video-end', i)
                                            : handleProcess('video-last', i);
                                    }}
                                    onPlay={() =>
                                        setVideo((prev) => ({ ...prev, isplaying: true }))
                                    }
                                    onLoadedMetadata={(e) => handleLoadedData(e, i)}
                                >
                                    <source src={slide.video} type="video/mp4" />
                                </video>
                            </div>

                            <div className="absolute top-12 left-[5%] z-10">
                                {slide.textLists.map((text, i) => (
                                    <p key={i} className="md:text-2xl text-xl font-medium">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative flex-center mt-10 gap-5">
                <div className="flex-center py-5 px-7 bg-zinc-800 backdrop-blur rounded-full">
                    {videoRef.current.map((_, i) => (
                        <span
                            key={i}
                            className="mx-2 w-3 h-3 rounded-full bg-gray-300 relative cursor-pointer "
                            ref={(el) => { videoDivRef.current[i] = el }}
                        >
                            <span
                                className="absolute h-full w-full rounded-full "
                                ref={(el) => { videoSpanRef.current[i] = el }}
                            ></span>
                        </span>
                    ))}
                </div>
                <button className="control-btn">
                    <img
                        src={isLastVideo ? replayImg : !isplaying ? playImg : pauseImg}
                        alt={isLastVideo ? "Replay" : !isplaying ? "Play" : "Pause"}
                        onClick={
                            isLastVideo
                                ? () => handleProcess('video-reset', 0)
                                : !isplaying
                                    ? () => handleProcess('play', videoId)
                                    : () => handleProcess('pause', videoId)
                        }
                    />
                </button>
            </div>
        </>
    );
};

export default VidoeCarousel;
