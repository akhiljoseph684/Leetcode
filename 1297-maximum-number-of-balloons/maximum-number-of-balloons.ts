function maxNumberOfBalloons(text: string): number {
    let obj = {};
    let name = "ballon"
    for(let i: number = 0; i < text.length; i++){
        if(name.includes(text[i])){
            obj[text[i]] = (obj[text[i]] || 0) + 1
        }
    }
    for(let i: number = 0; i < name.length; i++){
        if(!obj[name[i]]){
            return 0;
        }
    }
    let num: number = Infinity;
    for(let key in obj){
        if(key === "l" || key === "o"){
            if(num > obj[key] / 2){
                num = Math.floor(obj[key] / 2);
            }
        }else{
            if(num > obj[key]){
                num = obj[key]
            }
        }
    }
    
    return num;
};