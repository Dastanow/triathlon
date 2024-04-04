import './Location.scss';
import email from '../../Assets/emailSVG.svg';
import phone from '../../Assets/phoneSVG.svg';
import map from '../../Assets/mapSVG.svg';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';
import Map from '../../UI/Map/Map';

const Location = () => {
    return (
        <>
            <div className="Location" id="location">
                <CustomTitle title={'Как нас найти'}/>
                <div className="Location__container">
                    <div className="Location__contact">
                        <h3>Наши контакты</h3>
                        <p>
                            <img src={email} alt="img" />
              triathloncenter.kg@gmail.com
                        </p>
                        <p>
                            <img src={phone} alt="img" />
              +996 997 000 180
                        </p>
                        <p>
                            <img src={phone} alt="img" />
              +996 227 000 180
                        </p>
                        <p>
                            <img src={map} alt="img" />
              Бишкек,
                        </p>
                        <div>ул.Фатьянова 10</div>
                    </div>
                    <div className="Location__map">
                        <Map/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location;
