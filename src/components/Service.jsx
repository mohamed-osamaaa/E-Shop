import {
    Car,
    Check,
    Headset,
    WalletCards,
} from 'lucide-react';

function Service() {
    return (
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-10 md:gap-20 pt-16 pb-24 px-5 md:px-10">
            <div className="flex items-center w-full sm:w-auto">
                <Car className="text-red-500 w-16 h-16 md:w-20 md:h-20" />
                <div className="flex flex-col ml-4">
                    <h1 className="font-bold text-xl md:text-2xl">Free Shipping</h1>
                    <p className="text-gray-500 opacity-70 text-sm md:text-base">
                        Free Shipping On All Order
                    </p>
                </div>
            </div>
            <div className="flex items-center w-full sm:w-auto">
                <Check className="text-red-500 w-16 h-16 md:w-20 md:h-20" />
                <div className="flex flex-col ml-4">
                    <h1 className="font-bold text-xl md:text-2xl">Safe Money</h1>
                    <p className="text-gray-500 opacity-70 text-sm md:text-base">
                        30 Days Money Back
                    </p>
                </div>
            </div>
            <div className="flex items-center w-full sm:w-auto md:justify-center">
                <WalletCards className="text-red-500 w-16 h-16 md:w-20 md:h-20" />
                <div className="flex flex-col ml-4">
                    <h1 className="font-bold text-xl md:text-2xl">Secure Payment</h1>
                    <p className="text-gray-500 opacity-70 text-sm md:text-base">
                        All Payment Secure
                    </p>
                </div>
            </div>
            <div className="flex items-center w-full sm:w-auto md:justify-center">
                <Headset className="text-red-500 w-16 h-16 md:w-20 md:h-20" />
                <div className="flex flex-col ml-4">
                    <h1 className="font-bold text-xl md:text-2xl">Online Support 24/7</h1>
                    <p className="text-gray-500 opacity-70 text-sm md:text-base">
                        Technical Support 24/7
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Service;