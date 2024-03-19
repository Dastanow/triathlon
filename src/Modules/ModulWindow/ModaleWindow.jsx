import { useState } from 'react';
import './ModaleWindow.scss';
import modalSvg from '../../Assets/modalka.svg';
import { IoMdCheckmark } from 'react-icons/io';
import dangerous from '../../Assets/dangerous.svg';

const ModaleWindow = ({ active, setActive }) => {
    const [user, setUser] = useState('');
    const [number, setNumber] = useState('');
    const [userApprov, setUserApprov] = useState(false);
    const [numberApprov, setNumberApprov] = useState(false);
    const [userError, setUserError] = useState('Введите ваше имя ');
    const [numberError, setNumberError] = useState('Введите телефон полностью');
    const [submitted, setSubmitted] = useState(false);
    const [showDangerIcon, setShowDangerIcon] = useState(false);
    const [showDangerIcon2, setShowDangerIcon2] = useState(false);
    const [checkState, setCheckState] = useState(false);

    const setCheck = (value) => {
        setCheckState(value);
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
        case 'user':
            setUserApprov(true);
            if (!user.trim()) {
                setShowDangerIcon(true);
                e.target.style.border = '1px solid #D64751';
                e.target.style.marginBottom = '10px';

                e.target.style.marginTop = '-5px';
            } else {
                e.target.style.border = '1px solid gray';
                e.target.style.marginBottom = '0px';
            }
            break;
        case 'number':
            setNumberApprov(true);
            if (!number.trim()) {
                setShowDangerIcon2(true);
                e.target.style.border = '1px solid #D64751';
            } else {
                e.target.style.border = '1px solid gray';
                e.target.style.marginTop = '0px';
                e.target.style.marginBottom = '0px';
            }
            break;
        }
    };
    const userHandler = (e) => {
        setUser(e.target.value);

        if (!e.target.value.trim()) {
            setUserError('Введите ваше имя');
        } else {
            setUserError('');
            if (!user.trim()) {
                setShowDangerIcon(false);
            }
        }
    };
    const numberHandler = (e) => {
        setNumber(e.target.value);

        if (!e.target.value.trim()) {
            setNumberError('Введите телефон полностью');
        } else {
            setNumberError('');
            if (!number.trim()) {
                setShowDangerIcon2(false);
            }
        }
    };

    return (
        <div>
            <div
                className={active ? 'modal active' : 'modal'}
                onClick={() => setActive(false)}
            >
                <div
                    className={active ? 'modal__content active' : 'modal__content'}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={modalSvg}
                        onClick={() => setActive(false)}
                        className="module--blockk__cross"
                        alt=""
                    />

                    <div className="form">
                        <h1 className="form--title">Оставить заявку </h1>
                        <div className="all-input">
                            <input
                                name="user"
                                value={user}
                                placeholder="Ваше имя*"
                                className={'form--inp'}
                                type="text"
                                onBlur={(e) => blurHandler(e)}
                                onChange={(e) => userHandler(e)}/>
                            {showDangerIcon && (
                                <div className="danger">
                                    <img className="svg" title="svg" src={dangerous} alt="" />
                                </div>
                            )}

                            {userApprov && userError && (
                                <div className="error">{userError}</div>
                            )}

                            <input
                                name="number"
                                value={number}
                                placeholder="+996(___)___-___"
                                type="text"
                                className={'form--inp'}
                                onBlur={(e) => blurHandler(e)}
                                onChange={(e) => numberHandler(e)}/>
                            {showDangerIcon2 && (
                                <div className="danger">
                                    <img className="svg-two" title="svg" src={dangerous} alt="" />
                                </div>
                            )}
                            {numberApprov && numberError && (
                                <div className="error-two">{numberError}</div>
                            )}
                            <input
                                placeholder="Напишите Ваш вопрос"
                                className={'form--secondI'}/>
                        </div>
                        <button
                            onClick={() => {
                                setCheck(true);
                                setActive(false);
                                setSubmitted(true);
                            }}
                            className="form--btn">
              Отправить
                        </button>
                        <div className="module--blockk__content--checkboxs">
                            <label className="box">
                                <input type="checkbox" className="box--in" />
                                <h4 className="check">Получить консультацию</h4>
                            </label>
                            <label className="box">
                                <input type="checkbox" className="box--in" />
                                <h4 className="check">Узнать прайс</h4>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={checkState ? 'modal activee' : 'modale'}
                onClick={() => {
                    setCheck(false);
                    setSubmitted(false);
                }}>
                <div className="modale--w" onClick={(e) => e.stopPropagation()}>
                    <div
                        style={{ display: submitted ? 'flex' : 'none' }}
                        className="moduletrue">
                        <div> </div>
                        <img
                            src={modalSvg}
                            onClick={() => {
                                setCheck(false);
                                setSubmitted(false);
                            }}
                            className="module--blockk__crosser"
                            alt="img"/>
                        <div className="moduletrue--check">
                            <IoMdCheckmark />
                        </div>
                        <h1>
              Спасибо, ваша заявка отправлена! Мы свяжемся с вами и ответим на
              ваши вопросы.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModaleWindow;
