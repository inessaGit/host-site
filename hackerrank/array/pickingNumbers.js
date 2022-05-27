
/*
Given an array of integers, find the longest subarray where 
the absolute difference between any two elements is less than or equal to 1.

https://www.hackerrank.com/challenges/three-month-preparation-kit-picking-numbers/problem?isFullScreen=true
Important: 
-Subarray in this problem doesn't mean "solid", subarray elements can be far from each other

Approach: 
- Use counting sort ;count of how often each value appear and store in temp array 
-- then loop over temp array.length-1 and 
-  then store curSum and max
---- - curSum=temp[i]+ temp[i+1]; max=Math.max(curSum,max)

int pickingNumbers(vector<int> a) {
    vector<int> counter(100);
    
    for(int i=0;i<a.size();i++){
        counter[a[i]-1]++;
    }
    int max = 0;
    int cur_sum;
    for(int i=0;i<counter.size()-1;i++){
        cur_sum = counter[i] + counter[i+1];
        if(cur_sum > max){
            max = cur_sum;
        }
    }
    return max;
}
*/

function pickingNumbers(a) {
    let temp =Array(100).fill(0); 
    let max =0;
    let currSum=0;

    for(let el of a){
       let index=el; 
       temp[index]++;
    }
    console.log(temp)

    for (let i=0;i<temp.length-1;i++){
       currSum=temp[i]+temp[i+1];
       max=Math.max(currSum,max);
       console.log(`curSum=${currSum} max=${max}`)
    }
    console.log(max);
    return max;
}

let a= [4,6,5,3,3,1];
let a1=[98,3,99, 1, 97, 2] //exp 2 
console.log(pickingNumbers(a1)) ;
