import './style.scss';
import { FaCheck } from 'react-icons/fa6';
import AbonimentData from './AbonimentFakeData.json'
const Aboniment = () => {
    return (
        <div id="aboniment">
            <div className="aboniment">
                <h1 className="aboniment--zgolok">Абонементы</h1>
                <div className="aboniment--blocks">
                    {AbonimentData.map((el) => {
                        return (
                            <div className="blockk" key={el.id}>
                                <div className="blockk--term">
                                    <h4>{el.term}</h4>
                                    <p>{el.visits}</p>
                                </div>
                                <h1>{el.price}</h1>
                                <button>Купить</button>
                                {/* <div className="blockk--linear"></div> */}
                                <div className="blockk--possibilities">
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
                    })}
                </div>
            </div>
        </div>
    );
};

export default Aboniment;
