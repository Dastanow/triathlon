import { useEffect, useState } from 'react';
import './CoachesBlock.scss';
import api from '../../../api';
import CustomCarousel from '../../../UI/CustomCarousel';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock.jsx';
import CustomTitle from '../../../UI/CustomTitle/CustomTitle.jsx';

const CoachesBlock = () => {
    const [data, setData] = useState({});
    const [curGroup, setCurGroup] = useState([]);
    const [activeBtn, setActiveBtn] = useState(null);
    const slidesPerView = 4;

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
        <section className="coaches" id="coaches">
            <div className="container">
                <div className="coaches__title">
                    <CustomTitle title={'Наши тренеры'} />
                </div>
                <ButtonsBlock
                    buttons={data.buttons}
                    onChangeCoaches={handleChangeCoaches}
                    activeBtn={activeBtn}
                />
                <CustomCarousel
                    dataArray={curGroup}
                    slidesPerView={slidesPerView}
                />
            </div>
        </section>
    );
};

export default CoachesBlock;
