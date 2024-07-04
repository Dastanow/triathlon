import './Location.scss'
import email from '@assets/emailSVG.svg'
import phone from '@assets/phoneSVG.svg'
import map from '@assets/mapSVG.svg'
import { CustomTitle } from '@ui'
import { Container } from '@components'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import locationapiSer from '@/Services/locationService'

const Location = () => {
    const [locationapi, setLocationapi] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            locationapiSer.get().then((data) => setLocationapi(data))
        }
        fetchData()
    }, [])
    const { t } = useTranslation()
    return (
        <section className="location" id="location_block">
            <div id="location"></div>
            <Container classNames="locationContainer">
                <CustomTitle title={t('Location')} />
                <div className="locationWrapper">
                    <div className="locationContent">
                        <h3 className="locationTitle">{t('locationtitle')}</h3>
                        <ul className="locationList">
                            {locationapi?.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <li className="locationItem">
                                            <img src={email} alt="img" />
                                            <a href={`mailto:${item.email}`}>
                                                {item.email}
                                            </a>
                                        </li>
                                        <li className="locationItem">
                                            <img src={phone} alt="img" />
                                            <a
                                                href={`tel:${item.second_number}`}>
                                                {item.second_number}
                                            </a>
                                        </li>
                                        <li className="locationItem">
                                            <img src={phone} alt="img" />
                                            <a
                                                href={`tel:${item.first_number}`}>
                                                {item.first_number}
                                            </a>
                                        </li>
                                        <li className="locationItemMap">
                                            <img src={map} alt="img" />
                                            <a
                                                href={'https://maps.app.goo.gl/3htpkr3kmm9iKEmy6'}
                                                target="_blank">
                                                {item.address}
                                            </a>
                                        </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <iframe
                        className="locationMap"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.6025421147824!2d74.6056813!3d42.860124899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb632ee137ac7%3A0x61bc5b88bfb79375!2z0KjQutC-0LvQsCDihJY2OSDQuNC8LiDQoi7QodCw0YLRi9C70LPQsNC90L7QstCw!5e0!3m2!1sru!2skg!4v1714566439840!5m2!1sru!2skg"
                    />
                </div>
            </Container>
        </section>
    )
}

export default Location
