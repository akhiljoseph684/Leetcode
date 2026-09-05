function elevatorRequests(n: number, requests: number[]): number {
    let sec: number = requests[0];
    for(let i: number = 0; i <  requests.length - 1; i++){
        sec +=  Math.abs(requests[i] - requests[i + 1])
    }
    return sec;
};