import './OurServices.scss';
import ModalWindow from '../../Modules/ModalWindow';
import { useState, useEffect } from 'react';
import { CustomTitle } from '@ui';
import { Container } from '@components';
import { CustomForm } from '@/UI';
import { initStateAppForm } from '@/Shared/constants';
import axios from 'axios';

export const OurServices = () => {
    const [modalActive, setModalActive] = useState(false);
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://209.38.228.54:83/api/v1/offering/');
                setServicesData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="ourServices" id="ourServices">
            <Container classNames="ourServicesContainer">
                <CustomTitle title={'Наши услуги'} />
                <div className="ourServicesCards">
                    {servicesData.filter(card => card.id).map((card)=> {
                        return (
                            <div key={card.id} className="ourServicesCard">
                                <div className="ourServicesCardContent">
                                    <h5 className="ourServicesCardLabel">{card.title}</h5>
                                    <button className="ourServicesCardButton" onClick={() => setModalActive(true)}>
                                        Узнать больше
                                    </button>
                                </div>
                                <img src={card.image && card.image.icon} alt="icon" className="ourServicesCardImg" />
                            </div>
                        )
                    })}
                </div>
                <ModalWindow active={modalActive} setActive={setModalActive} >
                    <CustomForm {... initStateAppForm}/>
                </ModalWindow>
            </Container>
        </section>
    )
}
