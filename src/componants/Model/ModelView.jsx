import { Group } from "three";
import { RefObject, Dispatch, SetStateAction, Suspense } from "react";
import {
    Html,
    OrbitControls,
    PerspectiveCamera,
    View,
} from "@react-three/drei";

import * as THREE from "three";

import Lights from "./Lights";
import IPhone from "./Iphone";
import Loader from "../Lodaer/Loader";



const ModelView = ({
    index,
    groupRef,
    gsapType,
    controlRef,
    setRotationState,
    item,
    size,
}) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute cursor-grab ${index === 2 ? "right-[-100%]" : ""} `}
        >
            {/* Ambient Light */}
            {/* ✅ يضيف إضاءة عامة للمشهد، تجعل كل الأجسام مضيئة قليلًا بشكل متساوي.*/}
            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[-1, 0, 4]} />

            <Lights />

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => {
                    if (controlRef.current) {
                        setRotationState(controlRef.current.getAzimuthalAngle());
                    }
                    // setRotationState(controlRef.current.getAzimuthalAngle())
                }}
            />

            <group
                ref={groupRef}
                name={`${index === 1 ? "small" : "large"}`}
                position={[0, 0, 0]}
            >
                <Suspense
                    fallback={<Loader />}
                >
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    );
};

export default ModelView;
