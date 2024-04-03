import CustomInput from '../CustomInput/CustomInput'
import { initStateFaqForm } from '../../common/constants'
import { initStateVacancyForm } from '../../common/constants'
import './CustomForm.scss'
import { useState } from 'react'
import good from '../../Assets/good.svg'
import deleted from '../../Assets/delete.svg'
import PropTypes from 'prop-types'

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
    const isFaq = section === 'faq' 
    const isApp = section === 'app'
    const isVacancy = section === 'vacancy'
    const { faqTitle, text } = initStateFaqForm
    const { vacancyTitle } = initStateVacancyForm
    const handleSubmit = (event) => {
        event.preventDefault()
    }
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
            <form 
                className={isClass}
                onSubmit={handleSubmit}  
            >
                <h3 className={formTitle}>{title}</h3>
                {isFaq && <label className="form-faq__title">{faqTitle}</label> ||
                isVacancy && <label className="form-vacancy__title">{vacancyTitle}</label>
                }
                {isFaq &&  <p className="form-faq__text">{text}</p>}
                <div className={formContent}>
                    <div className="form__input-user">
                        <CustomInput
                            name="name"
                            placeholder={fieldName}
                            className={classUser}
                        />
                    </div>
                    {isVacancy && <div className="form-double">
                        <CustomInput 
                            name="email"
                            placeholder="Email*"
                            className="form-vacancy__email"
                        />
                        <CustomInput
                            name="phoneNumber"
                            placeholder="+996(___)___-___"
                            className="form-vacancy__phone-number"
                        />
                    </div> || <CustomInput
                        name="phoneNumber"
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
                                         <img className="correct__tick" src={good} alt="" />
                                         <li className="correct__title" key={id}>{name}</li>
                                         <img className="correct__delete" onClick={handleReset} src={deleted} alt="" />
                                     </>
                                 ))}
                             </ul>
                         
                         </>
                     ) : (
                         <form
                             className={`form ${dragActive ? "drag" : ''}`}
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
                    className={classButton}>
                                 Отправить
                </button>
                {isApp &&
                 <div className="module-block__content-checkboxs">
                     <label className="box">
                         <input type="checkbox" className="box-in" />
                         <h4 className="check">Получить консультацию</h4>
                     </label>
                     <label className="box">
                         <input type="checkbox" className="box-in" />
                         <h4 className="check">Узнать прайс</h4>
                     </label>
                 </div>
                }
                {isVacancy && 
                <div className="politic">
                    <input className="politic__check" type="checkbox" />
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