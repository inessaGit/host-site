/*
https://leetcode.com/problems/intersection-of-two-arrays-ii/
Approach 1: 
create a hashmap base on number frequency of nums1(whichever one is longer).
 Then for every element of nums2, look upon the hashmap. 
 If we found an intersection, deduct by 1 to avoid duplicate
This solution is O(N + M) time complexity, O(N) for iterate one of the array to create a hashmap and O(M) to iterate the other array. O(N) space to store such hashmap.

Follow up: 
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/


var intersect = function(nums1, nums2) {
    //Step 1: set map counting frequency of num in num1
    let map = new Map(); 
    for (let num of nums1){
        if (!map.has(num)){
            map.set(num,1);
        }
        else{
            map.set(num,map.get(num)+1);
        }
    }
    let res =[];
   //Step2 : A. go over nums2 B. deduct from map freq if the same ; C. add to the array res
    for (let num of nums2){
        if (map.get(num)>0){ //[1,2,2 ] [2]
            res.push(num);
            map.set(num,map.get(num)-1);
        }
    }
};
//both arrays sorted 
 function intersectSorted(nums1,nums2){

    let res=[];
    let m=nums1.length;
    let n=nums2.length; 
     let i=0;
     let j=0;
    while (i<m && j<n){
        if (nums1[i]<nums2[j]) i++;
        else if (nums2[j]<nums1[i]) j++;
        else  {
            res.push(nums1[i++])
        }
    }
    console.log(res); 
 }
let nums1 = [1,2,2,1];
let nums2 = [2,3];
let nums3 = [2,2] ;
console.log(intersect(nums1,nums2)); //exp [2]

console.log(intersect(nums1,nums3)); //exp [2,2]

let a=[1,2,4,6];
let b=[2,5,6]
console.log(intersectSorted(a,b));

let k=0, s=0;
while (k<4 && s<2){
    if (k<2) {
        console.log("*"); k++; }
    else if (s<2) {
        console.log("**"); s++}
    else console.log("****") 
}