import './VacancyModule.scss';
import { useState } from 'react';
import modalSvg from '../../Assets/modalka.svg';
import dangerous from '../../Assets/dangerous.svg';

const VacancyModule = ({ active, setActive }) => {
    const [user, setUser] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [userApprov, setUserApprov] = useState(false);
    const [numberApprov, setNumberApprov] = useState(false);
    const [emailApprov, setEmailApprov] = useState(false);
    const [userError, setUserError] = useState('Введите имя ');
    const [numberError, setNumberError] = useState('Введите телефон полностью');
    const [emailError, setEmailError] = useState('Введите Email ');
    const [showDangerIcon, setShowDangerIcon] = useState(false);
    const [showDangerIcon2, setShowDangerIcon2] = useState(false);
    const [showDangerIcon3, setShowDangerIcon3] = useState(false);

    const blurHandler = (e) => {
        switch (e.target.name) {
        case 'user':
            setUserApprov(true);
            if (!user.trim()) {
                setShowDangerIcon(true);
                e.target.style.border = '1px solid #D64751';
            } else {
                e.target.style.border = '1px solid gray';
                e.target.style.marginBottom = '0px';
            }
            break;

        case 'email':
            setEmailApprov(true);
            if (!email.trim()) {
                setShowDangerIcon2(true);
                e.target.style.border = '1px solid #D64751';
            } else {
                e.target.style.border = '1px solid gray';
            }
            break;

        case 'number':
            setNumberApprov(true);
            if (!number.trim()) {
                setShowDangerIcon3(true);
                e.target.style.border = '1px solid #D64751';
            } else {
                e.target.style.border = '1px solid gray';
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
    const emailHandler = (e) => {
        setEmail(e.target.value);

        if (!e.target.value.trim()) {
            setEmailError('Введите ваше имя');
        } else {
            setEmailError('');
            if (!email.trim()) {
                setShowDangerIcon2(false);
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
                setShowDangerIcon3(false);
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
                        <h2 className="form-title">Откликнуться на вакансию </h2>

                        <div className="all-inputs">
                            <input
                                name="user"
                                value={user}
                                placeholder="Имя, Фамилия*"
                                className={'form-inp'}
                                type="text"
                                onBlur={(e) => blurHandler(e)}
                                onChange={(e) => userHandler(e)}
                            />

                            {showDangerIcon && (
                                <div className="danger">
                                    <img className="user-svg" src={dangerous} alt="" />
                                </div>
                            )}

                            {userApprov && userError && (
                                <div className="user">{userError}</div>
                            )}

                            <div className="all">
                                <input
                                    name="email"
                                    value={email}
                                    type="text"
                                    onBlur={(e) => blurHandler(e)}
                                    onChange={(e) => emailHandler(e)}
                                    placeholder="Email*"
                                    className={'form-secondI'}
                                />
                                {showDangerIcon2 && (
                                    <div className="danger">
                                        <img className="email_svg" src={dangerous} alt="" />
                                    </div>
                                )}

                                {emailApprov && emailError && (
                                    <div className="email">{emailError}</div>
                                )}

                                <input
                                    name="number"
                                    value={number}
                                    placeholder="+996 (___) ___-___"
                                    type="text"
                                    className={'form-secondI'}
                                    onBlur={(e) => blurHandler(e)}
                                    onChange={(e) => numberHandler(e)}
                                />

                                {showDangerIcon3 && (
                                    <div className="danger">
                                        <img className="number_svg" src={dangerous} alt="" />
                                    </div>
                                )}

                                {numberApprov && numberError && (
                                    <div className="number">{numberError}</div>
                                )}
                            </div>
                        </div>

                        <div className="file">
                            <h5 className="file__attach">Прикрепить файл</h5>
                            <h6 className="file__drop">
                Перетащите файл сюда или{' '}
                                <span className="file__ins">загрузите файл,</span>
                            </h6>

                            <div className="warning">
                                <div className="warning-titles">
                  Размер файла не должен превышать 10 Мб{' '}
                                </div>
                                <div className="warning-titles">
                  Поддерживаемый формат файлов: pdf, doc, docx
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                // setCheck(true);
                                // setActive(false);
                                // setSubmitted(true);
                            }}
                            className="form-btn"
                        >
              Отправить
                        </button>

                        <div className="module--blockk__content--checkboxs">
                            <label className="box">
                                <input type="checkbox" className="oneOp" />
                                <h4 className="checks">
                  Я согласен с публичным{' '}
                                    <a className="link" href="">
                    договором-офертой
                                    </a>{' '}
                  и{' '}
                                    <a className="link" href="">
                    политикой
                                    </a>
                                    <a className="link-ed" href="">
                                        {' '}
                    обработки персональных данных
                                    </a>
                                </h4>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VacancyModule;
