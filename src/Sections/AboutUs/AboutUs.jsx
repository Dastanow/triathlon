import './AboutUs.scss';
import school from '../../Assets/Placeholder Image.png';
import { Container } from '@components';
import { CustomTitle, CustomButton } from '@ui';

export const AboutUs = () => {
    return (
        <section id="aboutUs" className="aboutUs">
            <Container classNames="aboutUsContainer">
                <CustomTitle title={'O нас'} />
                <div className="aboutUsWrapper">
                    <div className="aboutUsImage">
                        <img src={school} alt="about us image" />
                    </div>
                    <div className="aboutUsContent">
                        <h3 className="aboutUsTitle">TRIATHLON CENTER</h3>
                        <p className="aboutUsDescription">Добро пожаловать в наш инклюзивный спортивный клуб! В нашем спортивном клубе профессиональные дружелюбные сотрудники знающие сервис, с индивидуальным подходом к каждому клиенту. Благодаря этому вы погрузитесь в добрую семейную обстановку, где присутствуют инновационные технологии. 
                            Наш спортивный клуб - это место, где забота о вашем здоровье и благополучии становится страстью. Мы создали уютное пространство, где каждый посетитель может обрести не только физическую форму, но и умиротворение для души.s
                        </p>
                        <CustomButton type="primary">
                            Подробнее
                        </CustomButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};