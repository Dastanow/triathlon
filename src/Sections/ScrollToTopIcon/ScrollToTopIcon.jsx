import  { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ScrollToTopIcon.scss';

const ScrollToTopIcon = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [isEndOfHeroBlock, setIsEndOfHeroBlock] = useState(false);

    const scrollToTopRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollToTopRef.current) {
                const { top, bottom } = scrollToTopRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                setIsEndOfHeroBlock(bottom < windowHeight && top < windowHeight);
                if (window.scrollY > 200) {
                    setShowScroll(true);
                } else {
                    setShowScroll(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Link to="/" onClick={scrollToTop} className={isEndOfHeroBlock && showScroll ? 'show' : 'hide'} ref={scrollToTopRef}>
            <img className="scroll-to-top-icon" src="/Assets/solar_chevron-up.svg" alt="Scroll To Top" />
        </Link>
    );
};

export default ScrollToTopIcon;
