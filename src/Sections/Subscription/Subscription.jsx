import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import SubscriptionData from './SubscriptionData.json';
import { CustomTitle, CustomButton } from '@ui';
import ModalWindow from '../../Modules/ModalWindow';
import Requisites from './Requisites/Requisites';
import './Subscription.scss';
import { Container } from '@components';
import crown from '@assets/crown.svg';
import { useTranslation } from 'react-i18next';

export const Subscription = () => {
    const [modalActive, setModalActive] = useState(false);
    const { t } = useTranslation();
    return (
        <section className="subscription" id="subscription">
            <Container classNames="subscriptionContainer">
                <CustomTitle title={t('aboniment')} />
                <ul className="subscriptionList">
                    {SubscriptionData.map((subscription) => (
                        <li className={`subscriptionCard ${subscription.prime ? 'prime' : 'default'}`} key={subscription.id}>
                            <div className="subscriptionCardHeader">
                                <div className="subscriptionCardTitle">
                                    <h5>{subscription.term}</h5>
                                    <p>{subscription.visits}</p>
                                </div>
                                {subscription.prime && <span className="subscriptionCardHit">
                                    <h5>XIT</h5>
                                    <img src={crown} alt={subscription.visits} />
                                </span>}
                            </div>
                            <div className="subscriptionCardActions">
                                <h3>{subscription.price}</h3>
                                <CustomButton
                                    onClick={() => setModalActive(!modalActive)}
                                    type={subscription.prime ? 'secondary' : 'primary'}
                                >{t('buy')}</CustomButton>
                                <hr />
                            </div>
                            <ul className="subscriptionCardItems">
                                <li><FaCheck />{subscription.list.frost}</li>
                                <li><FaCheck />{subscription.list.workout}</li>
                                <li><FaCheck />{subscription.list.quest}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <Requisites />
            </ModalWindow>
        </section>
    );
};

// if (el.id == 2) {
//     return (
//         <div className="blockXits" key={subscription.id}>
//             <div className="blockXits--term">
//                 <div className="blockXits--term__time">
//                     <h4>{subscription.term}</h4>
//                     <p>{subscription.visits}</p>
//                 </div>
//                 <div className="blockXits--term__trend">
//                     <h6>Хит</h6>
//                     <img src={imageKing} alt="img" />
//                 </div>
//             </div>
//             <h2>{subscription.price}</h2>
//             <button
//                 onClick={() => setModalActive(true)}
//                 className="blockXits--btn"
//             >
//                 Купить
//             </button>
//             <div className="blockXits--linear"></div>
//             <div className="blockXits--possibilities">
//                 <p>
//                     <FaCheck /> <span>{subscription.frost}</span>
//                 </p>
//                 <p>
//                     <FaCheck /> <span>{subscription.workout}</span>
//                 </p>
//                 <p>
//                     <FaCheck /> <span>{subscription.guets}</span>
//                 </p>
//             </div>
//         </div>
//     );
// } else {
//     return (
//         <div className="blockTwo" key={el.id}>
//             <div className="blockTwo--term">
//                 <h4>{el.term}</h4>
//                 <p>{el.visits}</p>
//             </div>
//             <h2>{el.price}</h2>
//             <button
//                 onClick={() => setModalActive(true)}
//                 className="blockTwo--btn"
//             >
//                 Купить
//             </button>
//             <div className="blockTwo--linear"></div>
//             <div className="blockTwo--possibilities">
//                 <p>
//                     <FaCheck /> <span>{el.frost}</span>
//                 </p>
//                 <p>
//                     <FaCheck /> <span>{el.workout}</span>
//                 </p>
//                 <p>
//                     <FaCheck /> <span>{el.guets}</span>
//                 </p>
//             </div>
//         </div>
//     );
// }
