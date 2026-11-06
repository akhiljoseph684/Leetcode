function minSteps(s: string, t: string): number {
    let obj1 = {};
    let obj2 = {};
    let steps: number = 0;
    for(let i: number = 0; i < s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    for(let key in obj2){
        if(!obj1[key]){
            steps += obj2[key]
        }else if(obj1[key] < obj2[key]){
            steps += obj2[key] - obj1[key]
        }
    }
    return steps;
};