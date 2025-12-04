/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s === 'Infinity' || s === '-Infinity' || s === '+Infinity')return false
    s = Number(s)
    return !isNaN(s)
};