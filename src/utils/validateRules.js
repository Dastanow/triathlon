export default {
    isRequired: (value) => {
        if(typeof value === 'boolean') return value;
        return Boolean(value.trim());
    },
    isEmail: (value) => /^\S+@\S+\.\S+$/g.test(value),
    isPhoneNumber: (value) => /^\d{10}$/g.test(value),
    min: (value, length) => value.length >= length,
}