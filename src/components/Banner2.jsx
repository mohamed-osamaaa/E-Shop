import { useState } from 'react';

import earphoneImage from '../assets/category/earphone.png';
import playStationImage from '../assets/category/gaming.png';
import laptopImage from '../assets/category/macbook.png';
import speakerImage from '../assets/category/speaker.png';
import virtualImage from '../assets/category/vr.png';
import watchImage from '../assets/category/watch.png';

function Banner2() {
    const [clickedButtons, setClickedButtons] = useState({});

    const handleClick = (id) => {
        setClickedButtons((prev) => ({ ...prev, [id]: true }));
        setTimeout(() => {
            setClickedButtons((prev) => ({ ...prev, [id]: false }));
        }, 150);
    };

    return (
        <>
            <div className="flex justify-center gap-8 mt-7 mb-7 ml-10 mr-10">
                <div className="relative flex-1 flex flex-row items-center h-[330px] bg-gradient-to-br from-black to-gray-400 p-5 rounded-4xl overflow-hidden">
                    <div>
                        <p className="text-gray-400">Enjoy</p>
                        <p className="font-bold text-white text-2xl">With</p>
                        <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-300">
                            Earphone
                        </h1>
                        <button
                            type="button"
                            onClick={() => handleClick("earphone")}
                            className={`mt-3 px-4 py-2 bg-red-500 text-white p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["earphone"]
                                ? "scale-90"
                                : "scale-100"
                                }`}
                        >
                            Browse
                        </button>
                    </div>
                    <img
                        className="pointer-events-none absolute z-10 h-[350px] w-auto"
                        src={earphoneImage}
                        alt="earphoneImage"
                    />
                </div>

                <div className="relative flex-1 flex flex-row items-center h-[330px] bg-yellow-300 p-5 rounded-4xl overflow-hidden">
                    <div>
                        <p className="text-white">Enjoy</p>
                        <p className="font-bold text-white text-2xl">With</p>
                        <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-400">
                            Gadget
                        </h1>
                        <button
                            type="button"
                            onClick={() => handleClick("gadget")}
                            className={`mt-3 px-4 py-2 bg-white text-yellow-300 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["gadget"]
                                ? "scale-90"
                                : "scale-100"
                                }`}
                        >
                            Browse
                        </button>
                    </div>
                    <img
                        className="pointer-events-none absolute z-10 h-[250px] w-auto"
                        src={watchImage}
                        alt="watchImage"
                    />
                </div>

                <div className="relative flex-2 flex flex-row items-center h-[330px] bg-red-500 p-5 rounded-4xl overflow-hidden">
                    <div>
                        <p className="text-white">Enjoy</p>
                        <p className="font-bold text-white text-2xl">With</p>
                        <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-300">
                            Laptop
                        </h1>
                        <button
                            type="button"
                            onClick={() => handleClick("laptop")}
                            className={`mt-3 px-4 py-2 bg-white text-red-500 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["laptop"]
                                ? "scale-90"
                                : "scale-100"
                                }`}
                        >
                            Browse
                        </button>
                    </div>
                    <img
                        className="pointer-events-none absolute right-0 z-10 h-[350px] w-auto"
                        src={laptopImage}
                        alt="laptopImage"
                    />
                </div>
            </div>



            <div className="flex justify-center gap-8 mt-14 mb-14 ml-10 mr-10">
                <div className="relative flex-2 flex flex-row items-center h-[330px] bg-gradient-to-br from-gray-400 to-gray-100 p-5 rounded-4xl overflow-hidden">
                    <div>
                        <p className="text-white">Enjoy</p>
                        <p className="font-bold text-white text-2xl">With</p>
                        <h1 className="text-5xl opacity-60 pt-2 font-bold text-gray-100">
                            PlayStation
                        </h1>
                        <button
                            type="button"
                            onClick={() => handleClick("playstation")}
                            className={`mt-3 px-4 py-2 bg-red-500 text-white p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["playstation"]
                                ? "scale-90"
                                : "scale-100"
                                }`}
                        >
                            Browse
                        </button>
                    </div>
                    <img
                        className="pointer-events-none absolute right-0 z-10 h-[250px] w-auto"
                        src={playStationImage}
                        alt="playstationImage"
                    />
                </div>

                <div className="relative flex-1 flex flex-row items-center h-[330px] bg-green-400 p-5 rounded-4xl overflow-hidden">
                    <div>
                        <p className="text-white">Enjoy</p>
                        <p className="font-bold text-white text-2xl">With</p>
                        <h1 className="text-5xl opacity-60 pt-2 font-bold text-gray-100">
                            Virtual
                        </h1>
                    </div>
                    <button
                        type="button"
                        onClick={() => handleClick("virtual")}
                        className={`absolute left-[19px] top-[215px] z-20 mt-3 px-4 py-2 bg-white text-green-400 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["virtual"] ? "scale-90" : "scale-100"
                            }`}
                    >
                        Browse
                    </button>
                    <img
                        className="pointer-events-none absolute right-0 z-10 h-[250px] w-auto"
                        src={virtualImage}
                        alt="virtualImage"
                    />
                </div>

                <div className="relative flex-1 flex flex-row items-center h-[330px] bg-blue-500 p-5 rounded-4xl overflow-hidden">
                    <div>
                        <p className="text-white">Enjoy</p>
                        <p className="font-bold text-white text-2xl">With</p>
                        <h1 className="text-5xl opacity-60 pt-2 font-bold text-gray-100">
                            Speaker
                        </h1>
                        <button
                            type="button"
                            onClick={() => handleClick("speaker")}
                            className={`mt-3 px-4 py-2 bg-white text-blue-500 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["speaker"]
                                ? "scale-90"
                                : "scale-100"
                                }`}
                        >
                            Browse
                        </button>
                    </div>
                    <img
                        className="pointer-events-none absolute right-0 z-10 h-[250px] w-auto"
                        src={speakerImage}
                        alt="speakerImage"
                    />
                </div>
            </div>
        </>
    );
}

export default Banner2;
