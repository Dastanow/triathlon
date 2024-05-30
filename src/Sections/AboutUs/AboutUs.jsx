import './AboutUs.scss'
import { Container } from '@components'
import { CustomTitle, CustomButton } from '@ui'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { axiosAPI } from '@/App'

export const AboutUs = () => {
    const { t, i18n } = useTranslation()
    const [aboutUsapi, setAboutUsapi] = useState([])
    const FetchData = async () => {
        try {
            const { data } = await axiosAPI.get('about-us/')
            setAboutUsapi(data)
        } catch {
            console.log('Failed to fetch data')
        }
    }
    useEffect(() => {
        FetchData()
    }, [i18n.language])
    return (
        <section id="aboutUs" className="aboutUs">
            <Container classNames="aboutUsContainer">
                <CustomTitle title={t('aboutUs')} />
                {aboutUsapi?.map((item, id) => (
                    <div className="aboutUsWrapper" key={id}>
                        <div className="aboutUsImage">
                            <img src={item.image} alt="about us image" />
                        </div>
                        <div className="aboutUsContent">
                            <h3 className="aboutUsTitle">{item.title}</h3>
                            <div
                                className="aboutUsDescription"
                                dangerouslySetInnerHTML={{
                                    __html: item.desc,  
                                }}></div>
                            <a href="https://triathlon.kg" target="_blank">
                                <CustomButton type="primary">
                                    {t('buttonKR')}
                                </CustomButton>
                            </a>
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    )
}
