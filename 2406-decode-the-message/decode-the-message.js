/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  let charCode = 97;
    let obj = {};
    for(let i = 0; i < key.length; i++){
      if(key[i] !== " "){
        if(!obj[key[i]]){
          obj[key[i]] = String.fromCharCode(charCode);
          charCode++;
        }
      }
    }
    let str = "";
    for(let i = 0; i < message.length; i++){
      if(message[i] === " ") str += " ";
      else str += obj[message[i]]
    }
    return str;
};