import { Html } from "@react-three/drei"


const Loader = () => {
    return (
        <Html>
            <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
                <div className="w-[10vw] h-[10-vw] rounded-full">
                    Loading...
                </div>
            </div>
        </Html>
    )
}

export default Loader