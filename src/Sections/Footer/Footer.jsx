import db from './db.json'
import './style.scss'
import Map from '../../Assets/map.svg'
import email from '../../Assets/email.svg'
import phone from '../../Assets/phone.svg'
import instagram from '../../Assets/instagram.svg'
import Logotip from '../../Assets/logo1.png'





const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer">
                    <div className="logo__container">
                        <div>
                            <img src={Logotip} alt="img" />
                        </div>

                        <h3>
                            <img src={Map} alt="img" />
              Бишкек, ул.Фатьянова 10
                        </h3>

                        <h3>
                            <img src={email} alt="img" />
              triathloncenter.kg@gmail.com
                        </h3>
                        <a href="https://www.instagram.com/triathloncenter.kg/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                            <h3>
                                <img src={instagram} alt="img" />
                @triathloncenter.kg
                            </h3>
                        </a>
                        <h3>
                            <img src={phone} alt="img" />
              +996 997 000 180
                        </h3>
                        <h3>
              +996 227 000 180
                        </h3>
                    </div>

                    <div>
                        {db?.first?.map((item) => (
                            <>
                                <div>
                                    <h2>{item.title1}</h2>
                                    <h3> {item.title}</h3>
                                </div>
                            </>
                        ))}
                    </div>
                    <div>
                        {db?.second?.map((item) => (
                            <>
                                <div>
                                    <h2>{item.title1}</h2>
                                    <h3> {item.title}</h3>
                                </div>
                            </>
                        ))}
                    </div>
                    <div>
                        {db?.third?.map((item) => (
                            <>
                                <div>
                                    <h2>{item.title1}</h2>
                                    <h3>{item.title}</h3>
                                </div>
                            </>
                        ))}
                        <h3 className="Geeks">Made by GEEKS PRO</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
