import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import coach1 from '../../Assets/coach1.jpg';
import coach2 from '../../Assets/coach2.jpg';
import coach3 from '../../Assets/coach3.jpg';
import arrowLeft from '../../Assets/arrow-left.png';
import arrowRight from '../../Assets/arrow-rigth.png';

const Carousel = () => {
    const swiperRef = useRef(null);

    return (
        <div className="carousel-inner">
            <button
                className="btn-prev"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <img src={arrowLeft} alt="arrow-prev" />
            </button>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={56}
                slidesPerView={4}
                navigation={false}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach1} alt="coach1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach2} alt="coach2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach3} alt="coach3" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach1} alt="coach1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach2} alt="coach2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach3} alt="coach3" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach1} alt="coach1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach2} alt="coach2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {' '}
                    <div className="slide__card">
                        <img src={coach3} alt="coach3" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <button
                className="btn-next"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <img src={arrowRight} alt="arrow-next" />
            </button>
        </div>
    );
};

export default Carousel;
