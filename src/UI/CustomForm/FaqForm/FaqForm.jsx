import { useState } from 'react';
import CustomInput from '@/Sections/FAQ/CustomInput';
import './FaqForm.scss';
import { CustomButton } from '@/UI';
import { useTranslation } from 'react-i18next';
import { axiosAPI } from '@/App';
import PropTypes from 'prop-types';
import success from '@assets/check.svg';
import remove from '@assets/trash.svg';
import { formatPhoneNumber, validateForm } from '@/utils/validate';

const Form = ({ type }) => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e, setter, type) => {
        const inputValue = e.target.value;
        let processedValue = inputValue;
        if (type === 'phone') {
            processedValue = formatPhoneNumber(inputValue);
        }
        if (type === 'file') {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setFileUrl(URL.createObjectURL(selectedFile));
            const fileName = selectedFile.name.split('\\').pop();
            setter(fileName);
        } else {
            setter(processedValue);
        }
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

        const isValidForm =
            type === 'default' || type === 'leaveRequest'
                ? validateForm(name, question, phoneNumber, email, setErrors)
                : validateForm(name, phoneNumber, email, setErrors);
        console.log({isValidForm})
        if (!isValidForm) {
            console.log(`Form validation failed for ${type}.`);
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phoneNumber.replace(/\s+/g, '').trim());
            formData.append('description', question);
            if (file) {
                formData.append('file', file);
            }
            console.log('Sending request...');
            const response = await axiosAPI.post(
                type === 'default' ? '/applicationwebhook/' : '/application/',
                formData
            );
            resetForm();
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error during form submission:', error);
            console.log('Form submission failed.');
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

    return (
        <form onSubmit={validateAndSubmitForm} className="faqFormWrapper">
            <div className="inputWrapper">
                <CustomInput
                    value={name}
                    type="default"
                    placeholder={t('yourName')}
                    onChange={(e) => handleInputChange(e, setName, 'name')}
                    error={errors.name}
                />
                <CustomInput
                    value={phoneNumber}
                    type="phone"
                    placeholder="+996(___) ___-___"
                    onChange={(e) => handleInputChange(e, setPhoneNumber, 'phone')}
                    error={errors.phoneNumber}
                />
                {type === 'vacancy' && (
                    <CustomInput
                        value={email}
                        type="email"
                        placeholder="Email*"
                        onChange={(e) => handleInputChange(e, setEmail, 'email')}
                        error={errors.email}
                    />
                )}
                {type === 'vacancy' ? null : (
                    <CustomInput
                        value={question}
                        type="textarea"
                        placeholder={t('writeQuestion')}
                        onChange={(e) => setQuestion(e.target.value)}
                        error={errors.description}
                    />
                )}
                {type === 'vacancy' && (
                    <label
                        className={`faqFormFilefield ${fileUrl ? 'successFilefield' : ''}`}
                        htmlFor={`${fileUrl ? '' : 'filefield'}`}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        {fileUrl ? (
                            <>
                                <div className="faqFormFilefieldWrapper">
                                    <img src={success} alt="Success" />
                                    <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                                        {file}
                                    </a>
                                    <button onClick={handleRemoveFile}>
                                        <img src={remove} alt="Remove" />
                                    </button>
                                </div>
                            </>
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
                        />
                        <CustomInput
                            id="checkboxKnowPrice"
                            type="checkbox"
                            label={t('price')}
                        />
                    </div>
                )}
            </div>
        </form>
    );
};

Form.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Form;
