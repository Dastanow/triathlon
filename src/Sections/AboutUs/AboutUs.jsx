import './style.scss';
import School from '../../Assets/Placeholder Image.png';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUs__container">
                <h2>О нас</h2>
                <div className="aboutUs__platfor">
                    <div className="aboutUs__img">
                        <img src={School} alt="img" />
                    </div>
                    <div className="aboutUs__content">
                        <h3>TRIATHLON CENTER</h3>
                        <p>Добро пожаловать в наш инклюзивный спортивный клуб! В нашем спортивном клубе профессиональные дружелюбные сотрудники знающие сервис, с индивидуальным подходом к каждому клиенту. Благодаря этому вы погрузитесь в добрую семейную обстановку, где присутствуют инновационные технологии. <br />Наш спортивный клуб - это место, где забота о вашем здоровье и благополучии становится страстью. Мы создали уютное пространство, где каждый посетитель может обрести не только физическую форму, но и умиротворение для души.</p>
                        <a href="https://www.triathlon.kg/" target="_blank">
                            <button>
                            Подробнее
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
