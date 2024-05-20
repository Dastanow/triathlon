import { useEffect, useState } from 'react';
import { CustomButton } from '@ui';
import { Container } from '@components';
import './Hero.scss';
import { useTranslation } from 'react-i18next';
import CustomModal from '@/UI/CustomModal/CustomModal';
import { axiosAPI } from '@/App';

export const Hero = () => {
    const [modalActive, setModalActive] = useState(false);
    const [heroApi, setHeroApi] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosAPI.get('homepage/');
                setHeroApi(data);
            } catch (error) {
                console.log('error');
            }
        };
        fetchData();
    }, []);

    const { t } = useTranslation();
    return (
        <section className="hero" id="hero">
            {heroApi?.map((item) => {
                return (
                    <video className="heroVideo" autoPlay loop muted>
                     <source src={item.photo} type="video/mp4" />
                    </video>
                )
            }) 
            }
            <Container classNames="heroContainer">
                {heroApi?.map((item) => {
                    return (
                        <div className="heroContent">
                        <h1 className="heroContentTitle">{item.title}</h1>
                        <p className="heroContentDescription">
                            {item.subtitle}
                        </p>
                        <CustomButton
                            type="secondary"
                            onClick={() => setModalActive(true)}>
                            {t('buttonHero')}
                        </CustomButton>
                    </div>
                    )
                })     
                }
            </Container>
            <CustomModal
                type="leaveRequest"
                title={t('buttonHero')}
                close={() => setModalActive(false)}
                isOpen={modalActive}
            />
        </section>
    );
};
