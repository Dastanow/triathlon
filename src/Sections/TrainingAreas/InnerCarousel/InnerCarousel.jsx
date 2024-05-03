import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import './InnerCarousel.scss'

const InnerCarousel = ({ slides }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}>
            {slides &&
                slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={item.images}
                            alt={item.title}
                            className="inner-carousel-image"
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

InnerCarousel.propTypes = {
    slides: PropTypes.array,
}

export default InnerCarousel
