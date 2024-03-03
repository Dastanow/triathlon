// import Carousel from './carousel';
import './coaches.scss';

const Coaches = () => {
    return (
        <section className="coaches">
            <div className="container">
                <div className="coaches__wrapper">
                    <h2 className="coaches__title">Наши тренеры</h2>
                    <div className="coaches__buttons">
                        <button className="coaches__button coaches__button_pool">
                            Бассейн
                        </button>
                        <button className="coaches__button coaches__button_gym">
                            Тренировочный зал
                        </button>
                    </div>
                    {/* <Carousel /> */}
                </div>
            </div>
        </section>
    );
};

export default Coaches;
