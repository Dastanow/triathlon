import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './InnerCarousel.scss';

const InnerCarousel = ({ slide }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: true,
            }}
        >
            {slide &&
                slide.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt={item.alt}
                            className="inner-carousel-image"
                        />
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

InnerCarousel.propTypes = {
    slide: PropTypes.array,
};

export default InnerCarousel;
