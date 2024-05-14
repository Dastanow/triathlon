import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '@components'
import { axiosAPI } from '@/App'
import { navigatePath } from '../Header/Header'

import LogoSVG from '@assets/TriathlonCenterLogo.png'
import Map from '@assets/map.svg'
import Email from '@assets/email.svg'
import Instagram from '@assets/instagram.svg'
import Phone from '@assets/phone.svg'
import './Footer.scss'

export const Footer = () => {
    const { t, i18n } = useTranslation()
    const [allData, setAllData] = useState([])

    const fetchData = async (endpoint) => {
        try {
            const response = await axiosAPI.get(`/${endpoint}`)
            console.log(`Data fetched from ${endpoint}:`, response.data)
            return { [endpoint]: response.data }
        } catch (error) {
            console.error(`Error fetching data from ${endpoint}:`, error)
            return { [endpoint]: null }
        }
    }

    useEffect(() => {
        const fetchAllData = async (endpoints) => {
            try {
                const requests = endpoints.map((endpoint) =>
                    fetchData(endpoint),
                )
                const responses = await Promise.all(requests)
                const responseData = Object.assign({}, ...responses)
                setAllData(responseData)

                console.log('All data fetched:', responseData)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        const endpoints = ['schedule', 'file', 'vacancy']
        fetchAllData(endpoints)
    }, [i18n.language])

    return (
        <footer className="footer">
            <Container classNames="footerContainer">
                <div className="footerInform">
                    <div className="footerInformContent">
                        <Link to="/">
                            <img
                                src={LogoSVG}
                                className="footerLogo"
                                alt="Logo"
                            />
                        </Link>
                        <ul className="footerList">
                            <li className="footerContact">
                                <a
                                    href="https://www.google.com/maps/place/10+%D0%A4%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D0%B0,+Bishkek/@42.8600908,74.6056157,20.67z/data=!4m5!3m4!1s0x389eb632b000a38b:0xae646f5966b1033e!8m2!3d42.8601249!4d74.6056813?entry=ttu"
                                    target="_blank">
                                    <img src={Map} alt="map" />
                                </a>
                                <a
                                    className="footerLabel"
                                    href="https://www.google.com/maps/place/10+%D0%A4%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D0%B0,+Bishkek/@42.8600908,74.6056157,20.67z/data=!4m5!3m4!1s0x389eb632b000a38b:0xae646f5966b1033e!8m2!3d42.8601249!4d74.6056813?entry=ttu"
                                    target="_blank">
                                    Бишкек, ул.Фатьянова 10
                                </a>
                            </li>
                            <li className="footerContact">
                                <a
                                    href="mailto:triathloncenter.kg@gmail.com"
                                    target="_blank">
                                    <img src={Email} alt="email" />
                                </a>
                                <a
                                    className="footerLabel"
                                    target="_blank"
                                    href="mailto:triathloncenter.kg@gmail.com">
                                    triathloncenter.kg@gmail.com
                                </a>
                            </li>
                            <li className="footerContact">
                                <a
                                    href="https://www.instagram.com/triathloncenter.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    target="_blank">
                                    <img src={Instagram} alt="instagram" />
                                </a>
                                <a
                                    className="footerLabel"
                                    href="https://www.instagram.com/triathloncenter.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                    target="_blank">
                                    @triathloncenter.kg
                                </a>
                            </li>
                            <li className="footerContact">
                                <a href="tel:+996997000180" target="_blank">
                                    <img src={Phone} alt="Contact" />
                                </a>
                                <a className="footerLabel">
                                    <p>+996 997 000 180</p>
                                    <p>+996 227 000 180</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="footerContent">
                        {navigatePath.map((path, index) => (
                            <li key={index}>
                                {index === 0 ? (
                                    <Link to="/">
                                        <b>{t(path.text)}</b>
                                    </Link>
                                ) : (
                                    <>
                                        {path.id === '/schedule' ? (
                                            <Link target="_blank" to={path.id}>
                                                {t(path.text)}
                                            </Link>
                                        ) : (
                                            <a href={path.id}>{t(path.text)}</a>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    <ul className="footerContent">
                        <li>
                            <p>
                                <b>{t('documents')}</b>
                            </p>
                        </li>
                        {allData.file?.map((item) => (
                            <li key={item.file}>
                                <a href={item.file} target="_blank" download>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="footerContent">
                        <li>
                            <Link to="/vacancies">
                                <b>{t('vacancies')}</b>
                            </Link>
                        </li>
                        {allData.vacancy?.map((item, id) => (
                            <li key={id}>
                                <Link to="/vacancies">{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="footerContent">
                        <li>
                            <p>
                                <b>{t('location')}</b>
                            </p>
                        </li>
                        {allData.schedule?.map((item, id) => (
                            <li key={id}>
                                <p>{item.holiday_work_time}</p>
                                <p>{item.work_time}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footerBottom">
                    <a href="" target="_blank">
                        Made by GEEKS PRO
                    </a>
                </div>
            </Container>
        </footer>
    )
}
