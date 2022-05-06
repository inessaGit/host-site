/*
https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records/problem?isFullScreen=true

*/

function breakingRecords(scores) {
    let min =0;
    let max=0 ;
    let result=[];
    let lowest_score=scores[0];
    let highest_score=scores[0]; 
    
    for (let score of scores){
        if (score>highest_score) {
            max++;
            highest_score=score;
        }
        else if (score<lowest_score){
            min++;
            lowest_score=score;
        } 
    }
    result.push(max,min);
    return result; 

}
