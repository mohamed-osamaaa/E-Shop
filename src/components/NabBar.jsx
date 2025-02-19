import { useState } from 'react';

import {
    Search,
    ShoppingCart,
} from 'lucide-react';

function NabBar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);

    return (
        <div className="grid grid-cols-2 gap-14">
            <div>
                <ul className='flex justify-center items-center space-x-4'>
                    <li>
                        ESHOP
                    </li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#Shop">Shop</a>
                    </li>
                    <li>
                        <a href="#About">About</a>
                    </li>
                    <li>
                        <a href="#Blogs">Blogs</a>
                    </li>

                    <li
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <button>
                            Quick Links
                            <span
                                className={`transform transition-transform ${open ? "rotate-180" : "rotate-0"
                                    }`}
                            >
                                ▼
                            </span>
                        </button>
                        {open && (
                            <ul>
                                <li>
                                    <a href="#TrendingProducts">
                                        Trending Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#BestSelling">Best Selling</a>
                                </li>
                                <li>
                                    <a href="#TopRated">Top Rated</a>
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
                        src={
                            dark
                                ? "../assets/website/dark-mode-button.png"
                                : "../assets/website/light-mode-button.png"
                        }
                        alt={dark ? "Dark" : "Light"}
                    />
                </div>
            </div>
        </div>
    );
}

export default NabBar;