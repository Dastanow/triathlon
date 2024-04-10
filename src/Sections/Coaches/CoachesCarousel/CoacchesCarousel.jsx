import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CoachCard from '../CoachCard/CoachCard';
import useGetSpaceBetweenSlides from '../../../hooks/useGetSpaceBetweenSlides';

const CoachesCarousel = (props) => {
    const { dataArray, swiperRef, onNavButton, onClickSlide } = props;
    const [spaceBetween] = useGetSpaceBetweenSlides();

    return (
        <div className="coach-inner__wrapper">
            <Swiper
                modules={[Pagination]}
                spaceBetween={spaceBetween}
                slidesPerView={4}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => onNavButton(swiper)}
                onClick={(swiper) => onClickSlide(swiper)}
            >
                {dataArray.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <CoachCard {...item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

CoachesCarousel.propTypes = {
    dataArray: PropTypes.arrayOf(PropTypes.object),
    onNavButton: PropTypes.func,
    onClickSlide: PropTypes.func,
    swiperRef: PropTypes.object,
};

export default CoachesCarousel;
