import './OurServices.scss';
import ModalWindow from '../../Modules/ModalWindow';
import { useState } from 'react';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';
import data from './fakeApiService.json'

const OurServices = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="service">
            <div className="service__container">
                <CustomTitle title={'Наши услуги'}/>
                <div className="all-cards">
                    {data.map((el)=> {
                        return (
                            <div key={el.id} className="all-cards__card">
                                <h3 className="all-cards__text">{el.name}</h3>
                                <img src={el.icon} alt="img" className="all-cards__image" />
                                <img src={el.doubleIcon} alt="img" className="all-cards__image-alt" />
                                <div className="all-cards__info" onClick={() => setModalActive(true)}>
                                    <span className="modal-title">
                            Узнать больше
                                    </span>
                                </div>
                            </div>
                        )})}
                </div>
                <ModalWindow active={modalActive} setActive={setModalActive} >
                    {/* {... initStateAppForm}  /////FIX ME\\\\\\ */}
                </ModalWindow>
            </div>
        </div>
    );
};

export default OurServices;
