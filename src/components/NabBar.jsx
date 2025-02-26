import { useState } from 'react';

import {
  Search,
  ShoppingCart,
} from 'lucide-react';

import darkModeButton from '../assets/website/dark-mode-button.png';
import lightModeButton from '../assets/website/light-mode-button.png';

function NabBar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);

    return (
        <div className="bg-white grid justify-center grid-cols-2 gap-14 mt-7 mb-7 ml-10 mr-10">
            <div>
                <ul className='flex items-center space-x-14 '>
                    <li>
                        <a href='#' className='font-bold text-3xl text-red-500 tracking-[0.2em]'>ESHOP</a>
                    </li>
                    <li>
                        <a href="#home" className='text-gray-600 hover:text-black text-lg'>Home</a>
                    </li>
                    <li>
                        <a href="#Shop" className='text-gray-600 hover:text-black text-lg'>Shop</a>
                    </li>
                    <li>
                        <a href="#About" className='text-gray-600 hover:text-black text-lg'>About</a>
                    </li>
                    <li>
                        <a href="#Blogs" className='text-gray-600 hover:text-black text-lg'>Blogs</a>
                    </li>

                    <li
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                        className='relative text-gray-600'
                    >
                        <button>
                            <span className='mr-2'>Quick Links</span>
                            <span
                                className={`inline-block text-xs transform transition-transform ${open ? "rotate-180" : "rotate-0"
                                    }`}
                            >
                                ▼
                            </span>
                        </button>
                        {open && (
                            <ul className='absolute flex flex-col items-start pt-5 h-40 pl-2.5 w-48 bg-gray-100 space-y-4'>
                                <li>
                                    <a href="#TrendingProducts" className='text-gray-600 hover:bg-red-400 rounded-sm p-2'>
                                        Trending Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#BestSelling" className='text-gray-600 hover:bg-red-400 rounded-sm p-2'>Best Selling</a>
                                </li>
                                <li>
                                    <a href="#TopRated" className='text-gray-600 hover:bg-red-400 rounded-sm p-2'>Top Rated</a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className='flex justify-end items-center space-x-4'>
                <Search />
                <div>
                    <ShoppingCart />
                </div>
                <div onClick={() => setDark((prev) => !prev)}>
                    <img
                        className='h-6 w-14'
                        src={
                            dark
                                ? darkModeButton
                                : lightModeButton
                        }
                        alt={dark ? "Dark" : "Light"}
                    />
                </div>
            </div>
        </div>
    );
}

export default NabBar;