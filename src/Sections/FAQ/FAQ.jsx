import React, { useEffect, useState } from 'react';
import './FAQ.scss';
import chevron from '../../Assets/solar_chevron-up.svg';
import { CustomTitle } from '@ui';
import { Container } from '@components';
import { useTranslation } from 'react-i18next';
import FaqForm from '@/UI/CustomForm/FaqForm/FaqForm';
import { axiosAPI } from '@/App';

const Faq = () => {
    const { t, i18n } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const [faqData, setFaqData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosAPI.get('faq');
                const formattedData = data.map(item => ({
                    title: item.question,
                    answer: item.answer
                }));
                setFaqData(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [i18n.language]);

    const handleToggle = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index)); 
    };
    
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
                            key={index}
                        >
                            <div className="faqBox">
                                <h4 className="faqTitles">
                                    {item.title}
                                </h4>
                                <div className="faqArrow">
                                    <img
                                        src={chevron}
                                        alt="img"
                                        style={{
                                            transform: openIndex === index 
                                                ? 'rotate(180deg)'
                                                : '',
                                            transition: '0.5s',
                                        }}
                                    />
                                </div>
                            </div>

                            {openIndex === index && ( 
                                <p className="answer opened">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="faqForm">
                    <FaqForm />
                </div>
            </div>
        </Container>
    </section>
    );
};

export default Faq;
