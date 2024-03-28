import { useState } from 'react';
import './style.scss';
import modalSvg from '../../Assets/modalka.svg';
import { IoMdCheckmark } from 'react-icons/io';
import dangerous from '../../Assets/dangerous.svg';

const ApplicationForm = () => {

    const [formInfo, setFormInfo] = useState({
        user: '',
        number: '',
        userApprov: false,
        numberApprov: false,
        userError: 'Введите ваше имя',
        numberError: 'Введите телефон полностью',
        showDangerIcon: false,
        showDangerIcon2: false,
        checkState: false,
    });

    const { user, number, userApprov, numberApprov, userError,
        numberError, showDangerIcon, showDangerIcon2 } = formInfo;

    const blurHandler = (e) => {
        const fieldTitle = e.target.name;
        setFormInfo({
            ...formInfo,
            [`${fieldTitle}Approv`]: true,
            showDangerIcon: !formInfo.user.trim(),
            showDangerIcon2: !formInfo.number.trim(),
        });
        if (!formInfo[fieldTitle].trim()) {
            e.target.style.border = '1px solid #D64751';
        } else {
            e.target.style.border = '1px solid gray';
        }
    };

    const inputChangeHandler = (e) => {
        const fieldTitle = e.target.name;
        const value = e.target.value;

        setFormInfo({
            ...formInfo,
            [fieldTitle]: value,
            [`${fieldTitle}Error`]: value.trim() ? '' : `Введите ${fieldTitle === 'user' ? 'ваше имя' : 'телефон полностью'}`,
            [fieldTitle === 'user' ? 'showDangerIcon' : 'showDangerIcon2']: false,
        });
    };

    return (
        <div>
            <form className="formApp"
                onSubmit={(e)=>{e.preventDefault()}}
            >
                
                <h3 className="formApp--title">Оставить заявку </h3>
                <div className="all-input">
                    <input
                        name="user"
                        value={user}
                        placeholder="Ваше имя*"
                        className={'formApp--input'}
                        type="text"
                        onBlur={(e) => blurHandler(e)}
                        onChange={inputChangeHandler}/>
                    {showDangerIcon && (
                        <div className="danger">
                            <img className="svg" src={dangerous} alt="" />
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
                        className={'formApp--input'}
                        onBlur={(e) => blurHandler(e)}
                        onChange={inputChangeHandler}/>
                    {showDangerIcon2 && (
                        <div className="danger">
                            <img className="svg-two" src={dangerous} alt="" />
                        </div>
                    )}
                    {numberApprov && numberError && (
                        <div className="error-two">{numberError}</div>
                    )}
                    <input
                        placeholder="Напишите Ваш вопрос"
                        className={'formApp--secondInput'}/>
                </div>
                <button
                           
                    className="formApp--btn">
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
            </form>
            {/* <div
             className={checkState ? 'modal active' : 'modale'}
             onClick={() => {
                 setCheck(false);
                 setFormData({ ...formData, submitted: false });
                }}>
                <div className="modale--content" onClick={(e) => e.stopPropagation()}>
                    <div
                        style={{ display: 'flex' }}
                        className="modaletrue">
            
                        <img
                            src={modalSvg}
                            onClick={() => {
                                setCheck(false);
                              
                            }}
                            className="modale--blockk__crosser"
                            alt="img"/>
                        <div className="modaletrue--check">
                            <IoMdCheckmark />
                        </div>
                        <h1>
                         Спасибо, ваша заявка отправлена! Мы свяжемся с вами и ответим на
                           ваши вопросы.
                        </h1>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ApplicationForm;
