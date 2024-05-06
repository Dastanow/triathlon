import './AboutUs.scss';
import school from '@assets/Placeholder Image.png';
import { Container } from '@components';
import { CustomTitle, CustomButton } from '@ui';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <section id="aboutUs" className="aboutUs">
            <Container classNames="aboutUsContainer">
                <CustomTitle title={t('aboutUs')} />
                <div className="aboutUsWrapper">
                    <div className="aboutUsImage">
                        <img src={school} alt="about us image" />
                    </div>
                    <div className="aboutUsContent">
                        <h3 className="aboutUsTitle">TRIATHLON CENTER</h3>
                        <p className="aboutUsDescription">
                        Добро пожаловать в наш инклюзивный спортивный клуб! В нашем спортивном клубе работают профессиональные дружелюбные сотрудники, знающие сервис, с индивидуальным подходом к каждому клиенту. Благодаря этому вы погрузитесь в добрую семейную обстановку, где присутствуют инновационные технологии. Наш спортивный клуб - это место, где забота о вашем здоровье и благополучии становится страстью. Мы создаем уютное пространство, где каждый посетитель может обрести не только физическую форму, но и умиротворение души.
                        </p>
                        <CustomButton type="primary">
                            {t('buttonKR')}
                        </CustomButton>
                    </div>
                </div>
            </Container>
        </section>
    );
};