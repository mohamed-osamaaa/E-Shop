import { useState } from 'react';

import headPhoneImage from '../assets/hero/headphone.png';
import useScrollReveal from './useScrollReveal';

function Banner3() {
    useScrollReveal('.anim');
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 150);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center bg-red-500 h-auto lg:h-[340px] rounded-4xl mt-7 mb-20 mx-5 lg:mx-10 p-5 lg:p-10 space-y-5 lg:space-y-0">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <p className="text-sm text-white anim">30% OFF</p>
                <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-white anim">FINE SMILE</h1>
                <p className="text-sm text-white anim">10 Jan to 28 Jan</p>
            </div>
            <div className="flex justify-center">
                <img className='h-[250px] md:h-[350px] lg:h-[420px] w-auto anim' src={headPhoneImage} alt="headPhoneImage" />
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className='font-bold text-xl md:text-2xl text-white pb-2 md:pb-5 anim'>Air Solo Bass</h2>
                <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl text-white pb-2 md:pb-4 anim'>Winter Sale</h1>
                <p className='text-sm text-white pb-1 anim'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className='text-sm text-white pb-4 anim'>Eaque reiciendis</p>
                <button type="submit"
                    className={`anim bg-white text-red-500 px-4 py-2 rounded-3xl cursor-pointer transform transition-transform duration-150 ${clicked ? 'scale-90' : 'scale-100'
                        }`}
                    onClick={handleClick}>Shop Now</button>
            </div>
        </div>
    );
}

export default Banner3;