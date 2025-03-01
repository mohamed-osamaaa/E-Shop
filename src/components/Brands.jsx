import br1 from '../assets/brand/br-1.png';
import br2 from '../assets/brand/br-2.png';
import br3 from '../assets/brand/br-3.png';
import br4 from '../assets/brand/br-4.png';
import br5 from '../assets/brand/br-5.png';
import useScrollReveal from './useScrollReveal';

function Brands() {
    useScrollReveal('.anim');
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-gray-200 dark:bg-gray-700 w-full h-32 items-center justify-items-center">
            <img className="h-10 w-20 opacity-50 anim dark:filter dark:invert" src={br1} alt="br1" />
            <img className="h-10 w-20 opacity-50 anim dark:filter dark:invert" src={br2} alt="br2" />
            <img className="h-10 w-20 opacity-50 anim dark:filter dark:invert" src={br3} alt="br3" />
            <img className="h-10 w-20 opacity-50 anim dark:filter dark:invert" src={br4} alt="br4" />
            <img className="h-10 w-20 opacity-50 anim dark:filter dark:invert" src={br5} alt="br5" />
        </div>
    );
}

export default Brands;