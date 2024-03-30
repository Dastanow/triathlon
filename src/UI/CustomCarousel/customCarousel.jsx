import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { carouselInitState } from '../../common/constants';
import { TrainingAreasCard } from '../../Sections/TrainingAreas';
import Modal from '../Modal/Modal';
import { CoachCard, ModalCoachCard } from '../../Sections/Coaches';
import { CommentCard } from '../../Sections/CustomerReviews';
import 'swiper/scss';
import 'swiper/scss/pagination';
import './CustomCarousel.scss';

const CustomCarousel = (props) => {
    const { gap, number, dataArray, classes } = props;
    const {
        btnPrevClass,
        btnNextClass,
        disableClass,
        btnPrevActive,
        btnPrevtDisable,
        btnNextActive,
        btnNextDisable,
    } = carouselInitState;

    const [modalActive, setModalActive] = useState(false);
    const [clickedSlide, setClickedSlide] = useState(null);
    const [data, setData] = useState({
        btnPrev: `${btnPrevClass} ${disableClass}`,
        btnNext: `${btnNextClass}`,
    });

    const swiperRef = useRef(null);

    const currentSection = dataArray[0]?.section;

    const getNavButtonsClasses = (swiper) => {
        const slidesCount = swiper.slides.length;
        const activeSlideIndex = swiper.activeIndex;

        const isFirstSlide = activeSlideIndex === 0;
        const isLastSlide = activeSlideIndex === slidesCount - number;

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
        return data.btnPrev.includes(disableClass)
            ? btnPrevtDisable
            : btnPrevActive;
    };
    const getIconBtnNext = () => {
        return data.btnNext.includes(disableClass)
            ? btnNextDisable
            : btnNextActive;
    };

    const handleSwitchPrevSlide = () => {
        swiperRef.current?.slidePrev();
    };
    const handleSwitchNextSlide = () => {
        swiperRef.current?.slideNext();
    };

    const handleClickOnSlide = (swiper) => {
        if (dataArray[0]?.section !== 'coach') return;
        const slideIndex = swiper.clickedIndex;
        const clickedSlide = dataArray[slideIndex];
        setClickedSlide(clickedSlide);
        setModalActive(true);
    };

    return (
        <div className="carousel-inner">
            <button className={data.btnPrev} onClick={handleSwitchPrevSlide}>
                <img src={getIconBtnPrev()} alt="btn prev icon" />
            </button>
            <div className={classes.class0}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={gap}
                    slidesPerView={number}
                    pagination={{ clickable: true }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => getNavButtonsClasses(swiper)}
                    onClick={(swiper) => handleClickOnSlide(swiper)}
                >
                    {(currentSection === 'train' &&
                        dataArray.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <TrainingAreasCard {...item} />
                                </SwiperSlide>
                            );
                        })) ||
                        (currentSection === 'coach' &&
                            dataArray.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <CoachCard {...item} />
                                    </SwiperSlide>
                                );
                            })) ||
                        dataArray.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <CommentCard {...item} />
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
            <button className={data.btnNext} onClick={handleSwitchNextSlide}>
                <img src={getIconBtnNext()} alt="btn next icon" />
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <ModalCoachCard coach={clickedSlide} />
            </Modal>
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
