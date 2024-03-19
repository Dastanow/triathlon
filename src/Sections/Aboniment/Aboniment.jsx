import './style.scss';
import { FaCheck } from 'react-icons/fa6';
import AbonimentData from './AbonimentFakeData.json';
import imageKing from '../../Assets/mdi_crown.svg';

const Aboniment = () => {
    return (
        <div className="abonement" id="#abonement">
            <h2 className="abonement--title">Абонементы</h2>
            <div className="abonement--blocks">
                {AbonimentData.map((el) => {
                    if (el.id == 2) {
                        return (
                            <div className="blockXits" key={el.id}>
                                <div className="blockXits--term">
                                    <div className="blockXits--term__time">
                                        <h4>{el.term}</h4>
                                        <p>{el.visits}</p>
                                    </div>
                                    <div className="blockXits--term__trend">
                                        <h6>Хит</h6>
                                        <img src={imageKing} alt="img" />
                                    </div>
                                </div>
                                <h2>{el.price}</h2>
                                <button className="blockXits--btn">Купить</button>
                                <div className="blockXits--linear"></div>
                                <div className="blockXits--possibilities">
                                    <p>
                                        <FaCheck /> <span>{el.frost}</span>
                                    </p>
                                    <p>
                                        <FaCheck /> <span>{el.workout}</span>
                                    </p>
                                    <p>
                                        <FaCheck /> <span>{el.guets}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div className="blockTwo" key={el.id}>
                                <div className="blockTwo--term">
                                    <h4>{el.term}</h4>
                                    <p>{el.visits}</p>
                                </div>
                                <h2>{el.price}</h2>
                                <button className="blockTwo--btn">Купить</button>
                                <div className="blockTwo--linear"></div>
                                <div className="blockTwo--possibilities">
                                    <p>
                                        <FaCheck /> <span>{el.frost}</span>
                                    </p>
                                    <p>
                                        <FaCheck /> <span>{el.workout}</span>
                                    </p>
                                    <p>
                                        <FaCheck /> <span>{el.guets}</span>
                                    </p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Aboniment;
