import { useEffect, useState, useRef } from 'react'
import '../FloatingButtons.scss'
import { FaChevronUp } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

export const ScrollTopButton = () => {
    const location = useLocation()
    const [showScroll, setShowScroll] = useState(false)
    const [isEndOfHeroBlock, setIsEndOfHeroBlock] = useState(false)

    const scrollToTopRef = useRef(null)

    useEffect(() => {
        let currentPosition = window.scrollY
        if (currentPosition > 0) {
            window.scrollTo({
                top: 0,
                behavior: 'instant',
            })
        }
    }, [location.pathname])

    useEffect(() => {
        const handleScroll = () => {
            if (scrollToTopRef.current) {
                const { top, bottom } =
                    scrollToTopRef.current.getBoundingClientRect()
                const windowHeight = window.innerHeight
                setIsEndOfHeroBlock(bottom < windowHeight && top < windowHeight)
                if (window.scrollY > 200) {
                    setShowScroll(true)
                } else {
                    setShowScroll(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        let currentPosition = window.scrollY
        if (currentPosition > 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    return (
        <button
            onClick={scrollToTop}
            className={
                isEndOfHeroBlock && showScroll
                    ? 'showScroll' + ' ' + 'floatButton'
                    : 'scroll-to-top-icon'
            }
            ref={scrollToTopRef}>
            <FaChevronUp className="chevron" />
        </button>
    )
}
