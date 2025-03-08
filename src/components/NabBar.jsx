import {
    useEffect,
    useState,
} from 'react';

import {
    Menu,
    Search,
    ShoppingCart,
    X,
} from 'lucide-react';

import darkModeButton from '../assets/website/dark-mode-button.png';
import lightModeButton from '../assets/website/light-mode-button.png';
import OrderNow from './OrderNow';
import SearchField from './Search';

function NabBar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") === "dark";
        setDark(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme ? "dark" : "light");
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", dark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white grid justify-center grid-cols-2 sm:gap-3 md:gap-14 pt-7 mb-7 pl-10 pr-10">
            <div className='relative flex lg:justify-center lg:items-center space-x-14'>
                <a href="#" className="font-bold lg:text-3xl md:text-3xl text-3xl text-red-500 tracking-[0.2em] sm:text-xl">ESHOP</a>
                <ul className="hidden lg:flex sm:items-center sm:space-x-10 md:items-center md:space-x-10">
                    <li><a href="#home" className="text-gray-600 hover:text-black dark:hover:text-white text-lg">Home</a></li>
                    <li><a href="#Shop" className="text-gray-600 hover:text-black dark:hover:text-white text-lg">Shop</a></li>
                    <li><a href="#About" className="text-gray-600 hover:text-black dark:hover:text-white text-lg">About</a></li>
                    <li><a href="#Blogs" className="text-gray-600 hover:text-black dark:hover:text-white text-lg">Blogs</a></li>
                    <li
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                        className="relative text-gray-600"
                    >
                        <button className='flex justify-center items-center w-28'>
                            <span className="pr-2 dark:hover:text-white">Quick Links</span>
                            <span className={`inline-block text-xs transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}>▼</span>
                        </button>
                        {open && (
                            <ul className="absolute flex flex-col items-start pt-5 h-36 rounded-xl pl-2.5 w-48 bg-gray-100 dark:bg-gray-900 space-y-4 z-10">
                                <li><a href="#TrendingProducts" className="text-gray-600 dark:hover:text-white hover:bg-red-400 rounded-sm p-2">Trending Products</a></li>
                                <li><a href="#BestSelling" className="text-gray-600 dark:hover:text-white hover:bg-red-400 rounded-sm p-2">Best Selling</a></li>
                                <li><a href="#TopRated" className="text-gray-600 dark:hover:text-white hover:bg-red-400 rounded-sm p-2">Top Rated</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className="flex justify-end items-center">
                {showSearch && (
                    <div className="hidden sm:block" onMouseLeave={() => setShowSearch(false)} onMouseEnter={() => setShowSearch(true)}>
                        <SearchField />
                    </div>
                )}
                {!showSearch && (
                    <div className="hidden sm:block" onMouseEnter={() => setShowSearch(true)}>
                        <Search className="pl-1.5 dark:text-gray-600" />
                    </div>
                )}
                <div onClick={() => setShowOrder(true)} className="relative cursor-pointer">
                    <div className="absolute -right-2 top-2 transform -translate-y-5 h-4 w-4 text-sm text-white rounded-lg flex items-center justify-center pb-1.5 pt-1 bg-red-400">
                        4
                    </div>
                    <ShoppingCart className="sm:ml-4 md:ml-8 dark:text-gray-600" />
                </div>
                {showOrder && <OrderNow className="sm:w-3/4" onClose={() => setShowOrder(false)} />}
                <div onClick={() => setDark(prev => !prev)} className="ml-7 cursor-pointer">
                    <img className="h-6 w-14" src={dark ? darkModeButton : lightModeButton} alt={dark ? "Dark" : "Light"} />
                </div>
                <button onClick={() => setMenuOpen(true)} className="inline-block ml-5 lg:hidden text-gray-600 dark:text-white">
                    <Menu size={30} />
                </button>
            </div>
            {menuOpen && (
                <div className="fixed z-50 top-5 right-5">
                    <div className="relative flex justify-start items-center bg-gray-200 dark:bg-gray-900 h-full shadow-lg w-80 rounded-2xl">
                        {/* Close Button */}
                        <button onClick={() => setMenuOpen(false)} className="p-3">
                            <X size={28} className="text-gray-600 dark:text-white absolute top-5 right-5" />
                        </button>

                        {/* Mobile Menu Links */}
                        <ul className="flex flex-col space-y-6 pt-7 pb-5">
                            <li><a href="#home" className="text-gray-600 hover:text-black dark:hover:text-white text-lg">Home</a></li>
                            <li><a href="#Shop" className="text-gray-600 hover:text-black dark:hover:text-white text-lg">Shop</a></li>
                            <li><a href="#About" className="text-gray-600 hover:text-black dark:hover:text-white text-lg">About</a></li>
                            <li><a href="#Blogs" className="text-gray-600 hover:text-black dark:hover:text-white text-lg">Blogs</a></li>
                            <li
                                onClick={() => setOpen(!open)}
                                className="relative text-gray-600 cursor-pointer"
                            >
                                <button>
                                    <span className="mr-2 dark:hover:text-white">Quick Links</span>
                                    <span className={`inline-block text-xs transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}>▼</span>
                                </button>
                                {open && (
                                    <ul className="mt-3 flex flex-col space-y-2 pl-5">
                                        <li><a href="#TrendingProducts" className="text-gray-600 dark:hover:text-white hover:bg-red-400 rounded-sm p-2">Trending Products</a></li>
                                        <li><a href="#BestSelling" className="text-gray-600 dark:hover:text-white hover:bg-red-400 rounded-sm p-2">Best Selling</a></li>
                                        <li><a href="#TopRated" className="text-gray-600 dark:hover:text-white hover:bg-red-400 rounded-sm p-2">Top Rated</a></li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NabBar;
