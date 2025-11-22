
callCount = 5
var fibGenerator = function* () {
    let newArr = []
    let i =0;
    while(true){
        if(i < 2){
            yield i;
            newArr.push(i)
        }else{
            yield newArr[i - 1] + newArr[i - 2]
            newArr.push(newArr[i - 1] + newArr[i - 2])
        }
        i++
    }
    
};
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
