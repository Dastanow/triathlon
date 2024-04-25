import { useEffect, useState } from 'react';
import './CoachesBlock.scss';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock.jsx';
import { CustomCarousel, CustomTitle } from '@ui';
import { fetchAllCoaches } from '@app';
import { useTranslation } from 'react-i18next';

const CoachesBlock = () => {
    const {t} = useTranslation();

    const [data, setData] = useState({});
    const [curGroup, setCurGroup] = useState([]);
    const [activeBtn, setActiveBtn] = useState(null);
    const slidesPerView = 4;

    useEffect(() => {
        const data = fetchAllCoaches();
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
                    <CustomTitle title={t('coaches')}/>        
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
