import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import TrainingAreasCard from '../TrainingAreasCard/TrainingAreasCard';

const TrainingAreasCarousel = (props) => {
    const { dataArray, swiperRef, onNavButton } = props;

    return (
        <div className="train-areas-inner__wrapper">
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => onNavButton(swiper)}
            >
                {dataArray.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <TrainingAreasCard {...item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

TrainingAreasCarousel.propTypes = {
    dataArray: PropTypes.arrayOf(PropTypes.object),
    onNavButton: PropTypes.func,
    swiperRef: PropTypes.object,
};

export default TrainingAreasCarousel;
