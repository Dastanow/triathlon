import './Advantages.scss';
import AdvantagesData from './AdvanFakeData.json';
import { CustomTitle } from '@ui';
import Container from '../../Components/Container/Container';

const Advantages = () => {
    return (
        <section id="advantages" className="advantages">
            <Container classNames="advantagesContainer">
                <CustomTitle title={'Наши преимущества'}/>
                <div className="advantagesWrapper">
                    {AdvantagesData.map((advantage) => (
                        <div className="advantagesItem" key={advantage.id}>
                            <img src={advantage.image} alt="img" />
                            <p>{advantage.discription}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Advantages;