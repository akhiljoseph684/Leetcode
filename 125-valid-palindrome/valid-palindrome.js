/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str1 = '';
    let str2 = '';
    let j = s.length - 1;
    for(let i = 0; i < s.length; i++){
        if((s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= 'a' && s[i] <= 'z') || (s[i] >= '0' && s[i] <= '9')){
            str1 += s[i].toUpperCase()
        }
        if((s[j] >= 'A' && s[j] <= 'Z') || (s[j] >= 'a' && s[j] <= 'z') ||  s[j] >= '0' && s[j] <= '9'){
            str2 += s[j].toUpperCase()
        }
        j--;
    }
    return str1 === str2
};