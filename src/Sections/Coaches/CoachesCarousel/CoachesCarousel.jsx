import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import CoachCard from '../CoachCard/CoachCard'
import useInitStateCarousel from '@/hooks/useInitStateCarousel'

const CoachesCarousel = (props) => {
    const { dataArray, swiperRef, onNavButton, onClickSlide, onSwiper } = props
    const [spaceBetween, slidesPerView] = useInitStateCarousel()

    return (
        <div className="coach-inner__wrapper">
            <Swiper
                modules={[Pagination]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                onSwiper={onSwiper}
                onSlideChange={(event) => onNavButton(event)}
                onClick={(swiper) => onClickSlide(swiper)}>
                {dataArray.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <CoachCard {...item} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

CoachesCarousel.propTypes = {
    dataArray: PropTypes.arrayOf(PropTypes.object),
    onNavButton: PropTypes.func,
    onClickSlide: PropTypes.func,
    swiperRef: PropTypes.object,
    onSwiper: PropTypes.func,
}

export default CoachesCarousel
