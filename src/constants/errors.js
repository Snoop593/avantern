// export const REQUIREMENTS_ABOVE = 'REQUIREMENTS_ABOVE';
// export const PASSWORDS_DO_NOT_MATCH = 'PASSWORDS_DO_NOT_MATCH';
// export const TOKEN_NOT_FOUND_IN_RESPONSE = 'TOKEN_NOT_FOUND_IN_RESPONSE';
export const SERVER_ERROR = 'SERVER_ERROR';
export const CLIENT_ERROR = 'CLIENT_ERROR';
export const REQUIRED_DATA_NOT_FOUND = 'REQUIRED_DATA_NOT_FOUND';

export default type => {
    const errors = {
        // unauthorized: 'Неправильный номер телефона или пароль', // от бэка
        // invalid_grant: 'Неправильный номер телефона или пароль', // от бэка
        // username_not_found: 'Этот номер не зарегистрирован в личном кабинете', // от бэка
        // user_already_has_access: 'Этот номер уже имеет доступ к личному кабинету', // от бэка
        // sms_code_is_incorrect: 'Введён неверный код', // от бэка
        // sms_code_has_expired: 'Срок жизни подтверждаемой операции истек', // от бэка
        // [REQUIREMENTS_ABOVE]: 'Пароль не соответствует требованиям выше',
        // [PASSWORDS_DO_NOT_MATCH]: 'Пароли не совпадают. Попробуйте ввести снова',
        // [TOKEN_NOT_FOUND_IN_RESPONSE]: 'Недостаточно данных в ответе от сервера',
        [REQUIRED_DATA_NOT_FOUND]: 'Недостаточно данных в ответе от сервера',
        [SERVER_ERROR]: 'Ошибка сервера',
        [CLIENT_ERROR]: 'Ошибка приложения',
        default: 'Неизвестная ошибка'
    };

    return errors[type] ?? errors.default;
};
