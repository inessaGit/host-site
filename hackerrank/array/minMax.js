/*
https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem
*/

function miniMaxSum(arr) {
    // 1. calculate sum 2. go over array again and subtract each el 
    let sum = 0;
    let max_sum =0;
    let min_sum =Number.POSITIVE_INFINITY;
     arr.forEach(el=>{ sum+=el });

     for (let i=0;i<arr.length;i++){
         max_sum=Math.max(max_sum,sum-arr[i]);
         min_sum= Math.min(min_sum,sum-arr[i]);
     }
     console.log(`${max_sum} ${min_sum}`); 
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

//miniMaxSum1([1,3,5,7,9]);//16/24
miniMaxSum([1,2,3,4,5]);//10/24