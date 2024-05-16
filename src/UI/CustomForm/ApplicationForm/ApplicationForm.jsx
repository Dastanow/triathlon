import './ApplicationForm.scss'
import { useEffect, useState } from 'react'
import { validate } from '../../../utils/validate'
import { validationConfig } from '../../../utils/validationConfig'
import { CheckBoxes, TextField } from '@components'
import ReactInputMask from 'react-input-mask'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { toggleModal } from '@/store/modalSlice'
import modalSvg from '@assets/modalka.svg'


export const ApplicationForm = () => {
    const [data, setData] = useState({
        name: '',
        phoneNumber: '',
        price: false,
        get: false,
    })
    const [errors, setErrors] = useState({})
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(toggleModal(false))
    }


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
        <div className="form-app">
            <img
                src={modalSvg}
                onClick={() => handleCloseModal()}
                className="modal-cross"
                alt="reset"
            />
            <label className="form-app__title">{t('buttonHero')}</label>
            <form className="" onSubmit={handleSubmit}>
                <div className="form-app__content">
                    <TextField
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder={t('yourName')}
                        error={errors.name}
                    />
                    <ReactInputMask
                        mask="+\9\96(999)999-999"
                        onChange={handleChange}
                        error={errors.name}>
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
                        className="form-app__button"
                        type="submit"
                        onClick={handleSubmit}>
                        {t('send')}
                    </button>
                </div>
                <div className="content-checkboxes">
                    <label className="box">
                        <CheckBoxes
                            name="get"
                            className="box-in"
                            value={data.get}
                            id="get"
                            onChange={handleChange}
                        />

                        <h4 className="check">{t('consultation')}</h4>
                    </label>
                    <label className="box">
                        <CheckBoxes
                            name="price"
                            className="box-in"
                            value={data.price}
                            id="price"
                            onChange={handleChange}
                        />
                        <h4 className="check">{t('price')}</h4>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default ApplicationForm
