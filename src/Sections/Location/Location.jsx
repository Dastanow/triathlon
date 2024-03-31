import './style.scss';
import email from '../../Assets/emailSVG.svg';
import phone from '../../Assets/phoneSVG.svg';
import map from '../../Assets/mapSVG.svg';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';

const Location = () => {
    return (
        <>
            <div className="Location">
                <CustomTitle title={"Как нас найти"}/>
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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6023572249405!2d74.60310637543009!3d42.86012880336322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb632b000a38b%3A0xae646f5966b1033e!2zMTAg0KTQsNGC0YzRj9C90L7QstCwLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1709061562312!5m2!1sru!2skg"
                            width="1208"
                            height="752`"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location;
