import br1 from '../assets/brand/br-1.png';
import br2 from '../assets/brand/br-2.png';
import br3 from '../assets/brand/br-3.png';
import br4 from '../assets/brand/br-4.png';
import br5 from '../assets/brand/br-5.png';
import useScrollReveal from './useScrollReveal';

function Brands() {
    useScrollReveal('.anim');

    return (
        <div className="w-full bg-gray-200 dark:bg-gray-700 py-6 px-4 flex flex-wrap justify-center items-center gap-6 lg:gap-20">
            {[br1, br2, br3, br4, br5].map((brand, index) => (
                <img
                    key={index}
                    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto opacity-50 anim dark:filter dark:invert"
                    src={brand}
                    alt={`brand-${index + 1}`}
                />
            ))}
        </div>
    );
}

export default Brands;
