import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    MapPin,
    Phone,
} from 'lucide-react';

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center mb-30">
            <div className="flex flex-col items-start">
                <h1 className="pb-3.5 font-bold text-3xl text-red-500 tracking-[0.2em]">ESHOP</h1>
                <p className="pb-0.5 text-gray-700">Lorem ipsum dolor sit, amet consectetur</p>
                <p className="pb-3.5 text-gray-700">adipisicing elit. Maiores alias cum</p>
                <p className="pb-3.5 text-gray-500">Made with 💖 by Mohamed Osama</p>
                <a className="flex justify-center bg-red-500 text-white p-2 rounded-3xl w-56 h-10 cursor-pointer" href="https://github.com/mohamed-osamaaa">Visit my Github</a>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold pb-3">Important Links</h1>
                <a className="text-gray-500 pb-3" href="#home">Home</a>
                <a className="text-gray-500 pb-3" href="#about">About</a>
                <a className="text-gray-500 pb-3" href="#contact">Contact</a>
                <a className="text-gray-500 pb-3" href="#blog">Blog</a>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold pb-3">Quick Links</h1>
                <a className="text-gray-500 pb-3" href="#home">Home</a>
                <a className="text-gray-500 pb-3" href="#about">About</a>
                <a className="text-gray-500 pb-3" href="#contact">Contact</a>
                <a className="text-gray-500 pb-3" href="#blog">Blog</a>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold pb-5">Address</h1>
                <div className="flex justify-start gap-2 pb-5">
                    <MapPin />
                    <p>Qena, Egypt</p>
                </div>
                <div className="flex justify-start gap-2 pb-5">
                    <Phone />
                    <p>+20 1025926249</p>
                </div>
                <div className="flex justify-start gap-4 pb-5">
                    <a className='hover:text-red-500' href="#instagram"><InstagramIcon /> </a>
                    <a className='hover:text-red-500' href="#facebook"><FacebookIcon /></a>
                    <a className='hover:text-red-500' href="https://www.linkedin.com/in/mohamed-osama-864025289/"><LinkedinIcon /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;