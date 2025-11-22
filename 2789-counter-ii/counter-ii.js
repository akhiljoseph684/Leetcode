/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let org = init
    let obj = {
        'increment':function(){
            return ++init;
        },
        'reset':function(){
            init = org;
            return org;
        },
        'decrement':function(){
            return --init
        }
    }
    return obj
};
counter = createCounter(25)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())