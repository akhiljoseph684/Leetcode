/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    let output = false;
    for(let i = 0; i < s.length; i++){
        switch(s[i]){
            case '(':
                arr.unshift(')')
                output = false;
                break;
            case '{':
                arr.unshift('}');
                output = false;
                break;
            case '[':
                arr.unshift(']');
                output = false;
                break;
        }
        switch(s[i]){
            case ')':
                if(arr[0] === s[i])arr.shift()
                else return false
                break;
            case '}':
                 if(arr[0] === s[i]) arr.shift()
                else return false
                break;
            case ']':
                if(arr[0] === s[i]) arr.shift()
                else return false
                break;
        }
    }
    if(arr.length === 0)return true
    return output;
};