import jwtDecode from 'jwt-decode';

/**
 * Пытается декодировать JWT-токен. Возвращает null, если декодировать не удалось.
 *
 * @param {String} token JWT-токен
 * @returns {{exp: Number, iat: Number}}
 */
export default function tryDecode(token) {
    try {
        return jwtDecode(token);
    } catch (e) {
        return null;
    }
}
