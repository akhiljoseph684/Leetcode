function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
    let numOFDates: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let alice: number[] =  [Number(arriveAlice.slice(0, 2)), Number(arriveAlice.slice(3, 5)), Number(leaveAlice.slice(0, 2)), Number(leaveAlice.slice(3, 5))];
    let bob: number[] =  [Number(arriveBob.slice(0, 2)), Number(arriveBob.slice(3, 5)), Number(leaveBob.slice(0, 2)), Number(leaveBob.slice(3, 5))];
    let countDays: number = 0;
    for(let i: number = 1; i <= numOFDates.length; i++){
        for(let j: number = 1; j <= numOFDates[i - 1]; j++){
            let al: boolean = false
            let bo: boolean = false
            if(i >= alice[0] && i <= alice[2]){
                if(i === alice[0]){
                    if(j >= alice[1]){
                        if(i === alice[2]){
                            if(j <= alice[3])al = true;
                        }else{
                            al = true;
                        }
                    }

                }else if(i > alice[0] && i < alice[2]){
                    al = true;
                }else if(i === alice[2]){
                    if(j <= alice[3]){
                        al = true;
                    }
                }
            }
            if(i >= bob[0] && i <= bob[2]){
                if(i === bob[0]){
                    if(j >= bob[1]){
                        if(i === bob[2]){
                            if(j <= bob[3])bo = true;
                        }else{
                            bo = true;
                        }
                    }

                }else if(i > bob[0] && i < bob[2]){
                    bo = true;
                }else if(i === bob[2]){
                    if(j <= bob[3]){
                        bo = true;
                    }
                }
            }
            if(al && bo)countDays++;
        }
    }
    return countDays;
};