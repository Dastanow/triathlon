import i18n from '@/i18n'
import validateRules from './validateRules'

export const validate = (data, config) => {
    const errors = {}

    for (const fieldName in data) {
        const validationRules = config[fieldName]
        for (const rule in validationRules) {
            const { message, param } = validationRules[rule]
            const validator = validateRules[rule]
            const hasError = validator && !validator(data[fieldName], param)

            if (hasError && !errors[fieldName]) {
                errors[fieldName] = message
                break
            }
        }
    }

    return errors
}

export const validateForm = (
    name,
    question,
    phoneNumber,
    email,
    file,
    setErrors,
    type,
) => {
    let formErrors = {}

    if (!name) {
        formErrors.name = i18n.t('enterName')
    }
    if (!phoneNumber) {
        formErrors.phoneNumber = i18n.t('enterPhone')
    } else if (phoneNumber.length <= 16) {
        formErrors.phoneNumber = i18n.t('enterPhoneFully')
    }

    if (type === 'default' || type === 'leaveRequest') {
        if (!question) {
            formErrors.description = i18n.t('enterShortDescrib')
        }
    }

    if (type === 'vacancy') {
        if (!email) {
            formErrors.email = i18n.t('enterEmail')
        }

        if (!file) {
            formErrors.summary = i18n.t('selectFile')
        } 
    }

    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
}
