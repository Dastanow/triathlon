import './style.scss'
import School from  '../../Assets/Placeholder Image.png';

const AboutUs = () => {
  return (
    <div className="about__us">
      <div className="about__us_container">
        <h1>О нас</h1>
        <div className="about__us__platfor">
          <div className="about__us__img">
            <img src={School} alt="school" />
          </div>
          <div className="about__us__content">
            <h2>TRIATHLON CENTER</h2>
            <p>
              <p>Добро пожаловать в наш фитнес-клуб! </p>Наш фитнес-клуб — это
              место, где забота о вашем здоровье и благополучии становится
              страстью. Мы создали уютное пространство, где каждый посетитель
              может обрести не только физическую форму, но и умиротворение для
              души. Наш фитнес-клуб не просто место для тренировок, это стиль
              жизни. Мы стремимся вдохновлять вас на заботу о себе, поддерживать
              вас на пути к лучшей версии себя и делать каждое посещение нашего
              клуба приятным и продуктивным.
            </p>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
