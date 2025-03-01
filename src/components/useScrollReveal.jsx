import { useEffect } from 'react';

import ScrollReveal from 'scrollreveal';

const useScrollReveal = (selector, options = {}) => {
    useEffect(() => {
        ScrollReveal().reveal(selector, {
            origin: 'bottom',
            distance: '50px',
            duration: 800,
            delay: 200,
            easing: 'ease-in-out',
            reset: false,
            ...options,
        });
    }, [selector, options]);
};

export default useScrollReveal;
