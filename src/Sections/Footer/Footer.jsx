import { useEffect, useRef, useState } from 'react'
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
    const [contactsOpen, setContactsOpen] = useState(false)
    const [phoneNumbers, setPhoneNumbers] = useState([])
    const [mobile, setMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches,
    )
    const ref = useRef(null)
    const handleContactsClick = () => {
        setContactsOpen((prev) => !prev)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setContactsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const fetchData = async (endpoint) => {
        try {
            const { data } = await axiosAPI.get('contacts')
            const response = await axiosAPI.get(`${endpoint}`)
            setPhoneNumbers(data)
            return { [endpoint]: response.data }
        } catch (error) {
            console.error(`Error fetching data from ${endpoint}:`, error)
            return { [endpoint]: null }
        }
    }

    const fetchAllData = async (endpoints) => {
        try {
            const requests = endpoints.map((endpoint) => fetchData(endpoint))
            const responses = await Promise.all(requests)
            const responseData = Object.assign({}, ...responses)
            setAllData(responseData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }
    const endpoints = ['schedule', 'file', 'vacancy']

    useEffect(() => {
        if (!mobile) {
            setContactsOpen(false)
        }
    }, [mobile])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(window.matchMedia('(max-width: 768px)').matches)
        })
    }, [])

    useEffect(() => {
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
                            {!mobile ? (
                                <li className="footerContact">
                                    <img src={Phone} alt="Contact" />
                                    <div className="footerLabel">
                                        <a
                                            href={`tel: ${phoneNumbers[0]?.first_number}`}>
                                            {phoneNumbers[0]?.first_number}
                                        </a>
                                        <a
                                            href={`tel: ${phoneNumbers[0]?.second_number}`}>
                                            {phoneNumbers[0]?.second_number}
                                        </a>
                                    </div>
                                </li>
                            ) : (
                                <div
                                    ref={ref}
                                    className="contacts_mobile"
                                    onClick={
                                        contactsOpen
                                            ? () => setContactsOpen(false)
                                            : () => setContactsOpen(true)
                                    }>
                                    <img src={Phone} alt="Contact" />
                                    <div
                                        className={
                                            contactsOpen
                                                ? 'contactsShow active'
                                                : 'contactsShow'
                                        }>
                                        <a
                                            onClick={handleContactsClick}
                                            href={`tel: ${phoneNumbers[0]?.first_number}`}>
                                            {phoneNumbers[0]?.first_number}
                                        </a>
                                        <a
                                            onClick={handleContactsClick}
                                            href={`tel: ${phoneNumbers[0]?.second_number}`}>
                                            {phoneNumbers[0]?.second_number}
                                        </a>
                                    </div>
                                </div>
                            )}
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
                                <b>{t('document')}</b>
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
                    <a href="https://geeks.kg/geeks-pro" target="_blank">
                        Made by GEEKS PRO
                    </a>
                </div>
            </Container>
        </footer>
    )
}
