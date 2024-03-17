import { useState } from 'react'
import './ModaleWindow.scss'
import modalSvg from '../../Assets/modalka.svg'
import { IoMdCheckmark } from 'react-icons/io'

const ModaleWindow = ({active, setActive}) => {

    const [user, setUser]= useState('')
    const [number, setNumber]= useState('')
    const [userApprov, setUserApprov]= useState(false)
    const [numberApprov, setNumberApprov]= useState(false)
    const [userError, setUserError]= useState("Введите ваше имя ")
    const [numberError, setNumberError]= useState("Введите телефон полностью")
    const [check,setCheck] = useState(false)
    const [submitted, setSubmitted] = useState(false);

    const blurHandler = (e) =>{
        switch (e.target.name) {
            case 'user' :
                setUserApprov(true)
                
                break
            case 'number' :
                setNumberApprov(true)
                
                break
        }
    }
    

    
    

    const userHandler = (e) =>{
        setUser(e.target.value )

            if(!e.target.value.trim()){
                setUserError("Введите ваше имя")
                e.target.style.border = '1px solid #D64751';
            }
          
            
         else {
            setUserError("")
            e.target.style.border = '1px solid gray';
        }
        }

    const numberHandler = (e) =>{
        setNumber(e.target.value)

            if(!e.target.value.trim()){
                setNumberError("Введите телефон полностью")
                e.target.style.border = '1px solid #D64751';
            } else {
            setNumberError("")
            e.target.style.border = '1px solid gray';
        }
    }

  return (
    <div className={active ? "modal active" : "modal"} onClick={()=> setActive(false)}>
    <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <img src={modalSvg} onClick={()=> setActive(false) } className="module--blockk__cross" alt="" />

        <div className="form">

            <h1 className="form--title">Оставить заявку </h1>

                <div className="all-input">

                    
                <input
                    name="user"
                    value={user}
                    placeholder="Ваше имя*"
                    className={"form--inp"}
                    type='text'
                    onBlur={e => blurHandler(e)}
                    onChange={e => userHandler(e)}
                    
                    
                />
                
                
                {(userApprov && userError) && <div className="error">{userError}</div>}

                   
                <input
                    name="number"
                    value={number}
                    placeholder="+996(___)___-___"
                    type='text'
                    className={"form--inp"}
                    onBlur={e => blurHandler(e)}
                    onChange={e => numberHandler(e)}
                    
                />
                
                 {(numberApprov && numberError) && <div className="error">{numberError}</div>}

                <input
                    placeholder="Напишите Ваш вопрос"
                    className={"form--secondI"}
                />

            </div>

            <button onClick={()=>{
                setCheck(true);
                setActive(false);
                setSubmitted(true);
            }} className="form--btn">Отправить</button>

            <div className="module--blockk__content--checkboxs">

                        
                        <label className="box">
                            <input type="checkbox" className="box--in"  />
                            <h4 className="check">Получить консультацию</h4>
                        </label>
                        <label className="box">
                            <input type="checkbox" className="box--in"  />
                            <h4 className="check">Узнать прайс</h4>
                        </label>
                    </div>
        </div>

    </div>

    <div style={{display: submitted ? 'flex' : 'none',}} className="moduletrue">
            <div onClick={() => { 
                setCheck(false) 
                } }
                
                className="moduletrue--cross">
                
            </div>
            <img src={modalSvg} onClick={()=> setCheck(true) } className="module--blockk__crosser" alt="" />
            <div className="moduletrue--check">
                    <IoMdCheckmark/>
            </div>
            <h1>Спасибо, ваша заявка отправлена! Мы свяжемся с вами и ответим на ваши вопросы.</h1>
            
        </div>
        
</div>
  )
}

export default ModaleWindow