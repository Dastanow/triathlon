import CustomInput from '../CustomInput/CustomInput'
import { initStateFaqForm } from '../../common/constants'
import { initStateVacancyForm } from '../../common/constants'
import './CustomForm.scss'
import { useEffect, useState } from 'react'
import good from '../../Assets/good.svg'
import deleted from '../../Assets/delete.svg'
import PropTypes from 'prop-types'
import TextField from '../../Components/TextField/TextField'
import { validate } from '../../utils/validate'
import { validationConfig } from '../../utils/validationConfig'
import CheckBoxes from '../../Components/CheckBoxes/CheckBoxes'

const CustomForm = (props) => {
    const {
        section,
        formContent,
        formTitle,
        fieldName,
        title,
        isClass,
        classArea,
        classUser,
        classPhone,
        classButton,
    } = props
    const [ data, setData] = useState({
        name:'',
        phoneNumber:'',
        email:'',
        price: false,
        get: false,
    })
    const [ errors, setErrors ] = useState({})

    const handleChange = (target) =>{
        setData((prevState) =>({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    useEffect(() => {
        const errors = validate(data, validationConfig);
        setErrors(errors)
    }, [data])

    const isValid = Object.keys(errors).length ===0;
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValid) return
    }
    const isFaq = section === 'faq' 
    const isApp = section === 'app'
    const isVacancy = section === 'vacancy' 
    const { faqTitle, text } = initStateFaqForm
    const { vacancyTitle } = initStateVacancyForm
    const [ files, setFiles ] = useState([])
    const [dragActive, setDragActive] = useState(false);
    const [showFiles, setShowFiles] = useState(false);

    const handleChangeFiles = (event) => {
        event.preventDefault();
        setShowFiles(true)
        if(event.target.files && event.target.files[0]){
            setFiles([... event.target.files])
        }
    }

    const handleDrag =  (event) =>{
        event.preventDefault();
        setDragActive(true);
    };

    const handleLive = (event) =>{
        event.preventDefault();
        setDragActive(false);
    };

    const handleDrop =  (event) =>{
        event.preventDefault();
        setDragActive(false);
        setShowFiles(true)
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setFiles([...event.dataTransfer.files]);
        }
    };

    const handleReset = () => {
        setFiles([]);
        setShowFiles(false);
    }

    return (
        <div>
            {isFaq && <label className="form-faq__title">{faqTitle}</label> ||
                isVacancy && <label className="form-vacancy__title">{vacancyTitle}</label> ||
                isApp && <label className={formTitle}>{title}</label>
            }
            <form 
                className={isClass}
                onSubmit={handleSubmit}  
            >
                {isFaq &&  <p className="form-faq__text">{text}</p>}
                <div className={formContent}>
                    <div className="form__input-user">
                        <TextField
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            placeholder={fieldName}
                            className={classUser}
                            error={errors.name}
                        />
                    </div>
                    {isVacancy && <div className="form-double">
                        <TextField 
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            className="form-vacancy__email"
                        />
                        <TextField
                            name="phoneNumber"
                            value={data.phoneNumber}
                            onChange={handleChange}
                            placeholder="+996(___)___-___"
                            className="form-vacancy__phone-number"
                        />
                    </div> || <TextField
                        name="phoneNumber"
                        value={data.phoneNumber}
                        onChange={handleChange}
                        placeholder="+996(___)___-___"
                        className={classPhone}
                        
                    />} 
                    {isFaq | isApp  && 
                        <CustomInput
                            type="text-area"
                            placeholder="Напишите Ваш вопрос"
                            className={classArea}/>
                    }
                </div>
                {isVacancy && 
                 <div>
                     {showFiles ? (
                         <>
                             <ul className="file__list">
                                 {files.map(({name}, id) => (
                                     <>
                                         <img className="correct__tick" src={good} alt="icon" />
                                         <li className="correct__title" key={id}>{name}</li>
                                         <img className="correct__delete" onClick={handleReset} src={deleted} alt="icon" />
                                     </>
                                 ))}
                             </ul>
                         
                         </>
                     ) : (
                         <form
                             className={`form ${dragActive ? 'drag' : ''}`}
                             onSubmit={()=>handleSubmit}
                             onDragEnter={handleDrag}
                             onDragOver={handleDrag}
                             onDragLeave={handleLive}
                             onDrop={handleDrop} 
                         >
                             <h5 className="file__attach">Прикрепить файл</h5>
                             <div className="file__drop">Перетащите файл сюда или</div>
                             <label className="label">
                                 <span>загрузите файл,</span>
                                 <input
                                     className="input"
                                     type="file"
                                     multiple={true}
                                     onChange={handleChangeFiles}
                                 />
                             </label>
                             <div className="warning">
                                 <div className="warning-titles">
                            Размер файла не должен превышать 10 Мб
                                 </div>
                                 <div className="warning-titles__child">
                            Поддерживаемый формат файлов: pdf, doc, docx
                                 </div> 
                             </div>   
                         </form>
                     )}
                 </div>
                }
                <button
                    className={classButton}
                    type="submit"
                    disabled={!isValid}
                >
                             Отправить
                </button>
                {isApp &&
                 <div className="module-block__content-checkboxs">
                     <label className="box">
                         <CheckBoxes
                             name="get"
                             className="box-in"
                             value={data.get}
                             id="get"
                             onChange={handleChange}
                         />

                         <h4 className="check">Получить консультацию</h4>
                     </label>
                     <label className="box">
                         <CheckBoxes
                             name="price"
                             className="box-in"
                             value={data.price}
                             id="price"
                             onChange={handleChange}
                         />
                         <h4 className="check">Узнать прайс</h4>
                     </label>
                 </div>
                }
                {isVacancy && 
                <div className="politic">
                    <CheckBoxes
                        name="price"
                        className="politic__check"
                        value={data.price} 
                        id="price"
                        onChange={handleChange}
                    />
                    <span className="politic__text">Я согласен с <a className="politic__reference"
                        href="">политикой обработки персональных данных</a></span>
                </div>
                }
            </form>
        </div>
    )
}

CustomForm.propTypes = {
    section:PropTypes.string,
    formContent:PropTypes.string,
    formTitle:PropTypes.string,
    fieldName:PropTypes.string,
    title:PropTypes.string,
    isClass:PropTypes.string,
    classArea:PropTypes.string,
    classUser:PropTypes.string,
    classPhone:PropTypes.string,
    classButton:PropTypes.string,
}

export default CustomForm