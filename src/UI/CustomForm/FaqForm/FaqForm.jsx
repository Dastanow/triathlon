import { useEffect, useState } from 'react';
import CustomInput from '@/Sections/FAQ/CustomInput';
import './FaqForm.scss';
import { CustomButton } from '@/UI';
import { useTranslation } from 'react-i18next';
import { axiosAPI } from '@/App';
import PropTypes from 'prop-types';
import success from '@assets/check.svg';
import remove from '@assets/trash.svg';
import successIcon from '@assets/successForm.svg';
import { formatPhoneNumber, validateForm } from '@/utils/validate';

const Form = ({ type, isOpen, setIsSuccess, isSuccess }) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [errors, setErrors] = useState({});

    console.log(errors)

    useEffect(() => {
        if (isOpen === false) {
            setIsSuccess(false);
        }
    }, [isOpen, setIsSuccess]);

    const handleInputChange = (e, setter, type) => {
        const inputValue = e.target.value;
        let processedValue = inputValue;
    
        if (type === 'phone') {
            processedValue = formatPhoneNumber(inputValue);
        } else if (type === 'file') {
            const selectedFile = e.target.files[0];
            if (selectedFile && (selectedFile.type === 'application/pdf' || selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
                setFile(selectedFile);
                setFileUrl(URL.createObjectURL(selectedFile));
                setter(selectedFile);
            } else {
                setFile(null);
                setFileUrl(null);
            }
            return;
        }
        setter(processedValue);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile);
        setFileUrl(URL.createObjectURL(droppedFile));
    };

    const handleRemoveFile = () => {
        setFile(null);
        setFileUrl(null);
    };

    const validateAndSubmitForm = async (e) => {
        e.preventDefault();
    
        const isValidForm = validateForm(name, question, phoneNumber, email, file, setErrors, type);

        if (!isValidForm) {
            return;
        }
    
        if (!file || file.type !== 'application/pdf') {
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('number', phoneNumber.replace(/\s+/g, '').trim().toString());
    
            if (type === 'default' || type === 'leaveRequest') {
                formData.append('description', question);
            }
            if (type === 'vacancy') {
                formData.append('email', email);
            }
            formData.append('summary', file);
    
            console.log('Sending request...');
            const endpoint = type === 'default' || type === 'leaveRequest' ? '/applicationwebhook/' : '/application/';
            const response = await axiosAPI.post(endpoint, formData);
    
            if (response.status === 200) {
                resetForm();
                setIsSuccess(true);
            } else if (response.status === 404) {
                alert('Page not found. Please try again later.');
                setIsSuccess(false);
            }
        } catch (error) {
            console.error('Error during form submission:', error);
            setIsSuccess(false);
        }
    };

    const resetForm = () => {
        setName('');
        setPhoneNumber('');
        setEmail('');
        setQuestion('');
        setFile(null);
        setFileUrl(null);
        setErrors({});
    };

    if (isSuccess && (type === 'leaveRequest' || type === 'vacancy')) {
        return (
            <div className="formIsSuccess">
                <img src={successIcon} alt="success" />
                <p>
                    {t('sent')}
                </p>
            </div>
        );
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
                    onChange={(e) => handleInputChange(e, setPhoneNumber, 'phone')}
                    error={errors.phoneNumber}
                />
                {type === 'vacancy' && (
                    <CustomInput
                        value={email || ''}
                        type="email"
                        placeholder="Email*"
                        onChange={(e) => handleInputChange(e, setEmail, 'email')}
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
                    <div className={`customFileForm ${errors.summary ? 'errorInput' : ''}`}>
                        <label
                            className={`faqFormFilefield ${fileUrl ? 'successFilefield' : ''}`}
                            htmlFor={`${fileUrl ? '' : 'filefield'}`}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            {fileUrl ? (
                                <div className="faqFormFilefieldWrapper">
                                    <img src={success} alt="Success" />
                                    <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                                        {file?.name}
                                    </a>
                                    <button type="button" onClick={handleRemoveFile}>
                                        <img src={remove} alt="Remove" />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <input id="filefield" type="file" onChange={(e) => handleInputChange(e, setFile, 'file')} />
                                    <h5>{t('attachFile')}</h5>
                                    <p className="faqFormDescription">
                                        {t('dragAndDrop')} <b> {t('upload')}</b>
                                    </p>
                                    <p className="faqFormDescriptionContinue">
                                        {t('fileSize')}
                                        {t('format')}
                                    </p>
                                </>
                            )}
                        </label>
                        {errors.summary && (
                            <>
                                <span>{errors.summary}</span>
                            </>
                        )}
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
    );
};

Form.propTypes = {
    type: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    isSuccess: PropTypes.bool,
    setIsSuccess: PropTypes.func,
};

export default Form;
