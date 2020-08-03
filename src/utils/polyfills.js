/* eslint-disable */

// globalThis
-function(){
    if (typeof globalThis !== 'undefined') {
        return
    }

    const getGlobalThis = () => {
        if (typeof self !== 'undefined') return self;
        if (typeof window !== 'undefined') return window;
        if (typeof global !== 'undefined') return global;
        if (typeof this !== 'undefined') return this;
        throw new Error('Unable to locate global `this`');
    };
    const _globalThis = getGlobalThis()

    Object.defineProperty(_globalThis, 'globalThis', {
        value: _globalThis,
        writable: true,
        enumerable: false,
        configurable: true
    })
}();
