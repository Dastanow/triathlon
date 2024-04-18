import './OurServices.scss';
import ModalWindow from '../../Modules/ModalWindow';
import { useState } from 'react';
import { CustomTitle } from '@ui';
import data from './fakeApiService.json'
import { Container } from '@components';

const OurServices = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="ourServices">
            <Container classNames="ourServicesContainer">
                <CustomTitle title={'Наши услуги'}/>
                <div className="ourServicesCards">
                    {data.map((card)=> {
                        return (
                            <div key={card.id} className="ourServicesCard">
                                <div className="ourServicesCardContent">
                                    <h5 className="ourServicesCardLabel">{card.name}</h5>
                                    <button className="ourServicesCardButton" onClick={() => setModalActive(true)}>
                                        Узнать больше
                                    </button>
                                </div>
                                <img src={card.icon} alt="img" className="ourServicesCardImg" />
                            </div>
                        )})}
                </div>
                <ModalWindow active={modalActive} setActive={setModalActive} >
                    {/* {... initStateAppForm}  /////FIX ME\\\\\\ */}
                </ModalWindow>
            </Container>
        </div>
    );
};

export default OurServices;
