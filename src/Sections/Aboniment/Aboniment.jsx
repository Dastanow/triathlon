import './Aboniment.scss';
import imageKing from '../../Assets/mdi_crown.svg';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';
import ModalWindow from '../../Modules/ModalWindow';
import Requisites from './Requisites/Requisites';
import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { axiosAPI } from '../../api/interceptionLang/interceptionLang';

const Aboniment = () => {
    // const { t } = useTranslation();
    const [data,setData] = useState()
    const [modalActive, setModalActive] = useState(false);

    const fetchData = async () =>{
        try {
            const userLanguage = localStorage.getItem('language') || 'ru'; // Получаем язык пользователя из localStorage
            const res = await axiosAPI.get(`http://209.38.228.54:83/api/v1/abonements/?lang=${userLanguage}`);
            setData(res.data);
        } catch(err) {
            console.error('Ошибка при получении данных:', err);
        }
    };
    
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="abonement" id="abonement">
            <CustomTitle title={('Aбонименты')} />
            <div className="abonement--blocks">
                {Array.isArray(data) ? data.map((el) => {
                    if (el == 'special') {
                        return (
                            <div className="blockXits" key={el.id}>
                                <div className="blockXits--term">
                                    <div className="blockXits--term__time">
                                        <h4>{el.title}</h4>
                                        <p>{el.time}</p>
                                    </div>
                                    <div className="blockXits--term__trend">
                                        <h6>Хит</h6>
                                        <img src={imageKing} alt="img" />
                                    </div>
                                </div>
                                <h2>{el.price}</h2>
                                <button
                                    onClick={() => setModalActive(true)}
                                    className="blockXits--btn"
                                >
                                    {/* {t('buy')} */}
                                    Купить
                                </button>
                                <div className="blockXits--linear"></div>
                                <div className="blockXits--possibilities">
                                    <p>
                                        {el.mark_freeze} <span>{el.freeze}</span>
                                    </p>
                                    <p>
                                        {el.mark_freeze} <span>{el.trainer}</span>
                                    </p>
                                    <p>
                                        {el.mark_freeze} <span>{el.guest}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div className="blockTwo" key={el.id}>
                                <div className="blockTwo--term">
                                    <h4>{el.title}</h4>
                                    <p>{el.time}</p>
                                </div>
                                <h2>{el.price}</h2>
                                <button
                                    onClick={() => setModalActive(true)}
                                    className="blockTwo--btn"
                                >
                                    {/* {t('buy')} */}
                                    Купить
                                </button>
                                <div className="blockTwo--linear"></div>
                                <div className="blockTwo--possibilities">
                                    <p>
                                        {el.mark_freeze} <span>{el.freeze}</span>
                                    </p>
                                    <p>
                                        {el.mark_freeze} <span>{el.trainer}</span>
                                    </p>
                                    <p>
                                        {el.mark_freeze} <span>{el.guest}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    }
                }): <p>loading</p>}
                <ModalWindow active={modalActive} setActive={setModalActive}>
                    <Requisites />
                </ModalWindow>
            </div>
        </div>
    );
};

export default Aboniment;
