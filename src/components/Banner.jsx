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

function Banner() {
    const [clicked, setClicked] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const swiperRef = useRef(null);

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
        <div className="z-20">
            <Swiper
                ref={swiperRef}
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                autoplay={{ delay: 3000 }}
                loop
                className="rounded-lg"
            >
                <SwiperSlide>
                    <div className="bg-gray-300 h-[615px] rounded-4xl pl-15 mt-7 mb-7 ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="row-span-2">
                            <p className="mb-4 text-2xl font-bold">
                                Beats Solo
                            </p>
                            <h3 className="text-6xl font-bold">Wireless</h3>
                            <h1 className="text-[150px] font-bold text-white">
                                HEADPHONE
                            </h1>
                            <button
                                type="submit"
                                className={`bg-red-500 text-white p-2 rounded-3xl w-48 h-10 cursor-pointer transform transition-transform duration-150 ${clicked ? "scale-90" : "scale-100"
                                    }`}
                                onClick={handleClick}
                            >
                                Shop By Category
                            </button>
                            {showOrder && (
                                <OrderNow onClose={handleCloseOrder} />
                            )}
                        </div>
                        <div>
                            <img
                                className="z-20 h-[520px]"
                                src={headPhoneImage}
                                alt="headPhoneImage"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-300 h-[615px] rounded-4xl pl-15 mt-7 mb-7 ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="row-span-2">
                            <p className="mb-4 text-2xl font-bold">
                                Beats Solo
                            </p>
                            <h3 className="text-6xl font-bold">Wireless</h3>
                            <h1 className="text-[150px] font-bold text-white">
                                VIRTUAL
                            </h1>
                            <button
                                type="submit"
                                className={`bg-red-500 text-white p-2 rounded-3xl w-48 h-10 cursor-pointer transform transition-transform duration-150 ${clicked ? "scale-90" : "scale-100"
                                    }`}
                                onClick={handleClick}
                            >
                                Shop By Category
                            </button>
                            {showOrder && (
                                <OrderNow onClose={handleCloseOrder} />
                            )}
                        </div>
                        <div>
                            <img
                                className="z-20 h-[420px]"
                                src={virtualImage}
                                alt="virtualImage"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-gray-300 h-[615px] rounded-4xl pl-15 mt-7 mb-7 ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className="row-span-2">
                            <p className="mb-4 text-2xl font-bold">
                                Beats Solo
                            </p>
                            <h3 className="text-6xl font-bold">Branded</h3>
                            <h1 className="text-[150px] font-bold text-white">
                                LAPTOPS
                            </h1>
                            <button
                                type="submit"
                                className={`bg-red-500 text-white p-2 rounded-3xl w-48 h-10 cursor-pointer transform transition-transform duration-150 ${clicked ? "scale-90" : "scale-100"
                                    }`}
                                onClick={handleClick}
                            >
                                Shop By Category
                            </button>
                            {showOrder && (
                                <OrderNow onClose={handleCloseOrder} />
                            )}
                        </div>
                        <div>
                            <img
                                className="z-20 w-[520px]"
                                src={laptopImage}
                                alt="laptopImage"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Banner;
