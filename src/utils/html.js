export const blockBodyScroll = (boolean) => {
    let overflow = 'inherit';
    let height = 'auto';

    if (boolean) {
        overflow = 'hidden';
        height = '100%';
    }
    document.querySelector('html').style.cssText = `overflow: ${overflow}; height: ${height};`;
    document.querySelector('body').style.cssText = `overflow: ${overflow}; height: ${height};`;
};
