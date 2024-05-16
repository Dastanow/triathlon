import { useState } from 'react';
import PropTypes from 'prop-types';
import './Vacancies.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { CustomButton, CustomTitle } from '@ui';
import { Container } from '@components';
import { useTranslation } from 'react-i18next';
import CustomModal from '@/UI/CustomModal/CustomModal';

export const Vacancies = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [modalActive, setModalActive] = useState(false);
    const { t } = useTranslation();

    console.log(data);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleModalOpen = (index) => {
        setModalActive(true);
        setOpenIndex(index);
    };

    return (
        <section className="vacancies" id="vacancies">
            <Container classNames="vacanciesContainer">
                <CustomTitle title={'vacancies'} />
                <div className="vacanciesList">
                    {data?.map((vacancy, index) => (
                        <div className="vacanciesWrapper" key={index}>
                            <div
                                className={
                                    'vacanciesItem' +
                                    (openIndex === index
                                        ? ' vacanciesItem-opened'
                                        : '')
                                }>
                                <div
                                    className="vacanciesToggleField"
                                    onClick={() => handleToggle(index)}>
                                    <h5 className="vacanciesTitle">
                                        {vacancy.title}
                                    </h5>
                                    <span className="vacanciesArrow">
                                        <IoIosArrowDown
                                            className={
                                                openIndex === index
                                                    ? 'openArrow'
                                                    : 'closeArrow'
                                            }
                                        />
                                    </span>
                                </div>
                                <CustomButton
                                    className="vacanciesButton"
                                    type="primary"
                                    onClick={() => handleModalOpen(index)}>
                                    Отправить резюме
                                </CustomButton>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <CustomModal
                title={t('vacancy')}
                close={() => setModalActive(false)}
                isOpen={modalActive}
                type="vacancy"
            />
        </section>
    );
};

Vacancies.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Vacancies;
