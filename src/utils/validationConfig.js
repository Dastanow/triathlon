export const validationConfig = {
    name: {
        isRequired: {
            message: 'Введите ваше  имя'
        },
        min: {
            message: 'Имя должно содержать не менее 2 букв',
            param: 2,
        },
    },
    phoneNumber: {
        isRequired: {
            message: 'Введите телефон полностью',
        }
    },
    email: {
        isRequired: {
            message: 'Поле Email обязательна для заполнения'
        }, 
        isEmail: {
            message: 'Email введен некорректно'
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