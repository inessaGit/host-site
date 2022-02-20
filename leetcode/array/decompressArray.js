/*

https://leetcode.com/problems/decompress-run-length-encoded-list/
Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

-break into pairs 
- generate one array per pair 
-  result array = concat arrays 
- nums lenght always even => always pairs 

Approach: 
- two pointers i =0, j =i+1 for each nums[i], nums[j] generate array where 
 val = nums[j] repeat times = nums[i]
*/

var decompressRLElist = function(nums) {
    let n= nums.length; 
    let res =[];
    let j =0;
    for (let i=0; i<n; i+=2){
        j=i+1; 
        let val = nums[j];
        let repeat = nums[i];
        while (repeat>0){
            res.push(val);
            repeat--;
        }
    }
    console.log(res);
    return res;
};

let nums = [1,1,2,3];
//exp [1,3,3]
decompressRLElist(nums);

