
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = []
    for(let i = 1; i <= n; i++){
        if(i % 3 !== 0 && i % 5 !== 0){
            arr.push(String(i))
        }else{
            if(i % 3 === 0 && i % 5 === 0){
                arr.push("FizzBuzz")
            }else{
                
            switch(true){
                case i % 3 === 0:arr.push("Fizz");break;
                case i % 5 === 0:arr.push("Buzz");break;
            }
            }
        }
    }
    return arr;
};
console.log(fizzBuzz(30))