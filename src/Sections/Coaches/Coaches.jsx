import { useEffect, useState } from 'react';
import './style.scss';
import api from '../../api';
import CustomCarousel from '../../UI/CustomCarousel';
import { coachesInitState } from '../../common/constants';
import ButtonsBlock from './buttonsBlock';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';

const Coaches = () => {
    const { gap, slidesPerView, coachClasses } = coachesInitState;
    const [data, setData] = useState({});
    const [curGroup, setCurGroup] = useState([]);
    const [activeBtn, setActiveBtn] = useState(null);

    useEffect(() => {
        const data = api.data.fetchAll();
        setData(data);
        setCurGroup(data.coaches);
    }, []);

    const handleChangeCoaches = ({ target }) => {
        setActiveBtn(target.name);
        const newGroup = data.coaches.filter(
            (coach) => coach.area === target.name
        );
        setCurGroup(newGroup);
    };

    if (!data.coaches && !data.buttons) return 'Loader...';

    return (
        <section className="coaches">
            <div className="container">
                <div className="coaches__wrapper">
                    <CustomTitle title={'Наши тренеры'}/>   
                    <ButtonsBlock
                        buttons={data.buttons}
                        onChangeCoaches={handleChangeCoaches}
                        activeBtn={activeBtn}
                    />
                    <CustomCarousel
                        gap={gap}
                        number={slidesPerView}
                        dataArray={curGroup}
                        classes={coachClasses}
                    />
                </div>
            </div>
        </section>
    );
};

export default Coaches;
