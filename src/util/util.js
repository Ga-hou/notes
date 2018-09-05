var toString = Object.prototype.toString;

function isArray(val) {
    return toString.call(val) === '[object Array]';
}

function isString(val) {
    return typeof val === 'string';
}

function isNumber(val) {
    return typeof val === 'number';
}

function isUndefined(val) {
    return typeof val === 'undefined';
}

function isObject(val) {
    return val !== null && typeof val === 'object';
}

function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
