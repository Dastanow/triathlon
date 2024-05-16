import './FaqForm.scss'
import { useEffect, useState } from 'react'
import { validate } from '../../../utils/validate'
import { validationConfig } from '../../../utils/validationConfig'
import { TextField } from '@components'
import ReactInputMask from 'react-input-mask'
import { useTranslation } from 'react-i18next'

export const FaqForm = () => {
    const [data, setData] = useState({
        name: '',
        phoneNumber: '',
    })
    const [errors, setErrors] = useState({})
    const { t } = useTranslation();
    
    const isValid = Object.keys(errors).length === 0
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!isValid) return
    }

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    useEffect(() => {
        const errors = validate(data, validationConfig)
        setErrors(errors)
    }, [data])

    return (
        <div className="form-faq">
            <div>
                <label className="form-faq__title">{t('remains')}</label>
                <p className="form-faq__text">{t('answer')}</p>
            </div>
            <form className="" onSubmit={handleSubmit}>
                <div className="form-faq__content">
                    <TextField
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder={t('yourName')}
                        error={errors.name}
                    /> 
                    <ReactInputMask mask="+\9\96(999)999-999" onChange={handleChange}>
                        {(inputProps) => (
                            <input
                                name="phoneNumber"
                                value={inputProps.value}
                                onChange={inputProps.onChange}
                                placeholder="+996(___)___-___"
                                className="validate__input"
                                error={errors && errors.phoneNumber}
                            />
                        )}  
                    </ReactInputMask>
                    <textarea
                        type="text-area"
                        placeholder={t('writeQuestion')}
                        className="textArea"
                    />
                    <button
                        className="form-faq__button"
                        type="submit"
                        onClick={handleSubmit} >
                        {t('send')}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FaqForm