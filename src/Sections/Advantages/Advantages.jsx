import './Advantages.scss';
import AdvanData from './AdvanFakeData.json';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';

const Advantages = () => {
    return (
        <div className="advantages" id="advantages">
            <CustomTitle title={"Наши преимущества"}/>
            <div className="advantages--blocks">
                {AdvanData.map((el) => {
                    return (
                        <div className="block--Two" key={el.id}>
                            <img src={el.image} alt="img" />
                            <p>{el.discription}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advantages;
