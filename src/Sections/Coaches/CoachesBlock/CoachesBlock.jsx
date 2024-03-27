import { useEffect, useState } from 'react';
import './CoachesBlock.scss';
import api from '../../../api';
import CustomCarousel from '../../../UI/CustomCarousel';
import { coachesInitState } from '../../../common/constants';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock.jsx';

const CoachesBlock = () => {
    const { gap, slidesPerView, coachClass } = coachesInitState;
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
                <h2 className="coaches__title">Наши тренеры</h2>
                <ButtonsBlock
                    buttons={data.buttons}
                    onChangeCoaches={handleChangeCoaches}
                    activeBtn={activeBtn}
                />
                <CustomCarousel
                    gap={gap}
                    number={slidesPerView}
                    dataArray={curGroup}
                    classes={coachClass}
                />
            </div>
        </section>
    );
};

export default CoachesBlock;
