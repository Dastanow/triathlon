import './style.scss'
import { RxCross1 } from 'react-icons/rx';
import { IoMdCheckmark } from 'react-icons/io';
import { useState } from 'react';
import Input from '../../UI/CustomInput/CustomInput';

const Modale = () => {
    const [check,setCheck] = useState(false)
    const [modal,setModal] = useState(true)
    return(
        <div id="module">
            <div style={{display: modal ? 'flex' : 'none'}} className="module">
                <div className="module--blockk">
                    <div onClick={() => setModal(false)} className="module--blockk__cross">
                        <RxCross1/>
                    </div>
                    <div className="module--blockk__content">
                        <div className="module--blockk__content--name">
                            <h3>Имя*</h3>

                            <Input 
                            className={"name"}
                            />

                        </div>
                        <div className="module--blockk__content--lastName">
                            <h3>Фамилия*</h3>
                            <Input 
                            
                            className={"lastName"}
                            />
                        </div>
                        <div className="module--blockk__content--phone">
                            <h3>Номер телефона*</h3>
                            <Input 
                            placeholder="+996"
                            className={"phone"}
                            />
                        </div>
                        <button onClick={() => {
                            setCheck(true)
                            setModal(false)
                        }}>Оставить заявку</button>
                        <div className="module--blockk__content--checkboxs">
                            <label>
                                <input type="checkbox" />
                                <h4>Связаться с администратором</h4>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <h4>Получить консультацию</h4>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <h4>Узнать прайс</h4>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="modaltrue">
                
            </div>
            <div style={{display: check ? 'flex' : 'none',}} className="moduletrue">
                <div onClick={() => setCheck(false)} className="moduletrue--cross">
                    <RxCross1/>
                </div>
                <div className="moduletrue--check">
                    <IoMdCheckmark/>
                </div>
                <h1>Спасибо, ваша заявка отправлена! Мы свяжемся с вами и ответим на ваши вопросы.</h1>
            </div>
        </div>
    )
}

export default Modale