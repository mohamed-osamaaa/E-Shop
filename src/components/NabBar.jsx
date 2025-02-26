import { useState } from 'react';

import {
  Search,
  ShoppingCart,
} from 'lucide-react';

import darkModeButton from '../assets/website/dark-mode-button.png';
import lightModeButton from '../assets/website/light-mode-button.png';
import SearchField from './Search';

function NabBar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="bg-white grid justify-center grid-cols-2 gap-14 mt-7 mb-7 ml-10 mr-10">
            <div>
                <ul className="flex items-center space-x-14 ">
                    <li>
                        <a
                            href="#"
                            className="font-bold text-3xl text-red-500 tracking-[0.2em]"
                        >
                            ESHOP
                        </a>
                    </li>
                    <li>
                        <a
                            href="#home"
                            className="text-gray-600 hover:text-black text-lg"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Shop"
                            className="text-gray-600 hover:text-black text-lg"
                        >
                            Shop
                        </a>
                    </li>
                    <li>
                        <a
                            href="#About"
                            className="text-gray-600 hover:text-black text-lg"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Blogs"
                            className="text-gray-600 hover:text-black text-lg"
                        >
                            Blogs
                        </a>
                    </li>

                    <li
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                        className="relative text-gray-600"
                    >
                        <button>
                            <span className="mr-2">Quick Links</span>
                            <span
                                className={`inline-block text-xs transform transition-transform ${open ? "rotate-180" : "rotate-0"
                                    }`}
                            >
                                ▼
                            </span>
                        </button>
                        {open && (
                            <ul className="absolute flex flex-col items-start pt-5 h-40 pl-2.5 w-48 bg-gray-100 space-y-4">
                                <li>
                                    <a
                                        href="#TrendingProducts"
                                        className="text-gray-600 hover:bg-red-400 rounded-sm p-2"
                                    >
                                        Trending Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#BestSelling"
                                        className="text-gray-600 hover:bg-red-400 rounded-sm p-2"
                                    >
                                        Best Selling
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#TopRated"
                                        className="text-gray-600 hover:bg-red-400 rounded-sm p-2"
                                    >
                                        Top Rated
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className="flex justify-end items-center">
                <div
                    onMouseLeave={() => setShowSearch(false)}
                    onMouseEnter={() => setShowSearch(true)}
                >
                    {showSearch ? (
                        <SearchField />
                    ) : (
                        <Search className="pl-1.5 cursor-pointer" />
                    )}
                </div>
                <div>
                    <ShoppingCart className="ml-8" />
                </div>
                <div
                    onClick={() => setDark((prev) => !prev)}
                    className="ml-7 cursor-pointer"
                >
                    <img
                        className="h-6 w-14"
                        src={dark ? darkModeButton : lightModeButton}
                        alt={dark ? "Dark" : "Light"}
                    />
                </div>
            </div>
        </div>
    );
}

export default NabBar;
