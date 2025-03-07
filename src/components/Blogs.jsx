import img1 from '../assets/blogs/blog-1.jpg';
import img2 from '../assets/blogs/blog-2.jpg';
import img3 from '../assets/blogs/blog-3.jpg';
import useScrollReveal from './useScrollReveal';

const blogs = [
    { id: 1, image: img1, date: 'Jan 20, 2024 by Dilshad', header: 'How to choose perfect smartwatch', paragraph: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?' },
    { id: 2, image: img2, date: 'Jan 20, 2024 by Dilshad', header: 'How to choose perfect gadget', paragraph: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?' },
    { id: 3, image: img3, date: 'Jan 20, 2024 by Dilshad', header: 'How to choose perfect VR headset', paragraph: 'minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?' },
];

function Blogs() {
    useScrollReveal('.anim');
    return (
        <div className="mt-7 mb-16 px-5 sm:px-10 md:px-16 lg:px-20 xl:px-32">
            <h1 className="text-3xl sm:text-4xl font-bold text-center pb-2">Recent News</h1>
            <p className="text-center text-sm sm:text-base text-gray-400 pb-5">Explore Our Blogs</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {blogs.map((blog) => (
                    <div key={blog.id} className="pb-5 overflow-hidden anim">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src={blog.image}
                                alt="blog"
                                className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-300 transform-gpu hover:scale-105"
                            />
                        </div>
                        <p className='text-xs sm:text-sm text-gray-400 pt-2'>{blog.date}</p>
                        <h1 className="text-lg sm:text-xl font-bold pt-2.5 pb-2.5">{blog.header}</h1>
                        <p className='text-xs sm:text-sm text-gray-400'>{blog.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;