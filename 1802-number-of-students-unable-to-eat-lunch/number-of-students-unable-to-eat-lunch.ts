function countStudents(students: number[], sandwiches: number[]): number {
    let i = 0;
    while(i < students.length){
        if(students[0] === sandwiches[0]){
            students.shift();
            sandwiches.shift();
            i = -1;
        }else{
            let num = students.shift();
            students.push(num);
        }
        i++;
    }
    return students.length;
};