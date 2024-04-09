import './Footer.scss';
import Map from '../../Assets/map.svg';
import email from '../../Assets/email.svg';
import phone from '../../Assets/phone.svg';
import instagram from '../../Assets/instagram.svg';
import Logotip from '../../Assets/logo1.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const nav = useNavigate();
    const VacanciesClick = () => {
        nav('vacancies')
        window.scrollTo(0, 0);
    }
    const blocks = [
        ['Главная', 'Тренеры', 'Абонементы', 'Секции', 'Расписание', 'Услуги', 'Контакты', 'Новости'],
        ['Документы', 'Правила возврата и оплаты', 'Политика конфиденциальности', 'Договор возмездного оказания услуг'],
        [{onClick: VacanciesClick, text: 'Вакансии'},'Тренеры', 'Отдел продаж'],
        ['График работы', 'В будние дни с 7:00 до 23:00', ' В выходные и праздничные  дни с 8:00 до 22:00']
    ]
    return (
        <footer>
            <div className="footer__container">
                <div className="logo__container">
                    <div className="footer__Logotip">
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
                    <a href="https://www.instagram.com/triathloncenter.kg/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
                        <p>
                            <img src={instagram} alt="img" />
                            @triathloncenter.kg
                        </p>
                    </a>
                    <p className="footer__contacts__tel">
                        <img src={phone} alt="img" />
                        +996 997 000 180
                        <br />
                        +996 227 000 180
                    </p>
                </div>
                {blocks.map((block, index) => (
                    <div className="footer__blok" key={index}>
                        {block.map((item, i) => {
                            if(typeof item === 'object') {
                                return <p key={i} onClick={item.onClick}>{item.text}</p>
                            }else{
                                return <p key={i}>{item}</p> 
                            }
                        })}
                    </div>
                ))}
            </div>
            <div className="footer__form">
                <h3>Made by GEEKS PRO</h3>
            </div>
        </footer>
    );
};

export default Footer;
