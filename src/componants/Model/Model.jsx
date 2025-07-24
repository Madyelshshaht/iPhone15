import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../../utils";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../../constants";
import { animateWithGsap, animateWithGsaptimeline } from "../../utils/animations";
import { useTranslation } from "react-i18next";



const Model = () => {

    const { t } = useTranslation();


    const [size, setSize] = useState("small");
    const [model, setModel] = useState({
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        img: yellowImg,
    });

    // Camera Control For Model View
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);


    const tl = gsap.timeline();

    useEffect(() => {
        if (size === 'large') {
            animateWithGsaptimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            })
        }

        if (size === 'small') {
            animateWithGsaptimeline(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2
            })
        }
    }, [size])


    useGSAP(() => {
        // gsap.to("#heading", {
        //     opacity: 1,
        //     y: 0,
        //     // duration: 2,
        // });
        animateWithGsap("#heading", { y: 0, opacity: 1, ease: "Power2.inOut", duration: 1 });
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">
                    {t("ms-title")}
                </h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative ">

                        {/* Small */}
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />

                        {/* Large */}
                        <ModelView
                            index={2}
                            groupRef={large}
                            gsapType="view2"
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                        />

                        <Canvas
                            className="w-full h-full "
                            style={{
                                position: "fixed",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: "hidden",
                            }}
                            eventSource={document.getElementById("root")}
                        >
                            <View.Port />
                        </Canvas>
                    </div>

                    <div className="mx-auto w-full">
                        <p className="text-sm font-light text-center mb-5">
                            {/* {t(`models.${model.id}`)} */}
                            {t(`models.${model?.id || 1}`)}
                        </p>
                        <div className="flex-center gap-5">

                            {/* Colors */}
                            <ul className="color-container">
                                {models.map((item, i) => (
                                    <li
                                        key={i}
                                        className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                                        style={{ backgroundColor: item.color[0] }}
                                        onClick={() => setModel(item)}
                                    ></li>
                                ))}
                            </ul>

                            {/* Button Size */}
                            <button className="size-btn-container">
                                {sizes.map(({ label, value }) => (
                                    <span
                                        key={label}
                                        className="size-btn"
                                        style={{
                                            backgroundColor: size === value ? "white" : "transparent",
                                            color: size === value ? 'black' : 'white',
                                        }}
                                        onClick={() => { setSize(value) }}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </button>

                            {/* <p>زاوية الدوران: {(smallRotation * 180 / Math.PI).toFixed(0)} درجة</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Model;
