import { useEffect, useState } from 'react';

const useGetSpaceBetweenSlides = () => {
    const [spaceBetween, setSpaceBetween] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(4);

    const handleResize = () => {
        const width = window.innerWidth;

        if (width < 377) {
            setSpaceBetween(12);
            setSlidesPerView(2);
        } else if (width < 1440) {
            setSpaceBetween(24);
        } else if (width < 1560) {
            setSpaceBetween(27);
        } else if (width < 1680) {
            setSpaceBetween(30);
        } else if (width < 1800) {
            setSpaceBetween(33);
        } else {
            setSpaceBetween(36);
        }
    };
    if (spaceBetween === 0) handleResize();
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return [spaceBetween, slidesPerView];
};

export default useGetSpaceBetweenSlides;
