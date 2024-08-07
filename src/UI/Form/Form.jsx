import { useEffect, useState } from 'react'
import CustomInput from '@/Sections/FAQ/CustomInput'
import './Form.scss'
import { CustomButton } from '@/UI'
import { useTranslation } from 'react-i18next'
import { axiosAPI } from '@/App'
import PropTypes from 'prop-types'
import success from '@assets/check.svg'
import remove from '@assets/trash.svg'
import successIcon from '@assets/successForm.svg'
import { validateForm } from '@/utils/validate'

const Form = ({ type, isOpen, setIsSuccess, isSuccess }) => {
    const { t } = useTranslation()
    const [name, setName] = useState('')
    const [question, setQuestion] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [file, setFile] = useState(null)
    const [fileUrl, setFileUrl] = useState(null)
    const [errors, setErrors] = useState({})

    console.log(type);
    useEffect(() => {
        if (isOpen == false) {
            setIsSuccess(false)
            resetForm()
        }
    }, [isOpen, setIsSuccess])

    const handleInputChange = (e, setter, type) => {
        const inputValue = e.target.value
        let processedValue = inputValue

        if (type === 'phone') {
            processedValue = inputValue
            setter(processedValue)
            setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }))
            return
        } else if (type === 'file') {
            const selectedFile = e.target.files[0]
            if (selectedFile) {
                if (
                    selectedFile.type === 'application/pdf' ||
                    selectedFile.type ===
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                    selectedFile.type === 'application/msword'
                ) {
                    setFile(selectedFile)
                    setFileUrl(URL.createObjectURL(selectedFile))
                    setErrors((prevErrors) => ({ ...prevErrors, summary: '' }))
                } else {
                    setFile(null)
                    setFileUrl(null)
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        summary: t('selectProperFile'),
                    }))
                }
            } else {
                setFile(null)
                setFileUrl(null)
            }
            return
        }
        setter(processedValue)
        setErrors((prevErrors) => ({ ...prevErrors, [type]: '' }))
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        const droppedFile = e.dataTransfer.files[0]
        if (
            droppedFile &&
            (droppedFile.type === 'application/pdf' ||
                droppedFile.type ===
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
        ) {
            setFile(droppedFile)
            setFileUrl(URL.createObjectURL(droppedFile))
            setErrors((prevErrors) => ({ ...prevErrors, summary: '' }))
        } else {
            setFile(null)
            setFileUrl(null)
            setErrors((prevErrors) => ({
                ...prevErrors,
                summary: t('invalidFileFormat'),
            }))
        }
    }

    const handleRemoveFile = () => {
        setFile(null)
        setFileUrl(null)
        setErrors((prevErrors) => ({
            ...prevErrors,
            summary: t('selectFile'),
        }))
    }

    const validateAndSubmitForm = async (e) => {
        e.preventDefault()

        const isValidForm = validateForm(
            name,
            question,
            phoneNumber,
            email,
            file,
            setErrors,
            type,
        )

        if (!isValidForm) {
            return
        }

        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append(
                type === 'vacancy' ? 'number' : 'phone',
                phoneNumber.replace(/\s+/g, '').trim(),
            )

            if (type === 'default' || type === 'leaveRequest') {
                formData.append('description', question)
            }
            if (type === 'vacancy') {
                formData.append('email', email)
            }
            formData.append('summary', file)

            const endpoint =
                type == 'vacancy' ? '/application/' : '/applicationquestion/'

            const response = await axiosAPI.post(endpoint, formData)

            if (response.status === 200 || response.status === 201) {
                resetForm()
                setIsSuccess(true)
            } else if (response.status === 404) {
                alert('Page not found. Please try again later.')
                resetForm()
                setIsSuccess(false)
            }
        } catch (error) {
            console.error('Error during form submission:', error)
            resetForm()
            setIsSuccess(false)
        }
    }

    const resetForm = () => {
        setName('')
        setPhoneNumber('')
        setEmail('')
        setQuestion('')
        setFile(null)
        setFileUrl(null)
        setErrors({})
    }

    if (isSuccess && (type === 'leaveRequest' || type === 'vacancy')) {
        return (
            <div className="formIsSuccess">
                <img src={successIcon} alt="success" />
                <p>{t('sent')}</p>
            </div>
        )
    }

    return (
        <form onSubmit={validateAndSubmitForm} className="faqFormWrapper">
            <div className="inputWrapper">
                <CustomInput
                    value={name || ''}
                    type="default"
                    placeholder={t('yourName')}
                    onChange={(e) => handleInputChange(e, setName, 'name')}
                    error={errors.name}
                />
                <CustomInput
                    value={phoneNumber || ''}
                    type="phone"
                    placeholder="+996(___) ___-___"
                    onChange={(e) =>
                        handleInputChange(e, setPhoneNumber, 'phone')
                    }
                    error={errors.phoneNumber}
                />
                {type === 'vacancy' && (
                    <CustomInput
                        value={email || ''}
                        type="email"
                        placeholder="Email*"
                        onChange={(e) =>
                            handleInputChange(e, setEmail, 'email')
                        }
                        error={errors.email}
                    />
                )}
                {type !== 'vacancy' && (
                    <CustomInput
                        value={question || ''}
                        type="textarea"
                        placeholder={t('writeQuestion')}
                        onChange={(e) => setQuestion(e.target.value)}
                        error={errors.description}
                    />
                )}
                {type === 'vacancy' && (
                    <div
                        className={`customFileForm ${
                            errors.summary ? 'errorInput' : ''
                        }`}>
                        <label
                            className={`faqFormFilefield ${
                                fileUrl ? 'successFilefield' : ''
                            }`}
                            htmlFor={`${fileUrl ? '' : 'filefield'}`}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}>
                            {fileUrl ? (
                                <div className="faqFormFilefieldWrapper">
                                    <img src={success} alt="Success" />
                                    <a
                                        href={fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        {file?.name}
                                    </a>
                                    <button
                                        type="button"
                                        onClick={handleRemoveFile}>
                                        <img src={remove} alt="Remove" />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <input
                                        id="filefield"
                                        type="file"
                                        onChange={(e) =>
                                            handleInputChange(
                                                e,
                                                setFile,
                                                'file',
                                            )
                                        }
                                        accept=".pdf, .doc, .docx"
                                    />
                                    <h5>{t('attachFile')}</h5>
                                    <p className="faqFormDescription">
                                        {t('dragAndDrop')} <b>{t('upload')}</b>
                                    </p>
                                    <p className="faqFormDescriptionContinue">
                                        {t('fileSize')} <br />
                                        {t('format')}
                                    </p>
                                </>
                            )}
                        </label>
                        {errors.summary && <span>{errors.summary}</span>}
                    </div>
                )}
            </div>
            <div className="faqFormBottom">
                <CustomButton type="primary" types="submit">
                    {t('send')}
                </CustomButton>
                {type === 'leaveRequest' && (
                    <div className="checkboxWrapper">
                        <CustomInput
                            id="checkboxGetConsultation"
                            type="checkbox"
                            label={t('consultation')}
                            onChange={() => {}}
                        />
                        <CustomInput
                            id="checkboxKnowPrice"
                            type="checkbox"
                            label={t('price')}
                            onChange={() => {}}
                        />
                    </div>
                )}
            </div>
        </form>
    )
}

Form.propTypes = {
    type: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    isSuccess: PropTypes.bool,
    setIsSuccess: PropTypes.func,
}

export default Form
