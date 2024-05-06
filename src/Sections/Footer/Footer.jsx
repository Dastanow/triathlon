import './Footer.scss'
import Map from '@assets/map.svg'
import email from '@assets/email.svg'
import phone from '@assets/phone.svg'
import instagram from '@assets/instagram.svg'
import Logotip from '@assets/logo1.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const {t} = useTranslation()
    const nav = useNavigate()
    const VacanciesClick = () => {
        nav('vacancies')
        window.scrollTo(0, 0)
    }
    const DocumentServices = () => {
        window.open('http://209.38.228.54:83/media/files/%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80_%D0%B2%D0%BE%D0%B7%D0%BC%D0%B5%D0%B7%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D1%8F_%D1%83%D1%81%D0%BB%D1%83%D0%B3.pdf', '_blank')
    }
    const DocumentPolicy = () => {
        window.open('http://209.38.228.54:83/media/files/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf', '_blank')
    }
    const DocumentPayment = () => {
        window.open('http://209.38.228.54:83/media/files/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0_%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B_%D0%B8_%D0%B2%D0%BE%D0%B7%D0%B2%D1%80%D0%B0%D1%82%D0%B0.pdf', '_blank')
    }
    const [News, setNews] = useState(
        window.matchMedia('(max-width: 769px)').matches
    );
    useEffect(() => {
        window.addEventListener('resize', () => {
            setNews(window.matchMedia('(max-width:960px)').matches);
        }, [])
    })
    const blocks = [
        [
            'path1',
            'path2',
            'path3',
            'path4',
            'path5',
            'path6',
            'path7',
            'Новости',
        ],
        [
            'document',
            {onClick: DocumentPayment, text: 'documents'},
            {onClick: DocumentPolicy, text: 'documenttwo'},
            {onClick: DocumentServices, text: 'domumentthri'}
        ],
        [
            { onClick: VacanciesClick, text: 'vacancies' },
            'vacanciestwo',
            'vacanciesеthree',
        ],
        [
            'location',
            'locationtime',
            'locationtimetwo',
        ],
    ]
    return (
        <footer>
            <div className="footer__container">
                <div className="logo__container">
                    <div className="footer__Logotip">
                        <img src={Logotip} alt="img" />
                    </div>
                    <div className="footer__count">
                        <p className="location">
                            <span className="footer__mapp">
                                {' '}
                                <img src={Map} alt="img" />
                                Бишкек, ул.Фатьянова 10
                            </span>
                        </p>
                        <p className="location">
                            <img src={email} alt="img" />
                            triathloncenter.kg@gmail.com
                        </p>
                        <a
                            href="https://www.instagram.com/triathloncenter.kg/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                            target="_blank">
                            <p className="location">
                                <img src={instagram} alt="img" />
                                @triathloncenter.kg
                            </p>
                        </a>
                        <p className="locationfoun">
                            <img src={phone} alt="img" />
                        +996 997 000 180
                            <br />
                        +996 227 000 180
                      
                        </p>
                    </div>
                </div>
                <div className="footer__blocks">
                    {blocks.map((block, index) => (
                        <div className="footer__blok" key={index}>
                            {block.map((item, i) => {
                                if (typeof item === 'object') {
                                    return (
                                        <p key={i} onClick={item.onClick}>
                                            {t(item.text)}
                                        </p>
                                    )
                                } else {
                                    return <p key={i}>{t(item)}</p>
                                }
                            })}
                        </div>
                    ))}
                    {News && 
                    <a href="https://www.triathlon.kg/" target="_blank">
                        <p>Новости</p></a>
                    }
                </div>
            </div>
            <div className="footer__line"></div>
            <div className="footer__form">
                <h3>Made by GEEKS PRO</h3>
            </div>
        </footer>
    )
}
