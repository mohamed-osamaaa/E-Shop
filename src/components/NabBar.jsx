import { useState } from 'react';

function NabBar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div>
                <h1>ESHOP</h1>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#Shop">Shop</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Blogs">Blogs</a></li>

                    <li
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <button>
                            Quick Links
                            <span className={`transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}>
                                ▼
                            </span>
                        </button>
                        {open && (
                            <ul>
                                <li><a href="#TrendingProducts">Trending Products</a></li>
                                <li><a href="#BestSelling">Best Selling</a></li>
                                <li><a href="#TopRated">Top Rated</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NabBar;
