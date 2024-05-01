import './Location.scss';
import email from '../../Assets/emailSVG.svg';
import phone from '../../Assets/phoneSVG.svg';
import map from '../../Assets/mapSVG.svg';
import { CustomTitle } from '@ui';
import { Container } from '@components';
import { useTranslation } from 'react-i18next';

const socialLink = [
    {
        src: email,
        label: 'triathloncenter.kg@gmail.com'
    },
    {
        src: phone,
        label: '+996 997 000 180'
    },
    {
        src: phone,
        label: '+996 227 000 180'
    },
    {
        src: map,
        label: 'Бишкек'
    },
    {
        label: 'ул.Фатьянова 10'
    }
]

const Location = () => {
    const {t} = useTranslation()
    return (
        <section className="location" id="location">
            <Container classNames="locationContainer">
                <CustomTitle title={t('Location')} />
                <div className="locationWrapper">
                    <div className="locationContent">
                        <h3 className="locationTitle">{t('Locationtitle')}</h3>
                        <ul className="locationList">
                            {socialLink.map((location) => (
                                <li className="locationItem" key={location.label}>
                                    {location.src && <img src={location.src} alt={location.label} />}
                                    <a href={location.label}>{location.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <iframe
                        className="locationMap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6025421147824!2d74.6056813!3d42.860124899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb632ee137ac7%3A0x61bc5b88bfb79375!2z0KjQutC-0LvQsCDihJY2OSDQuNC8LiDQoi7QodCw0YLRi9C70LPQsNC90L7QstCw!5e0!3m2!1sru!2skg!4v1714566439840!5m2!1sru!2skg"
                    />
                </div>
            </Container>
        </section>
    );
};

export default Location;
