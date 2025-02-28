import { useState } from 'react';

import { X } from 'lucide-react';

function OrderNow({ onClose }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 150); // Reset after 150ms
    };

    return (
        <div className="z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold">Order Now</h1>
                    <X className="cursor-pointer" onClick={onClose} />
                </div>
                <form className="flex flex-col space-y-4 mt-4">
                    <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
                    <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
                    <input type="text" placeholder="Address" className="w-full border p-2 rounded" />
                    <button
                        type="submit"
                        className={`bg-red-500 text-white p-2 rounded cursor-pointer transform transition-transform duration-150 ${clicked ? 'scale-90' : 'scale-100'
                            }`}
                        onClick={handleClick}
                    >
                        Order Now
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OrderNow;
