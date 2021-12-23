/*
https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/
*/

var finalValueAfterOperations = function(operations) {
    let val = 0;
    
    for (let op of operations){
        if(op=='X++'||op=='++X'){
            val+=1; 
        }
        else if(op=='X--'||op=='--X'){
            val-=1; 
        }
    }
    return val;
};

var finalValueAfterOperations1 = function(operations) {
    let result = 0;        
    for (let i = 0; i < operations.length; i++) {
        operations[i].replace('X', '') === '++' ? result++ : result--;
    }
    return result;
};