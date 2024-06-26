import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { carouselInitState } from '@shared/constants'
import { TrainingAreasCarousel } from '@sections/TrainingAreas'
import { Modal } from '@/UI'
import { CoachesCarousel, ModalCoachCard } from '@sections/Coaches'
import { CommentsCarousel } from '@sections/CustomerReviews/index'
import 'swiper/scss'
import 'swiper/scss/pagination'
import './CustomCarousel.scss'

export const CustomCarousel = (props) => {
    const { slidesPerView, dataArray } = props
    const {
        btnPrevClass,
        btnNextClass,
        disableClass,
        btnPrevActive,
        btnPrevtDisable,
        btnNextActive,
        btnNextDisable,
    } = carouselInitState

    const [modalActive, setModalActive] = useState(false)
    const [clickedSlide, setClickedSlide] = useState(null)
    const [data, setData] = useState({
        btnPrev: `${btnPrevClass} ${disableClass}`,
        btnNext: `${btnNextClass}`,
    })

    const swiperRef = useRef(null)

    const currentSection = dataArray[0]?.section

    const getNavButtonsClasses = (swiper) => {
        const slidesCount = swiper.slides.length
        const activeSlideIndex = swiper.activeIndex

        const isFirstSlide = activeSlideIndex === 0
        const isLastSlide = activeSlideIndex === slidesCount - slidesPerView

        if (isFirstSlide) {
            setData((prevState) => ({
                ...prevState,
                btnPrev: `${btnPrevClass} ${disableClass}`,
                btnNext: `${btnNextClass}`,
            }))
        } else if (isLastSlide) {
            setData((prevState) => ({
                ...prevState,
                btnPrev: `${btnPrevClass}`,
                btnNext: `${btnNextClass} ${disableClass}`,
            }))
        } else {
            setData((prevState) => ({
                ...prevState,
                btnPrev: `${btnPrevClass}`,
                btnNext: `${btnNextClass}`,
            }))
        }
    }

    const getIconBtnPrev = () => {
        return data.btnPrev.includes(disableClass)
            ? btnPrevtDisable
            : btnPrevActive
    }
    const getIconBtnNext = () => {
        return data.btnNext.includes(disableClass)
            ? btnNextDisable
            : btnNextActive
    }

    const handleSwitchPrevSlide = () => {
        swiperRef.current?.slidePrev()
    }
    const handleSwitchNextSlide = () => {
        swiperRef.current?.slideNext()
    }

    const handleClickOnSlide = (swiper) => {
        const clickedIndex = swiper.clickedIndex
        const clickedSlide = dataArray[clickedIndex]

        const isTargetSection = dataArray[0]?.section !== 'trainer'
        const isClickedSlide = swiper.clickedSlide

        if (!isTargetSection && !isClickedSlide) return
        setClickedSlide(clickedSlide)
        setModalActive(true)
    }

    return (
        <div className="carousel-inner">
            <button className={data.btnPrev} onClick={handleSwitchPrevSlide}>
                <img src={getIconBtnPrev()} alt="btn prev icon" />
            </button>
            {(currentSection === 'trainer' && (
                <CoachesCarousel
                    {...props}
                    onNavButton={getNavButtonsClasses}
                    onClickSlide={handleClickOnSlide}
                    swiperRef={swiperRef}
                />
            )) ||
                (currentSection === 'trainzone' && (
                    <TrainingAreasCarousel
                        {...props}
                        onNavButton={getNavButtonsClasses}
                        swiperRef={swiperRef}
                    />
                )) ||
                (currentSection !== 'trainer' && (
                    <CommentsCarousel
                        {...props}
                        onNavButton={getNavButtonsClasses}
                        swiperRef={swiperRef}
                    />
                ))}
            <button className={data.btnNext} onClick={handleSwitchNextSlide}>
                <img src={getIconBtnNext()} alt="btn next icon" />
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <ModalCoachCard coach={clickedSlide} />
            </Modal>
        </div>
    )
}

CustomCarousel.propTypes = {
    slidesPerView: PropTypes.number.isRequired,
    dataArray: PropTypes.arrayOf(PropTypes.object),
}
