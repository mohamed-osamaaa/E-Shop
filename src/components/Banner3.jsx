import { useState } from 'react';

import headPhoneImage from '../assets/hero/headphone.png';

function Banner3() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 150);
    };
    return (
        <div className="flex justify-center items-center bg-red-500 h-[340px] rounded-4xl mt-7 mb-20 ml-10 mr-10">
            <div className="flex flex-col items-start">
                <p className="text-sm text-white">30% OFF</p>
                <h1 className="font-bold text-7xl text-white">FINE SMILE</h1>
                <p className="text-sm text-white">10 Jan to 28 Jan</p>
            </div>
            <div>
                <img className='ml-20 pr-10 h-[420px] w-[430px]' src={headPhoneImage} alt="headPhoneImage" />
            </div>
            <div className="flex flex-col items-start">
                <h2 className='font-bold text-2xl text-white pb-5'>Air Solo Bass</h2>
                <h1 className='font-bold text-6xl text-white pb-4'>Winter Sale</h1>
                <p className='text-sm text-white pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className='text-sm text-white pb-4'>Eaque reiciendis</p>
                <button type="submit"
                    className={`bg-white text-red-500 p-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clicked ? 'scale-90' : 'scale-100'
                        }`}
                    onClick={handleClick}>Shop Now</button>
            </div>
        </div>
    )
}

export default Banner3;