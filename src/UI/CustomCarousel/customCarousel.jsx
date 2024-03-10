import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CustomSlideCard from '../CustomSlideCard';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './customCarousel.scss';

import arrowLeft from '../../Assets/arrow-left.png';
import arrowPrev from '../../Assets/arrow-prev.png';
import arrowNext from '../../Assets/arrow-next.png';
import arrowRight from '../../Assets/arrow-right.png';

const CustomCarousel = ({ gap, number, dataArray, classes }) => {
    const btnPrevClass = 'btn-prev';
    const btnNextClass = 'btn-next';
    const disableClass = 'btn-disable';

    const swiperRef = useRef(null);
    const [data, setData] = useState({
        btnPrev: `${btnPrevClass} ${disableClass}`,
        btnNext: `${btnNextClass}`,
    });

    const getNavButtonsClasses = (swiper) => {
        const slidesQuantity = swiper.slides.length;
        const activeSlideIndex = swiper.activeIndex;

        const isFirstSlide = activeSlideIndex === 0;
        const isLastSlide = activeSlideIndex === slidesQuantity - number;

        if (isFirstSlide) {
            setData((prevState) => ({
                ...prevState,
                btnPrev: `${btnPrevClass} ${disableClass}`,
                btnNext: `${btnNextClass}`,
            }));
        } else if (isLastSlide) {
            setData((prevState) => ({
                ...prevState,
                btnPrev: `${btnPrevClass}`,
                btnNext: `${btnNextClass} ${disableClass}`,
            }));
        } else {
            setData((prevState) => ({
                ...prevState,
                btnPrev: `${btnPrevClass}`,
                btnNext: `${btnNextClass}`,
            }));
        }
    };

    const getIconBtnPrev = () => {
        return data.btnPrev.includes(disableClass) ? arrowPrev : arrowLeft;
    };

    const getIconBtnNext = () => {
        return data.btnNext.includes(disableClass) ? arrowNext : arrowRight;
    };

    const handleSwitchPrevSlide = () => {
        swiperRef.current?.slidePrev();
    };
    const handleSwitchNextSlide = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <div className="carousel-inner">
            <button className={data.btnPrev} onClick={handleSwitchPrevSlide}>
                <img src={getIconBtnPrev()} alt="arrow-prev" />
            </button>
            <div className={classes.class0}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={gap}
                    slidesPerView={number}
                    navigation={false}
                    pagination={{ clickable: true }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => getNavButtonsClasses(swiper)}
                >
                    {dataArray.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <CustomSlideCard
                                    class1={classes.class1}
                                    class2={classes.class2}
                                    class3={classes.class3}
                                    class4={classes.class4}
                                    class5={classes.class5}
                                    image={item.image}
                                    alt={item.alt}
                                    title={item.title}
                                    text1={item.text1}
                                    text2={item.text2}
                                    text3={item.text3}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <button className={data.btnNext} onClick={handleSwitchNextSlide}>
                <img src={getIconBtnNext()} alt="arrow-next" />
            </button>
        </div>
    );
};

CustomCarousel.propTypes = {
    gap: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    dataArray: PropTypes.arrayOf(PropTypes.object),
    classes: PropTypes.objectOf(PropTypes.string),
};

export default CustomCarousel;
