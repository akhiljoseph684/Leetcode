/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let str = '';
    for(let i = 0; i < command.length; i++){
        switch(true){
            case command[i] === 'G':str += 'G';break;
            case command[i] === '(' && command[i + 1] === ')':str += 'o';break;
            case command[i] === '(':str += 'al';break;
            default:break;
        }
    }
    return str
};