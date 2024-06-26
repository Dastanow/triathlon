import { useEffect, useState } from 'react'
import './FAQ.scss'
import chevron from '@assets/solar_chevron-up.svg'
import { CustomTitle } from '@ui'
import { Container } from '@components'
import { useTranslation } from 'react-i18next'
import Form from '@/UI/Form/Form'
import { axiosAPI } from '@/App'

const Faq = () => {
    const { t, i18n } = useTranslation()
    const [openIndex, setOpenIndex] = useState(null)
    const [faqData, setFaqData] = useState([])

    const fetchData = async () => {
        try {
            const { data } = await axiosAPI.get('faq')
            const formattedData = data.map((item) => ({
                title: item.question,
                answer: item.answer,
            }))
            setFaqData(formattedData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [i18n.language])

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <section className="faq" id="faq">
            <Container classNames="faqContainer">
                <CustomTitle title={t('faq')} />
                <div className="faqWrapper">
                    <div className="faqSelects">
                        {faqData.map((item, index) => (
                            <div
                                onClick={() => handleToggle(index)}
                                className="faqQuestions"
                                key={index}>
                                <div className="faqBox">
                                    <div
                                        className="faqTitles"
                                        dangerouslySetInnerHTML={{
                                            __html: item.title,
                                        }}></div>
                                    <div className="faqArrow">
                                        <img
                                            src={chevron}
                                            alt="img"
                                            style={{
                                                transform:
                                                    openIndex === index
                                                        ? 'rotate(180deg)'
                                                        : '',
                                                transition: '0.5s',
                                            }}
                                        />
                                    </div>
                                </div>

                                {openIndex === index && (
                                    <div
                                        className="answer opened additionalStyling"
                                        dangerouslySetInnerHTML={{
                                            __html: item.answer,
                                        }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="faqForm">
                        <label className="form-faq__title">
                            {t('remains')}
                        </label>
                        <p className="form-faq__text">{t('answer')}</p>
                        <Form type="default" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Faq
