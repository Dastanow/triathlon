import { useEffect, useState } from 'react'

const useInitStateCarousel = () => {
    const [space, setSpace] = useState({ coach: 0, comment: 0, subscription: 3.26, })
    const [data, setData] = useState({
        coach: 4,
        comment: 3,
        subscription: 3.26,
    })

    const handleResize = () => {
        const inner = window.innerWidth

        if (inner <= 425) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 12,
                comment: 12,
                subscription: 20,
            }))
            setData((prevState) => ({
                ...prevState,
                coach: 1.565,
                comment: 1,
                subscription: 1.1,
            }))
        } else if (inner <= 600) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 18,
                comment: 18,
            }))
            setData((prevState) => ({
                ...prevState,
                coach: 1.565,
                comment: 1,
                subscription: 1.2,
            }))
        } else if (inner < 769) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 24,
                comment: 24,
                subscription: 40,
            }))
            setData((prevState) => ({
                ...prevState,
                coach: 1.565,
                comment: 1,
                subscription: 1.65,
            }))
        } else if (inner > 1079 && inner < 1200) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 20,
                comment: 20,
            }))
            setData((prevState) => ({
                ...prevState,
                coach: 4,
                comment: 3,
                subscription: 2.8,
            }))
        } else if (inner < 1320) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 22,
                comment: 22,
            }))
            setData((prevState) => ({
                ...prevState,
                coach: 4,
                comment: 3,
                subscription: 2.9,
            }))
        } else if (inner < 1440) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 24,
                comment: 24,
            }))
            setData((prevState) => ({
                ...prevState,
                coach: 4,
                comment: 3,
                subscription: 3,
            }))
        } else if (inner < 1560) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 27,
                comment: 27,
            }))
        } else if (inner < 1680) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 30,
                comment: 30,
            }))
        } else if (inner < 1800) {
            setSpace((prevState) => ({
                ...prevState,
                coach: 33,
                comment: 33,
            }))
        } else {
            setSpace((prevState) => ({
                ...prevState,
                coach: 36,
                comment: 36,
                subscription: 36,
            }))
            setData((prevState) => ({
                ...prevState,
                subscription: 3.45
            }))
        }
    }

    if (space.coach === 0 || space.comment === 0) handleResize()

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return [
        space.coach,
        data.coach,
        space.comment,
        data.comment,
        space.subscription,
        data.subscription,
    ]
}

export default useInitStateCarousel
