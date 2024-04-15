import './Advantages.scss';
import AdvantagesData from './AdvanFakeData.json';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';
import Container from '../../Components/Container/Container';

const Advantages = () => {
    return (
        <div className="advantages" id="advantages">
            <Container classNames="advantagesContainer">
                <CustomTitle title={'Наши преимущества'}/>
                <div className="advantagesList">
                    {AdvantagesData.map((advantages) => {
                        return (
                            <div className="advantagesItem" key={advantages.id}>
                                <img src={advantages.image} alt="img" />
                                <p>{advantages.discription}</p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
};

export default Advantages;
