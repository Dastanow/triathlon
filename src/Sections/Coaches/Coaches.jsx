import './coaches.scss';
import api from '../../api';
import CustomCarousel from '../../UI/CustomCarousel';
import { useEffect, useState } from 'react';

const Coaches = () => {
    const gap = 36;
    const slidesPerView = 4;
    const [coaches, setCoaches] = useState([]);
    const [gymCoaches, setGymCoaches] = useState([]);
    const [poolCoaches, setPoolCoaches] = useState([]);
    const [coachClasses, setCoachClasses] = useState({});

    useEffect(() => {
        const { coaches, coachClasses } = api.data.fetchAll();
        setCoaches(coaches);
        setCoachClasses(coachClasses);
        const gymCoaches = coaches.filter((coach) => coach.area === 'gym');
        const poolCoaches = coaches.filter((coach) => coach.area === 'pool');
        setGymCoaches(gymCoaches);
        setPoolCoaches(poolCoaches);
    }, []);

    const handleChooseCoaches = ({ target }) => {
        if (target.name === 'gym') {
            setCoaches(gymCoaches);
        } else if (target.name === 'pool') {
            setCoaches(poolCoaches);
        }
    };

    if (!coaches && !coachClasses) return 'Loader...';

    return (
        <section className="coaches">
            <div className="container">
                <div className="coaches__wrapper">
                    <h2 className="coaches__title">Наши тренеры</h2>
                    <div className="coaches__buttons">
                        <button
                            className="coaches__button"
                            name="pool"
                            onClick={handleChooseCoaches}
                        >
                            Бассейн
                        </button>
                        <button
                            className="coaches__button"
                            name="gym"
                            onClick={handleChooseCoaches}
                        >
                            Тренировочный зал
                        </button>
                    </div>
                    <CustomCarousel
                        gap={gap}
                        number={slidesPerView}
                        dataArray={coaches}
                        classes={coachClasses}
                    />
                </div>
            </div>
        </section>
    );
};

export default Coaches;
