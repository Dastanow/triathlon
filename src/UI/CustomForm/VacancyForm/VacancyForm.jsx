import './VacancyForm.scss'
import { useEffect, useState } from 'react'
import good from '../../../Assets/good.svg'
import deleted from '../../../Assets/delete.svg'
import { validate } from '../../../utils/validate'
import { validationConfig } from '../../../utils/validationConfig'
import { CheckBoxes, TextField } from '@components'
import ReactInputMask from 'react-input-mask'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { toggleModal } from '@/store/modalSlice'
import modalSvg from '@assets/modalka.svg'
import { axiosAPI } from '@/App'

export const VacancyForm = () => {
    const [data, setData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        summary: '',
        policy: false,
    })
    const [errors, setErrors] = useState({})
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(toggleModal(false))
    }
    const [files, setFiles] = useState([])
    const [dragActive, setDragActive] = useState(false)
    const [showFiles, setShowFiles] = useState(false)

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

    const isValid = Object.keys(errors).length === 0
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!isValid) return

        const formData = new FormData()
        const properties = ['name', 'email', 'phoneNumber', 'summary']

        properties.forEach((property) => {
            formData.append(property, data[property])
        })
        console.log(formData)
        files.forEach((file) => {
            formData.append('file', file)
        })

        try {
            const response = await axios.post(
                'http://209.38.228.54:83/api/v1/application/',
                formData,
            )
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const [confidentialData, setConfidentialData] = useState([])
    const vacancyData = async () => {
        try {
            const { data } = await axiosAPI.get('file')
            setConfidentialData(data)
            console.log(data);
        } catch (error) {
            console.error('Incorrect:', error)
        }
    }
    useEffect(() => {
        vacancyData()
    }, [])

    const handleChangeFiles = (event) => {
        event.preventDefault()
        setShowFiles(true)
        if (event.target.files && event.target.files[0]) {
            setFiles([...event.target.files])
        }
    }

    const handleDrag = (event) => {
        event.preventDefault()
        setDragActive(true)
    }

    const handleLive = (event) => {
        event.preventDefault()
        setDragActive(false)
    }

    const handleDrop = (event) => {
        event.preventDefault()
        setDragActive(false)
        setShowFiles(true)
        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setFiles([...event.dataTransfer.files])
        }
    }

    const handleReset = () => {
        setFiles([])
        setShowFiles(false)
    }
    console.log(data)

    return (
        <div className="form-vacancy">
            <img
                src={modalSvg}
                onClick={() => handleCloseModal()}
                className="modal-vacancy__cross"
                alt="reset"
            />
            <label className="form-vacancy__title">{t('vacancy')}</label>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form__input-user">
                    <TextField
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder={t('nameSurname')}
                        error={errors.name}
                    />
                    <TextField
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        error={errors.email}
                    />
                    <ReactInputMask
                        mask="+\9\96(999)999-999"
                        onChange={handleChange}>
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
                </div>
                <div>
                    {showFiles ? (
                        <>
                            <ul className="file__list">
                                {files.map(({ name }, id) => (
                                    <>
                                        <img
                                            className="correct__tick"
                                            src={good}
                                            alt="icon"
                                        />
                                        <li className="correct__title" key={id}>
                                            {name}
                                        </li>
                                        <img
                                            className="correct__delete"
                                            onClick={handleReset}
                                            src={deleted}
                                            alt="icon"
                                        />
                                    </>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <div
                            className={`form ${dragActive ? 'drag' : ''}`}
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleLive}
                            onDrop={handleDrop}>
                            <h5 className="file__attach">{t('attachFile')}</h5>
                            <div className="file__drop">{t('dragAndDrop')}</div>
                            <label className="label">
                                <span className="label__span">
                                    {t('upload')}
                                </span>
                                <input
                                    className="input"
                                    type="file"
                                    multiple={true}
                                    onChange={handleChangeFiles}
                                    onDragOver={handleDrag}
                                />
                            </label>
                            <div className="warning">
                                <div className="warning-titles">
                                    {t('fileSize')}
                                </div>
                                <div className="warning-titles__child">
                                    {t('format')}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <button
                    className="form-vacancy__button"
                    type="submit"
                    onClick={handleSubmit}>
                    {t('send')}
                </button>
                <div className="politic">
                    <CheckBoxes
                        name="policy"
                        className="politic__check"
                        value={data.policy}
                        id="policy"
                        onChange={handleChange}
                    />
                    <div className="politic__text">
                        <span className="politic__span">{t('agree')} </span>
                        <a
                            className="politic__reference"
                            target="_blank"
                            href={confidentialData[1]?.file}>
                            {t('politic')}
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default VacancyForm
