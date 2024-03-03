import React from 'react'
import './Feedback.scss'
import {SwiperSlide, Swiper, useSwiper} from 'swiper/react';
import client from '../../Assets/client.svg'

import right from '../../Assets/btnright.svg'
import left from '../../Assets/btnleft.svg'

import custom from '../../Assets/custom.png'






const Feedback = () => {


    const data =[
        {
            id:0,
            title:'James Pattinson',
            info:`“Lobortis leo pretium facilisis amet nisl at nec.
            Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”`,
            img: client
        },
        {
            id:1,
            title:'James Pattinson',
            info:`“Lobortis leo pretium facilisis amet nisl at nec.
            Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”`,
            img: client
        },
        {
            id:2,
            title:'James Pattinson',
            info:`“Lobortis leo pretium facilisis amet nisl at nec.
            Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”`,
            img: client
        },
        
        
        
    ]
 


    return (
        <div className="general">
            <div>
                <h1 className="comments">Отзывы наших клиентов</h1>
                <p className="reading">Прочтите, что говорят о нас наши клиенты</p>

           


                <section className="r-wrapper h-container">
                    <div className="paddings innerWidth r-container">
                    
                        <div className="all-card">
                    
                       
                            <div className="left"><img src={left} alt="" /></div>
                      
                            
                            {data.map((card) => (
                       

                                <div className="r-card ">
                                    <img className="card-im" src={card.img} alt="" />

                                   
                                            
                                    <h3 className="card-text">{card.title}</h3>
                                        

                                    <h4 className="card-tet">{card.title}</h4>
                                    <p className="card-info">{card.info}</p>
                                </div>
                                
                            ))}
                            
                            <div className="right"><img src={right} alt="" /></div>


                    
                        </div>
                        <img className="custom" src={custom} alt="" />

                    </div>
                </section>
















            </div>

        </div>
    )
}

export default Feedback




// const SliderButtons = () => {
//     const swiper = useSwiper();
//     return (
//         <div className="flexCenter r-buttons">
//             <button onClick={() => swiper.slidePrev()}>{right}</button>
//             <button onClick={() => swiper.slideNext()}>{right}</button>
//         </div>
//     )
// }






// import { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Pagination } from 'module';

// import './Feedback.scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// // import coach1 from '../../Assets/coach1.jpg';
// // import coach2 from '../../Assets/coach2.jpg';
// // import coach3 from '../../Assets/coach3.jpg';
// import arrowLeft from '../../Assets/btnleft.svg';
// import arrowRight from '../../Assets/btnright.svg';

// const Carousel = () => {
//     const swiperRef = useRef(null);

//     return (
//         <div className="carousel-inner">
//             <button
//                 className="btn-prev"
//                 onClick={() => swiperRef.current?.slidePrev()}
//             >
//                 <img src={arrowLeft} alt="arrow-prev" />
//             </button>
//             <Swiper
//                 modules={[Navigation, Pagination]}
//                 spaceBetween={56}
//                 slidesPerView={4}
//                 navigation={false}
//                 pagination={{ clickable: true }}
//                 onBeforeInit={(swiper) => {
//                     swiperRef.current = swiper;
//                 }}
//             >
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach1} alt="coach1" /> */}
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach2} alt="coach2" /> */}
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach3} alt="coach3" /> */}
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach1} alt="coach1" /> */}
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach2} alt="coach2" /> */}
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach3} alt="coach3" /> */}
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach1} alt="coach1" /> */}
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach2} alt="coach2" /> */}
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     {' '}
//                     <div className="slide__card">
//                         {/* <img src={coach3} alt="coach3" /> */}
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//             <button
//                 className="btn-next"
//                 onClick={() => swiperRef.current?.slideNext()}
//             >
//                 <img src={arrowRight} alt="arrow-next" />
//             </button>
//         </div>
//     );
// };

// export default Carousel;
