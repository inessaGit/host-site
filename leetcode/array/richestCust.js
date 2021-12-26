/*
https://leetcode.com/problems/richest-customer-wealth/

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
*/

var maximumWealth = function(accounts) {
    let sum=0;
    let maxSum=0; 
    for (let account of accounts){
        //calc sum 
        sum=account.reduce((curVal,prevVal)=>{
         return curVal+prevVal
        });
        if(maxSum<sum){
            maxSum=sum;
        }
    }
    return maxSum; 
};

var maximumWealth1 = function(accounts) {
    return Math.max(...accounts.map(account => 
        account.reduce((accumulator, current) => accumulator + current, 0)
    ))
};

let nums=[1,2,3,4]; //10
let ans =nums.reduce((prevVal,curVal)=>{
   return prevVal+curVal;
});

let ans2 =nums.reduce((prevVal,curVal)=>{
    return prevVal+curVal;
 },13);
console.log(ans2) //using initVal 13 