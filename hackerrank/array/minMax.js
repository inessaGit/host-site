/*
https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem
*/


function miniMaxSum(arr) {
    let res=[];
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    for (let i=0;i<arr.length;i++){
        let num=sum-arr[i];
        res.push(num);
    }
    let min=Math.min(...res);
    let max=Math.max(...res);
    console.log(min+" "+max);
}

function miniMaxSum1(arr) {

        let min = 0;
        let max = 0;
        arr.sort((a,b)=>{return a-b});
        for (let i = 0, j = 1; i < arr.length - 1 && j < arr.length ; i++,j++) {        
            
            min += arr[i];
            max += arr[j];
        }
        console.log(min+" "+max);

}
miniMaxSum1([1,3,5,7,9]);//16/24
miniMaxSum([1,2,3,4,5]);//10/24