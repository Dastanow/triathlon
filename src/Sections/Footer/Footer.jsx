import './Footer.scss'
import { Container } from '@components';
import linkData from './Footer.data.json';
import { Link } from 'react-router-dom';
import LogoSVG from '@assets/TriathlonSVGLogo.svg';
import Map from '@assets/map.svg';
import Email from '@assets/email.svg';
import Instagram from '@assets/instagram.svg';
import Phone from '@assets/phone.svg';

export const Footer = () => {

    return (
        <footer className="footer">
            <Container classNames="footerContainer">
                <div className="footerInform">
                    <div className="footerInformContent">
                        <img src={LogoSVG} className="footerLogo" alt="Logo" />
                        <ul className="footerList">
                            <li className="footerContact">
                                <img src={Map} alt="map" />
                                <a className="footerLabel" href="triathloncenter.kg@gmail.com" target="_blank">Бишкек, ул.Фатьянова 10</a>
                            </li>
                            <li className="footerContact">
                                <img src={Email} alt="email" />
                                <a className="footerLabel">triathloncenter.kg@gmail.com</a>
                            </li>
                            <li className="footerContact">
                                <img src={Instagram} alt="instagram" />
                                <a className="footerLabel" href="https://www.instagram.com/triathloncenter.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">@triathloncenter.kg</a>
                            </li>
                            <li className="footerContact">
                                <img src={Phone} alt="Contact" />
                                <a className="footerLabel" >
                                    <p>+996 997 000 180</p>
                                    <p>+996 227 000 180</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {linkData.map((link, index) => (
                        <ul className="footerContent" key={index}>
                            <li key={index} className="">
                                {link[0].src ? (
                                    <Link to={link[0].src} target="_self">
                                        <b>
                                            {link[0].title}
                                        </b>
                                    </Link> 
                                ) : (
                                    <p>
                                        <b>
                                            {link[0].title}
                                        </b>
                                    </p>
                                )}
                            </li>
                            {link.slice(1).map(item => (
                                <li key={item.id}>
                                    {item.src ? (
                                        <a href={item.src}>
                                            {item.title}
                                        </a> 
                                    ) : (
                                        <p>
                                            {item.title}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="footerBottom">
                    <a href="">Made by GEEKS PRO</a>
                </div>
            </Container>
        </footer>
    )
}
