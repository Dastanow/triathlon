import { useEffect, useState } from 'react';
import './FAQ.scss';
import chevron from '../../Assets/solar_chevron-up.svg';
import { CustomTitle } from '@ui';
import { Container } from '@components';
import { useTranslation } from 'react-i18next';
import FaqForm from '@/UI/CustomForm/FaqForm/FaqForm';
import { axiosAPI } from '@/App';

const Faq = () => {
    const { t, i18n } = useTranslation();
    const [openIndexes, setOpenIndexes] = useState([]);
    const [faqData, setFaqData] = useState([]);

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
    
    useEffect(() => {
        fetchData();
    }, [i18n.language]);

    const handleToggle = (index) => {
        setOpenIndexes(prevIndexes => {
            const updatedIndexes = prevIndexes.map((item, ind) => {
                if (ind === index) {
                    return !item; 
                } else if (item && ind !== index) {
                    return false; 
                }
                return item;
            });
            return updatedIndexes;
        });
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
                                                transform: openIndexes[index]
                                                    ? 'rotate(180deg)'
                                                    : '',
                                                transition: '0.5s',
                                            }}
                                        />
                                    </div>
                                </div>

                                {openIndexes[index] && (
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
