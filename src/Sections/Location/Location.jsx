import './Location.scss';
import email from '../../Assets/emailSVG.svg';
import phone from '../../Assets/phoneSVG.svg';
import map from '../../Assets/mapSVG.svg';
import { CustomTitle } from '@ui';
import { Container } from '@components';

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
    return (
        <section className="location" id="location">
            <Container classNames="locationContainer">
                <CustomTitle title={'Как нас найти'} />
                <div className="locationWrapper">
                    <div className="locationContent">
                        <h3 className="locationTitle">Наши контакты</h3>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6023572249405!2d74.60310637543009!3d42.86012880336322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb632b000a38b%3A0xae646f5966b1033e!2zMTAg0KTQsNGC0YzRj9C90L7QstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1709061562312!5m2!1sru!2skg"
                    />
                </div>
            </Container>
        </section>
    );
};

export default Location;
