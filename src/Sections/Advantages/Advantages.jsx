import './Advantages.scss';
import AdvanData from './AdvanFakeData.json';

const Advantages = () => {
    return (
        <div className="advantages" id="advantages">
            <h2 className="advantages--title">Наши преимущества</h2>
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
