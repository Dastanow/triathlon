import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import CommentCard from '../CommentCard/CommentCard'
import useInitStateCarousel from '@/hooks/useInitStateCarousel'

const CommentsCarousel = (props) => {
    const { dataArray, swiperRef, onNavButton } = props
    const [, , spaceBetween, slidesPerView] = useInitStateCarousel()

    return (
        <div className="comment-inner__wrapper">
            <Swiper
                modules={[Pagination]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                onSlideChange={(swiper) => onNavButton(swiper)}>
                {dataArray.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CommentCard {...item} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

CommentsCarousel.propTypes = {
    dataArray: PropTypes.arrayOf(PropTypes.object),
    onNavButton: PropTypes.func,
    swiperRef: PropTypes.object,
}

export default CommentsCarousel
