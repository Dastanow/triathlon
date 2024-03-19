import './style.scss';
import Map from '../../Assets/map.svg';
import email from '../../Assets/email.svg';
import phone from '../../Assets/phone.svg';
import instagram from '../../Assets/instagram.svg';
import Logotip from '../../Assets/logo1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="logo__container">
                    <div>
                        <img src={Logotip} alt="img" />
                    </div>
                    <p>
                        <img src={Map} alt="img" />
                            Бишкек, ул.Фатьянова 10
                    </p>
                    <p>
                        <img src={email} alt="img" />
                            triathloncenter.kg@gmail.com
                    </p>
                    <a href="https://www.instagram.com/triathloncenter.kg/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                        <p>
                            <img src={instagram} alt="img" />
                                @triathloncenter.kg
                        </p>
                    </a>
                    <p className="footer__contacts__tel">
                        <img src={phone} alt="img" />
                            +996 997 000 180
                        <br /> +996 227 000 180
                    </p>
                </div>
                <div className="footer__blok">
                    <p>Главная</p>
                    <p>Тренеры</p>
                    <p>Абонементы</p>
                    <p>Секции</p>
                    <p>Расписание</p>
                    <p>Услуги</p>
                    <p>Контакты</p>
                    <p>Новости</p>
                </div>
                <div className="footer__blok">
                    <Link to="/Vacancies" className="Link">
                        <p>Вакансии</p>
                    </Link>
                    <p>Тренеры</p>
                    <p>Отдел продаж</p>
                </div>
                <div className="footer__blok">
                    <p>График работы</p>
                    <p>В будние дни с 7:00 до 23:00</p>
                    <p>
                            В выходные и праздничные
                        <p>дни с 8:00 до 22:00</p>
                    </p>
                </div>
            </div>
            <div className="footer__form">
                <h3>Made by GEEKS PRO</h3>
            </div>
        </footer>
    );
};

export default Footer;
