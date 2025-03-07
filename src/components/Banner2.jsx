import { useState } from 'react';

import earphoneImage from '../assets/category/earphone.png';
import playStationImage from '../assets/category/gaming.png';
import laptopImage from '../assets/category/macbook.png';
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
            <div className='lg:flex lg:flex-row px-2 py-10 md:py-0 md:pt-10 md:p-10 md:px-0 lg:p-10 lg:px-10'>
                {/* First Row */}
                <div className="flex lg:flex-1 flex-col lg:px-8 md:px-8 md:flex-row lg:flex-row justify-center gap-8">
                    <div className="relative flex flex-row items-center h-[330px] bg-gradient-to-br from-black to-gray-400 rounded-4xl overflow-hidden w-full">
                        <div className='p-5'>
                            <p className="text-gray-400">Enjoy</p>
                            <p className="font-bold text-white text-2xl">With</p>
                            <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-300">
                                Earphone
                            </h1>
                            <button
                                type="button"
                                onClick={() => handleClick("earphone")}
                                className={`mt-3 px-4 py-2 bg-red-500 text-white p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["earphone"] ? "scale-90" : "scale-100"
                                    }`}
                            >
                                Browse
                            </button>
                        </div>
                        <img className="pointer-events-none absolute z-10 h-[350px] w-auto" src={earphoneImage} alt="earphoneImage" />
                    </div>

                    <div className="relative flex flex-row items-center h-[330px] bg-yellow-300 rounded-4xl overflow-hidden w-full">
                        <div className='p-5'>
                            <p className="text-white">Enjoy</p>
                            <p className="font-bold text-white text-2xl">With</p>
                            <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-400">
                                Gadget
                            </h1>
                            <button
                                type="button"
                                onClick={() => handleClick("gadget")}
                                className={`mt-3 px-4 py-2 bg-white text-yellow-300 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["gadget"] ? "scale-90" : "scale-100"
                                    }`}
                            >
                                Browse
                            </button>
                        </div>
                        <img className="pointer-events-none absolute z-10 h-[250px] w-auto -right-10" src={watchImage} alt="watchImage" />
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex lg:flex-1 flex-col justify-center gap-8 px-0.5 py-8 md:py-0 lg:px-8 md:px-8 md:mt-10 lg:mt-0">
                    <div className="relative flex flex-row items-center h-[330px] bg-red-500 rounded-4xl overflow-hidden w-full">
                        <div className='p-5'>
                            <p className="text-white">Enjoy</p>
                            <p className="font-bold text-white text-2xl">With</p>
                            <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-300">
                                Laptop
                            </h1>
                            <button
                                type="button"
                                onClick={() => handleClick("laptop")}
                                className={`mt-3 px-4 py-2 bg-white text-red-500 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["laptop"] ? "scale-90" : "scale-100"
                                    }`}
                            >
                                Browse
                            </button>
                        </div>
                        <img className="pointer-events-none absolute right-0 z-10 h-[250px] md:h-[350px] w-auto" src={laptopImage} alt="laptopImage" />
                    </div>
                </div>
            </div >


            {/* Part-2*/}
            < div className='lg:flex lg:flex-row pt-0 md:pt-10 md:px-0 md:pb-7 lg:px-10' >
                {/* Second Row */}
                <div className="flex lg:flex-1 flex-col justify-center gap-8 px-2 py-2 md:py-0 lg:px-8 md:px-8 md:mb-10" >
                    <div className="relative flex flex-row items-center h-[330px] bg-gradient-to-br from-gray-400 to-gray-100 p-5 rounded-4xl overflow-hidden w-full">
                        <div>
                            <p className="text-white">Enjoy</p>
                            <p className="font-bold text-white text-2xl">With</p>
                            <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-300">
                                PlayStation
                            </h1>
                            <button
                                type="button"
                                onClick={() => handleClick("virtual")}
                                className={`mt-3 px-4 py-2 bg-red-500 text-white p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["laptop"] ? "scale-90" : "scale-100"
                                    }`}
                            >
                                Browse
                            </button>
                        </div>
                        <img className="pointer-events-none absolute right-0 z-10 h-[200px] md:h-[300px] w-auto" src={playStationImage} alt="playStationImage" />
                    </div>
                </div>
                {/* First Row */}
                <div className="flex lg:flex-1 flex-col md:flex-row lg:flex-row justify-center gap-8 px-2 pb-10 pt-5 md:pb-10 md:pt-5 lg:pt-0 md:px-8" >
                    <div className="relative flex flex-row items-center h-[330px] bg-green-400 rounded-4xl overflow-hidden w-full">
                        <div className='p-5'>
                            <p className="text-gray-400">Enjoy</p>
                            <p className="font-bold text-white text-2xl">With</p>
                            <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-300">
                                Virtual
                            </h1>
                            <button
                                type="button"
                                onClick={() => handleClick("virtual")}
                                className={`mt-3 px-4 py-2 bg-white text-green-400 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["earphone"] ? "scale-90" : "scale-100"
                                    }`}
                            >
                                Browse
                            </button>
                        </div>
                        <img className="pointer-events-none absolute z-10 h-[250px] w-[150px] right-1" src={virtualImage} alt="virtualImage" />
                    </div>

                    <div className="relative flex flex-row items-center h-[330px] bg-blue-500 rounded-4xl overflow-hidden w-full">
                        <div className='p-5'>
                            <p className="text-white">Enjoy</p>
                            <p className="font-bold text-white text-2xl">With</p>
                            <h1 className="text-5xl opacity-50 pt-2 font-bold text-gray-400">
                                Speaker
                            </h1>
                            <button
                                type="button"
                                onClick={() => handleClick("speaker")}
                                className={`mt-3 px-4 py-2 bg-white text-blue-500 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clickedButtons["gadget"] ? "scale-90" : "scale-100"
                                    }`}
                            >
                                Browse
                            </button>
                        </div>
                        <img className="pointer-events-none absolute z-10 h-[250px] w-auto -right-10" src={watchImage} alt="watchImage" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner2;

