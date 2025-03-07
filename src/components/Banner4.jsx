import { useState } from 'react';

import smartWatchImage
    from '../assets/category/smartwatch2-removebg-preview.png';

function Banner4() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 150);
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between bg-green-600 rounded-4xl mt-7 mb-20 mx-5 lg:mx-10 p-6 lg:p-10">
            {/* Left Side - Text */}
            <div className="text-center lg:text-left">
                <p className="text-xs sm:text-sm text-white anim">30% OFF</p>
                <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white anim">
                    HAPPY
                </h1>
                <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-white anim">
                    HOURS
                </h1>
                <p className="text-xs sm:text-sm text-white anim">14 Jan to 28 Jan</p>
            </div>

            {/* Middle - Image */}
            <div className="flex justify-center my-6 lg:my-0">
                <img
                    className="anim w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[430px]"
                    src={smartWatchImage}
                    alt="Smartwatch"
                />
            </div>

            {/* Right Side - Sale Info */}
            <div className="text-center lg:text-left">
                <h2 className="font-bold text-xl sm:text-2xl text-white pb-2 anim">
                    Smart Solo
                </h2>
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white pb-4 anim">
                    Winter Sale
                </h1>
                <p className="text-xs sm:text-sm text-white pb-1 anim">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-xs sm:text-sm text-white pb-4 anim">Eaque reiciendis</p>
                <button
                    type="submit"
                    className={`anim bg-white text-green-600 px-4 py-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clicked ? "scale-90" : "scale-100"
                        }`}
                    onClick={handleClick}
                >
                    Shop Now
                </button>
            </div>
        </div>
    );
}

export default Banner4;
