import PropTypes from 'prop-types';
import './Requisites.scss';
import closeIcon from '@assets/close.svg';
import LogoBlue from '@assets/logoBlue.svg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { axiosAPI } from '@/App';

const Requisites = ({ isOpen, close, className = '' }) => {
    const { i18n } = useTranslation();
    const [data, setData] = useState();

    const fetchSubscription = async () => {
        try {
            const response = await axiosAPI.get('/payment/');
            setData(response.data);
        } catch (e) {
            console.error('Error fetching data from payment:', e);
        }
    };

    useEffect(() => {
        fetchSubscription();
    }, [i18n.language]);

    return (
        <div className={`requisModalOverlay ${isOpen ? '' : 'closeRequisModal'}`} onClick={close}>
            <div className={`requisModalInner ${className}`} onClick={(e) => e.stopPropagation()}>
                <div className="requisModalHeader">
                    <img src={LogoBlue} alt="Logo" />
                    <button className="requisModalCloseBtn" onClick={close}>
                        <img src={closeIcon} alt="close" />
                    </button>
                </div>
                <div className="requisModalBody">
                    <h5>TRIATHLON CENTER</h5>
                    {data?.map(content => (
                        <div dangerouslySetInnerHTML={{ __html: content.disc }} key={content.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};


Requisites.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default Requisites;
