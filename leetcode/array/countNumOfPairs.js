/*
https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/discuss/1647117/As-easy-as-123-or-not-From-n2-to-n.-Super-detailed-explanation.

- Brute force:  to generate permutations of an array 
- Using map  idea behind: 
-- We know nums[i]. We need to store it in the map and check if complimentary numbers is in the map;
-----If compl number present increment counter;

x = nums[i]
y = nums[i]+ k or y=nums[i]-k;

Constraints: 
1 <= nums.length <= 200
1 <= nums[i] <= 100
1 <= k <= 99
*/

//brute force using Array.flatMap, Array.map 
var countKDifference = function(nums, k) {
    let res = nums.flatMap(
        (val,i)=> nums.slice(i+1).map( el => Math.abs(val-el))
        );
        res =res.filter((el)=>el==k);
       // console.log(res.length);

        return res.length; 
};

//brute force O(N^2)
var countKDifference2 = function(nums, k) {
    let n=nums.length;
    let res =0; 
    for (let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
             res+=Math.abs(nums[i]-nums[j]==k);
        }
    }
    return res;
};
/*
time complexity : O(N) using Map;
From the 3 variables in the expressions: 
nums[i] - nums[j] == k 
 nums[j] - nums[i] == k 
 we know 2 - nums[i] and k. How to calculate nums[j] ?
Simple math:
nums[i] - nums[j] == k and nums[j] - nums[i] == k
=>
nums[j] == nums[i] - k 
nums[j] == nums[i] + k

nums3=[3,2,1,5,4] k=2
*/
var countKDifference3 = function(nums, k) {
    let n=nums.length;
    let res =0; 
    let map = new Map();

    for (let i=0;i<n;i++){
         if(map.has(nums[i]+k)) res+=map.get(nums[i]+k);
         if (map.has(nums[i]-k)) res+=map.get(nums[i]-k);
         map.has(nums[i]) ? map.set(nums[i],1+map.get(nums[i])): map.set(nums[i],1);
    }
      //console.log(map);
      //console.log(res);
     return res;
};

//nums3=[3,2,1,5,4] k=2
let countKDifference4= (A, K) => {
    let m = new Map();
    let  cnt = 0
    for (let x of A) {
        cnt += m.get(x + K) || 0;
        cnt += m.get(x - K) || 0;
        m.set(x, 1 + (m.get(x) || 0));
    }
    return cnt;
};
let nums =[1,2,2,1];
let k =1 ;//exp 4

let nums2=[1,3];
let k2=3;//exp 0

let nums3=[3,2,1,5,4];
let k3=2; //exp 3

let nums4=[9,3,1,1,4,5,4,9,5,10]
k4=1; //exp 8

//console.log(countKDifference3(nums,k));
//console.log(countKDifference2(nums2,k2));
console.log(countKDifference4(nums4,k4));
console.log(countKDifference3(nums4,k4));
//console.log(countKDifference(nums3,k3));