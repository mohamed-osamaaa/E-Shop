import { useState } from 'react';

import p1 from '../assets/product/p-1.jpg';
import p2 from '../assets/product/p-2.jpg';
import p3 from '../assets/product/p-3.jpg';
import p4 from '../assets/product/p-4.jpg';
import p5 from '../assets/product/p-5.jpg';
import p7 from '../assets/product/p-7.jpg';
import p9 from '../assets/product/p-9.jpg';

const products = [
    { id: 1, name: 'Boat Headphone', price: 120, image: p1 },
    { id: 2, name: 'Rocky Mountain', price: 140, image: p2 },
    { id: 3, name: 'Goggles', price: 180, image: p3 },
    { id: 4, name: 'Printed', price: 220, image: p4 },
    { id: 5, name: 'Boat Headphone', price: 820, image: p5 },
    { id: 6, name: 'Rocky Mountain', price: 140, image: p2 },
    { id: 7, name: 'Goggles', price: 520, image: p7 },
    { id: 9, name: 'Printed', price: 130, image: p9 },
];

function Products() {
    const [clickedButtons, setClickedButtons] = useState({});

    const handleClick = (id) => {
        setClickedButtons((prev) => ({ ...prev, [id]: true }));
        setTimeout(() => {
            setClickedButtons((prev) => ({ ...prev, [id]: false }));
        }, 150);
    };

    return (
        <div className="mt-7 mb-25 ml-10 mr-10">
            <h1 className="text-4xl font-bold text-center pb-2">Our Products</h1>
            <p className="text-center text-sm text-gray-400 pb-5">Explore Our Products</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-18">
                {products.map((product) => (
                    <div key={product.id} className="pb-5">
                        <div className="relative group w-[300px] h-[200px]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="bg-gray-400 rounded-lg w-full h-full object-cover group-hover:blur-sm"
                            />
                            <button
                                type="submit"
                                onClick={() => handleClick(product.id)}
                                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 flex items-center justify-center bg-red-500 text-white px-4 py-2 opacity-0 rounded-2xl group-hover:opacity-100 transform transition-transform duration-150 ${clickedButtons[product.id] ? "scale-90" : "scale-100"}`}
                            >
                                Add to cart
                            </button>
                        </div>
                        <p className="font-bold text-xl pt-2 pb-1.5 text-start">{product.name}</p>
                        <p className="font-bold text-xl text-start">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
