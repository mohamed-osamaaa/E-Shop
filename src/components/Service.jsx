import {
    Car,
    Check,
    Headset,
    WalletCards,
} from 'lucide-react';

function Service() {
    return (
        <div className="flex justify-center items-center gap-20 mt-32 mb-48 ml-10 mr-10">
            <div className="flex items-center">
                <Car className="text-red-500 w-20 h-20" />
                <div className="flex flex-col ml-5">
                    <h1 className="inline-block font-bold text-2xl">
                        Free Shipping
                    </h1>
                    <p className="inline-block text-gray-500 opacity-50 text-sm">
                        Free Shipping On All Order
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <Check className="text-red-500 w-20 h-20" />
                <div className="flex flex-col ml-5">
                    <h1 className="inline-block font-bold text-2xl">
                        Safe Money
                    </h1>
                    <p className="inline-block text-gray-500 opacity-50 text-sm">
                        30 Days Money Back
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <WalletCards className="text-red-500 w-20 h-20" />
                <div className="flex flex-col ml-5">
                    <h1 className="inline-block font-bold text-2xl">
                        Secure Payment
                    </h1>
                    <p className="inline-block text-gray-500 opacity-50 text-sm">
                        All Payment Secure
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <Headset className="text-red-500 w-20 h-20" />
                <div className="flex flex-col ml-5">
                    <h1 className="inline-block font-bold text-2xl">
                        Online Support 24/7
                    </h1>
                    <p className="inline-block text-gray-500 opacity-50 text-sm">
                        Technical Support 24/7
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Service;
