/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
  let str = ''
    let d = new Date(date)
    return str += d.getFullYear().toString(2) + "-" + (d.getMonth() + 1).toString(2) + "-" + d.getDate().toString(2).toString(2)
};