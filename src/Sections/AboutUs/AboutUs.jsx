import './AboutUs.scss';
import School from '../../Assets/Placeholder Image.png';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';
import CustomButton from '../../UI/CustomButton/CustomButton';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUs__container">
                <CustomTitle title={'O нас'}/>
                <div className="aboutUs__platfor">
                    <div className="aboutUs__img">
                        <img src={School} alt="img" />
                    </div>
                    <div className="aboutUs__content">
                        <h3>TRIATHLON CENTER</h3>
                        <p>Добро пожаловать в наш инклюзивный спортивный клуб! В нашем спортивном клубе профессиональные дружелюбные сотрудники знающие сервис, с индивидуальным подходом к каждому клиенту. Благодаря этому вы погрузитесь в добрую семейную обстановку, где присутствуют инновационные технологии. <br /> Наш спортивный клуб - это место, где забота о вашем здоровье и благополучии становится страстью. Мы создали уютное пространство, где каждый посетитель может обрести не только физическую форму, но и умиротворение для души.</p>
                        <a href="https://www.triathlon.kg/" target="_blank">
                            <CustomButton title={'Подробнее'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
