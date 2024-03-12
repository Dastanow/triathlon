import './style.scss';
import { FaCheck } from 'react-icons/fa6';
import AbonimentData from './AbonimentFakeData.json'
import imageKing from '../../Assets/mdi_crown.svg'

const Aboniment = () => {
    return (
        <div id="aboniment">
            <div className="aboniment">
                <h1 className="aboniment--zgolok">Абонементы</h1>
                <div className="aboniment--blocks">
                    {AbonimentData.map((el) => {
                        if(el.id == 2){
                            return (
                                <div className="blockkXit" key={el.id}>
                                    <div className="blockkXit--term">
                                        <div className="blockkXit--term__time">
                                            <h4>{el.term}</h4>
                                            <p>{el.visits}</p>
                                        </div>
                                        <div className="blockkXit--term__trend">
                                            <h6>Хит</h6>
                                            <img src={imageKing} alt="img" />
                                        </div>
                                    </div>
                                    <h1>{el.price}</h1>
                                    <button className="blockkXit--btn">Купить</button>
                                    <div className="blockkXit--linear"></div>
                                    <div className="blockkXit--possibilities">
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
                            )
                        }else{
                            return(
                                <div className="blockk" key={el.id}>
                                    <div className="blockk--term">
                                        <h4>{el.term}</h4>
                                        <p>{el.visits}</p>
                                    </div>
                                    <h1>{el.price}</h1>
                                    <button className="blockk--btn">Купить</button>
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
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Aboniment;
