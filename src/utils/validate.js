import validateRules from './validateRules';

export const validate = (data, config) => {
    const errors = {};
    
    for (const fieldName in data) {
        const validationRules = config[fieldName];
        for (const rule in validationRules) { 
            
            const { message, param } = validationRules[rule];
            
            //получение нужного валидатора
            const validator = validateRules[rule];

            //вызываем валидатор, если он есть
            const hasError = validator && !validator(data[fieldName], param)

            if(hasError && !errors[fieldName]) {
                errors[fieldName] = message;
                break;
            }
        }
    }

    return errors;
}