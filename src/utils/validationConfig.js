import i18next from 'i18next'
export const validationConfig = {
    name: {
        isRequired: {
            message: i18next.t('enterName')
        },
        min: {
            message: i18next.t('quantityLetters'),
            param: 2,
        },
    },
    phoneNumber: {
        isRequired: {
            message:  i18next.t('enterPhone')
        }
    },
    email: {
        isRequired: {
            message: i18next.t('enterEmail')
        }, 
        isEmail: {
            message: i18next.t('wrongEmail')
        }
    },
    get: {
        isRequired: {
            message: 'Получите соглашение'
        }
    },
    price: {
        isRequired: {
            message: 'Узнайте о цене'
        }
    },
    policy: {
        isRequired: {
            message: 'Соглашение с политикой'
        }
    },
}