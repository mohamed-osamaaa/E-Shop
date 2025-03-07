import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css';

import {
    useRef,
    useState,
} from 'react';

import {
    Autoplay,
    Pagination,
} from 'swiper/modules';
import {
    Swiper,
    SwiperSlide,
} from 'swiper/react';

import laptopImage from '../assets/category/macbook.png';
import virtualImage from '../assets/category/vr.png';
import headPhoneImage from '../assets/hero/headphone.png';
import OrderNow from './OrderNow';
import useScrollReveal from './useScrollReveal';

function Banner() {
    const [clicked, setClicked] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const swiperRef = useRef(null);

    useScrollReveal('.anim');

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 150);

        // Pause autoplay when modal opens
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.stop();
        }

        setShowOrder(true);
    };
    const handleCloseOrder = () => {
        setShowOrder(false);

        // Resume autoplay when modal closes
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    return (
        <div className="relative w-full px-4 sm:px-6 lg:px-20">
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) =>
                        `<span class="${className} custom-bullet"></span>`,
                }}
                autoplay={{ delay: 3000 }}
                loop
                className="w-full rounded-4xl"
            >
                {[
                    { title: "HEADPHONE", image: headPhoneImage },
                    { title: "VIRTUAL", image: virtualImage },
                    { title: "LAPTOPS", image: laptopImage }
                ].map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className={`bg-gray-300 dark:bg-gray-800 min-h-[750px] sm:min-h-[750px] md:min-h-[650px] lg:min-h-[620px] rounded-4xl px-6 sm:px-10 md:px-14 flex flex-col 
                            sm:flex-col-reverse md:flex-row lg:flex-row  
                            items-center justify-center text-center md:text-left`}
                        >
                            <div className="space-y-6 md:w-1/2 flex-1">
                                <p className="text-lg sm:text-xl font-bold mt-10">Beats Solo</p>
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">Wireless</h3>
                                <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white">
                                    {item.title}
                                </h1>
                                <button
                                    type="button"
                                    className={`bg-red-500 text-white px-6 md:px-4 sm:px-2 py-3 rounded-3xl cursor-pointer text-lg transition-transform duration-150 ${clicked ? "scale-90" : "scale-100"}`}
                                    onClick={handleClick}
                                >
                                    Shop By Category
                                </button>
                                {showOrder && (
                                    <OrderNow onClose={handleCloseOrder} />
                                )}
                            </div>
                            <div className="flex justify-center md:w-1/2 flex-1">
                                <img
                                    className="w-full h-auto max-h-[500px] object-contain"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Banner;
