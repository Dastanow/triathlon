import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CommentCard from '../CommentCard/CommentCard';
import useGetSpaceBetweenSlides from '@hooks/useGetSpaceBetweenSlides';

const CommentsCarousel = (props) => {
    const { dataArray, swiperRef, onNavButton } = props;
    const [spaceBetween] = useGetSpaceBetweenSlides();

    return (
        <div className="comment-inner__wrapper">
            <Swiper
                modules={[Pagination]}
                spaceBetween={spaceBetween}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => onNavButton(swiper)}
            >
                {dataArray.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <CommentCard {...item} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

CommentsCarousel.propTypes = {
    dataArray: PropTypes.arrayOf(PropTypes.object),
    onNavButton: PropTypes.func,
    swiperRef: PropTypes.object,
};

export default CommentsCarousel;
