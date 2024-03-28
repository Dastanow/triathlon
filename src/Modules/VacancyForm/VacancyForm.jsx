import './style.scss';
import { useState } from 'react';
import dangerous from '../../Assets/dangerous.svg';

const VacancyForm = () => {
 
    const [formData, setFormData] = useState({
        user: '',
        number: '',
        email: '',
        userApprov: false,
        numberApprov: false,
        emailApprov: false,
        userError: 'Введите ваше имя',
        numberError: 'Введите телефон полностью',
        emailError: 'Введите Email',
        showDangerIcon: false,
        showDangerIcon2: false,
        showDangerIcon3: false,
    });

    const { user, email, number, userApprov, emailApprov, numberApprov,userError,
        emailError, numberError, showDangerIcon, showDangerIcon2,
        showDangerIcon3, } = formData;


    const blurHandler = (e) => {
        const fieldName = e.target.name;
        setFormData({
            ...formData,
            [`${fieldName}Approv`]: true,
            showDangerIcon: !formData.user.trim(),
            showDangerIcon2: !formData.email.trim(),
            showDangerIcon3: !formData.number.trim(),
        });
        if (!formData[fieldName].trim()) {
            e.target.style.border = '1px solid #D64751';
        } else {
            e.target.style.border = '1px solid gray';
        }
    };

    const inputHandler = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [fieldName]: value,
            [`${fieldName}Error`]: value.trim() ? '' : `Введите ${fieldName === 'user' ? 'ваше имя' || 'Email' : 'телефон полностью'}`,
            [fieldName === 'user' ? 'showDangerIcon' : 'showDangerIcon2']: false,
            // [fieldName === 'email' ? 'showDangerIcon2' : (fieldName === 'user' ? 'showDangerIcon' : 'showDangerIcon3')]: false,
            // [`${fieldName}Approv`]: true,
            // [fieldName === 'user' ? 'showDangerIcon' : (fieldName === 'email' ? 'showDangerIcon2' : 'showDangerIcon3')]: !value.trim(),
        });
    };

    return (
        <div>
            
            <form className="form"
                onSubmit={(e)=>{e.preventDefault()}}
            >
                <label className="form--title">Откликнуться на вакансию </label>
                <div className="all-inputs">
                    <input
                        name="user"
                        value={user}
                        placeholder="Имя, Фамилия*"
                        className={'form-input'}
                        type="text"
                        onBlur={(e) => blurHandler(e)}
                        onChange={inputHandler}
                    />

                    {showDangerIcon && (
                        <div className="danger">
                            <img className="user-svg" src={dangerous} alt="" />
                        </div>
                    )}

                    {userApprov &&  (
                        <div className="user">{userError}</div>
                    )}

                    <div className="all">
                        <input
                            name="email"
                            value={email}
                            type="text"
                            onBlur={(e) => blurHandler(e)}
                            onChange={inputHandler}
                            placeholder="Email*"
                            className={'form-secondInput'}
                        />
                        {showDangerIcon2.email  && (
                            <div className="danger">
                                <img className="email_svg" src={dangerous} alt="" />
                            </div>
                        )}
                        { emailApprov &&  (
                            <div className="email">{emailError}</div>
                        )}
                        <input
                            name="number"
                            value={number}
                            placeholder="+996 (___) ___-___"
                            type="text"
                            className={'form-secondInput'}
                            onBlur={(e) => blurHandler(e)}
                            onChange={inputHandler}
                        />
                        {showDangerIcon3 && (
                            <div className="danger">
                                <img className="number_svg" src={dangerous} alt="" />
                            </div>
                        )}
                        {numberApprov &&  (
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
            </form>
        </div>
            
    );
};

export default VacancyForm;
