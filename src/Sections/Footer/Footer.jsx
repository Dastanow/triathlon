import './style.scss';
import Map from '../../Assets/map.svg';
import email from '../../Assets/email.svg';
import phone from '../../Assets/phone.svg';
import instagram from '../../Assets/instagram.svg';
import Logotip from '../../Assets/logo1.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__container">
                    <div className="logo__container">
                        <div>
                            <img src={Logotip} alt="img" />
                        </div>

                        <h3>
                            <img src={Map} alt="img" />
              Бишкек, ул.Фатьянова 10
                        </h3>

                        <h3>
                            <img src={email} alt="img" />
              triathloncenter.kg@gmail.com
                        </h3>
                        <a href="https://www.instagram.com/triathloncenter.kg/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                            <h3>
                                <img src={instagram} alt="img" />
                @triathloncenter.kg
                            </h3>
                        </a>
                        <h3 className="footer__contacts__tel">
                            <img src={phone} alt="img" />
              +996 997 000 180
                            <br /> +996 227 000 180
                        </h3>
                    </div>

                    <div className="footer__blok">
                        <h2>Главная</h2>
                        <h3>Тренеры</h3>
                        <h3>Абонементы</h3>
                        <h3>Секции</h3>
                        <h3>Расписание</h3>
                        <h3>Услуги</h3>
                        <h3>Контакты</h3>
                        <h3>Новости</h3>
                    </div>
                    <div className="footer__blok">
                        <h2>Вакансии</h2>
                        <h3>Тренеры</h3>
                        <h3>Отдел продаж</h3>
                    </div>
                    <div className="footer__blok">
                        <h2>График работы</h2>
                        <h3>В будние дни с 7:00 до 23:00</h3>
                        <h3>В выходные и праздничные 
                            <p>дни с 8:00 до 22:00</p></h3>
                    </div>
                </div>
                <div className="footer__form">
                    <h3>Made by GEEKS PRO</h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
