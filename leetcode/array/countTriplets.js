/*
https://leetcode.com/problems/count-good-triplets/
A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
Where |x| denotes the absolute value of x

i < j < k --> as j = i + 1, k = j + 1 --> for n elements last pair will be
 i = n - 3, j = n - 2, k = n - 1.
but if you want to run all loops till n no - harm.

Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].

*/

//i < j < k --> as j = i + 1, k = j + 1 
//in the first loop we go until n - 2, in the second loop until n - 1 and in the third one until n
var countGoodTriplets = function(arr, a, b, c) {
    let counter=0;
    let n=arr.length;
    
    for (let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
            if(Math.abs(arr[i]-arr[j]>a))continue;
            for(let k=j+1;k<n;k++){
                if(Math.abs(arr[j]-arr[k]<=b&&
                    Math.abs(arr[k]-arr[i]<=c)))
                    counter++;
            }
        }
    }

    return counter; 
    
};

arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
console.log(countGoodTriplets(arr,a,b,c)) //4