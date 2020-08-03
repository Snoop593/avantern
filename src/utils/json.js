export default string => {
    try {
        return JSON.parse(string);
    } catch (error) {
        Error('Ошибка чтения JSON');

        return {};
    }
};
