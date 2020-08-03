export function getCookie(name) {
    if (typeof document !== 'object') return null;

    name = name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1');
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return matches ? decodeURIComponent(matches[1]) : null;
}

export function setCookie(name, value, maxAge) {
    if (typeof document !== 'object') return;

    value = encodeURIComponent(value);

    let cookie = `${name}=${value}; path=/`;

    if (typeof maxAge === 'number') {
        cookie = `${cookie}; max-age=${maxAge}`;
    }

    document.cookie = cookie;
}

export function deleteCookie(name) {
    setCookie(name, '', -1);
}
